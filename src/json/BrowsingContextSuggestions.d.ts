/**
 * A suggested country or language. `options` holds the choices the visitor can
 * pick between, as `handle -> name`.
 *
 * @http GET /browsing_context_suggestions.json
 */
export type BrowsingContextSuggestionPart = {
  handle: string;
  name: string;
  confidence: number;
  options: Record<string, string>;
};

/**
 * Request with `country[enabled]=true` and/or `language[enabled]=true`, and
 * `country[exclude]` / `language[exclude]` for the current values. Language
 * suggestions follow the browser's `Accept-Language`.
 *
 * @http GET /browsing_context_suggestions.json
 */
export type BrowsingContextSuggestions = {
  detected_values: {
    country_name: string;
    country: { handle: string; name: string };
  };
  /** `duties_collected` is only present when country suggestions are requested. */
  features: { duties_collected?: boolean };
  /** Empty when nothing differs from the excluded values, or the shop has a single market. */
  suggestions: Array<{
    /** Only the requested parts are present. */
    parts: {
      country?: BrowsingContextSuggestionPart;
      language?: BrowsingContextSuggestionPart;
    };
    confidence: number;
  }>;
};
