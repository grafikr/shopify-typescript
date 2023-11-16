export type BrowsingContextSuggestions = {
  detected_values: {
    country: {
      handle: string;
      name: string;
    };
  };
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
