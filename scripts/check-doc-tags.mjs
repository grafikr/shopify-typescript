#!/usr/bin/env node
// Checks that the `@http` doc tags and the Endpoints map agree.
//
//   - every `@http METHOD /path` tag in src/js and src/json must match a key of
//     `Endpoints` in src/endpoints/index.d.ts
//   - every key of `Endpoints` must be covered by at least one `@http` tag
//
// Usage: node scripts/check-doc-tags.mjs            print problems, exit 1 if any
//        node scripts/check-doc-tags.mjs --rdjson   print reviewdog rdjson instead
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const normalize = (path) => path.replace(/\[(\w+)\]/g, ':$1');

const tags = [];
for (const dir of ['src/js', 'src/json']) {
  for (const file of readdirSync(dir).filter((f) => f.endsWith('.d.ts'))) {
    const lines = readFileSync(join(dir, file), 'utf8').split('\n');
    lines.forEach((line, i) => {
      const match = line.match(/@http (GET|POST|PUT|PATCH|DELETE) (\S+)/);
      if (match)
        tags.push({
          file: join(dir, file),
          line: i + 1,
          method: match[1],
          path: normalize(match[2]),
        });
    });
  }
}

const endpointsFile = 'src/endpoints/index.d.ts';
const endpointLines = readFileSync(endpointsFile, 'utf8').split('\n');
const endpoints = [];
endpointLines.forEach((line, i) => {
  const match = line.match(/^\s+'(\/[^']+)':/);
  if (match) endpoints.push({ line: i + 1, path: match[1] });
});

const problems = [];
const known = new Set(endpoints.map((e) => e.path));
const tagged = new Set(tags.map((t) => t.path));
for (const tag of tags) {
  if (!known.has(tag.path)) {
    problems.push({
      file: tag.file,
      line: tag.line,
      message: `@http ${tag.method} ${tag.path} is not a key of Endpoints`,
    });
  }
}
for (const endpoint of endpoints) {
  if (!tagged.has(endpoint.path)) {
    problems.push({
      file: endpointsFile,
      line: endpoint.line,
      message: `Endpoints['${endpoint.path}'] has no type tagged with @http`,
    });
  }
}

if (process.argv.includes('--rdjson')) {
  const diagnostics = problems.map((p) => ({
    message: p.message,
    location: {
      path: p.file,
      range: {
        start: { line: p.line, column: 1 },
        end: { line: p.line, column: 1 },
      },
    },
    severity: 'ERROR',
    code: { value: 'doc-tags/endpoints' },
  }));
  console.log(JSON.stringify({ source: { name: 'Doc tags' }, diagnostics }));
} else if (problems.length > 0) {
  for (const p of problems) console.error(`${p.file}:${p.line}  ${p.message}`);
  process.exit(1);
} else {
  console.log(`${tags.length} @http tags match ${endpoints.length} endpoints`);
}
