import NodeCache from "node-cache";

export interface ILinearToken {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
}

class TokenCache {
  cache: NodeCache;

  constructor() {
    this.cache = new NodeCache();
  }

  get(): ILinearToken | undefined {
    return this.cache.get<ILinearToken>('token');
  }

  set(token: ILinearToken): void {
    this.cache.set<ILinearToken>('token', token);
  }
}

const tokenCache = new TokenCache();

export default tokenCache;