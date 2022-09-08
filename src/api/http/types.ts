export const TIMEOUT = 30000;

export interface IRefreshTokenParams {
  currentRefreshToken: string;
}

export interface IRefreshTokenResponse {
  refreshToken: string;
  accessToken: string;
}

export interface IMiddlewareParams {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  url: string;
  params?: Record<string, unknown>;
}

export interface IAPIConfig {
  apiBaseUrl: string;
  appVersion: string;
  accessTokenStorageKey: string;
  refreshTokenStorageKey: string;
}
