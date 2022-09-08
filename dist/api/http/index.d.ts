import { IRefreshTokenParams, IRefreshTokenResponse, IAPIConfig } from './types';
declare class HttpService {
    private token?;
    private config?;
    setConfig(_c: IAPIConfig): void;
    getToken(): string | null;
    setToken(tkn: string): void;
    checkValidToken(): boolean;
    get(url: string): Promise<Record<string, unknown>>;
    post(url: string, body: Record<string, unknown>): Promise<Record<string, unknown>>;
    put(url: string, body: Record<string, unknown>): Promise<Record<string, unknown>>;
    patch(url: string, body: Record<string, unknown>): Promise<Record<string, unknown>>;
    delete(url: string): Promise<Record<string, unknown>>;
    private get options();
    private middleware;
    refreshToken({ currentRefreshToken }: IRefreshTokenParams): Promise<IRefreshTokenResponse>;
}
declare const http: HttpService;
export default http;
