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
