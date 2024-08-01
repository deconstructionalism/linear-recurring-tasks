import NodeCache from "node-cache";

export interface ILinearToken {
  /**
   * The Linear access token.
   */
  access_token: string;
  /**
   * The token type (e.g. "Bearer").
   */
  token_type: string;
  /**
   * Expiry time of the token in seconds.
   */
  expires_in: number;
  /**
   * The scopes granted by the token.
   */
  scope: string;
}

class TokenCache {
  cache: NodeCache;

  /**
   * Create a new memory cache to store Linear tokens.
   */
  constructor() {
    this.cache = new NodeCache();
  }

  /**
   * Get the Linear token from the cache.
   * @returns The Linear token stored in the cache, if any.
   */
  get(): ILinearToken | undefined {
    return this.cache.get<ILinearToken>("token");
  }

  /**
   * Store a Linear token in the cache.
   * @param token The Linear token to store in the cache.
   */
  set(token: ILinearToken): void {
    this.cache.set<ILinearToken>("token", token);
  }
}

const tokenCache = new TokenCache();

export default tokenCache;
