export interface Platform {
  id: string;
  name: string;
  url: string;
}

export interface CheckResult {
  platform: string;
  name: string;
  available: boolean;
  url: string;
  error?: boolean;
}

export interface CheckResponse {
  username: string;
  results: CheckResult[];
}

export {}; // Ensure this file is treated as a module

declare global {
  interface Window {
    ui: SwaggerUIInstance;
    SwaggerUIBundle: SwaggerUIBundleType;
  }

  interface SwaggerUIInstance {
    render: () => void;
    getSystem: () => unknown;
    getConfigs: () => unknown;
    // Add others if needed
  }

  interface SwaggerUIBundleType {
    (config: SwaggerUIConfig): SwaggerUIInstance;
    presets: {
      apis: unknown;
    };
  }

  interface SwaggerUIConfig {
    url: string;
    dom_id: string;
    deepLinking?: boolean;
    presets?: unknown[];
    [key: string]: unknown;
  }
}
