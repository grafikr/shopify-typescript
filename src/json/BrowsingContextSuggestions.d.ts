/**
 * `suggestions` could not be provoked on a local dev store (it depends on the
 * visitor's detected country), so its items are modelled from Shopify's
 * documentation and are not covered by a fixture.
 *
 * @http GET /browsing_context_suggestions.json
 */
export type BrowsingContextSuggestions = {
  detected_values: {
    country_name: string;
    country: { handle: string; name: string };
  };
  features: Record<string, unknown>;
  suggestions: Array<{
    parts: {
      country: {
        handle: string;
        name: string;
        confidence: number;
        options: Record<string, string>;
      };
      language: {
        handle: string;
        name: string;
        confidence: number;
        options: Record<string, string>;
      };
    };
    confidence: string;
  }>;
};
