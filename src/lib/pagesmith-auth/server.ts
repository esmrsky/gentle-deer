/**
 * Pagesmith Authentication Server
 *
 * BetterAuth configuration for Cloudflare Workers with D1.
 * This file is injected into user sites when auth is enabled.
 */
import { betterAuth } from 'better-auth';
import { D1Dialect } from 'kysely-d1';

// Type for Cloudflare Worker environment
interface Env {
  DB: D1Database;
  BETTER_AUTH_SECRET: string;
  BETTER_AUTH_URL: string;
}

let authInstance: ReturnType<typeof betterAuth> | null = null;

/**
 * Get or create the BetterAuth instance.
 * Must be called with the Cloudflare environment on each request.
 */
export function getAuth(env: Env) {
  // Create a new instance for each request with the correct env
  // This is necessary because D1 binding is request-scoped
  return betterAuth({
    database: {
      dialect: new D1Dialect({ database: env.DB }),
      type: 'sqlite',
    },
    secret: env.BETTER_AUTH_SECRET,
    baseURL: env.BETTER_AUTH_URL,
    emailAndPassword: {
      enabled: true,
      autoSignIn: true,
      minPasswordLength: 8,
      maxPasswordLength: 128,
    },
    session: {
      expiresIn: 60 * 60 * 24 * 7, // 7 days
      updateAge: 60 * 60 * 24, // Update session every 24 hours
      cookieCache: {
        enabled: true,
        maxAge: 60 * 5, // 5 minutes
      },
    },
    trustedOrigins: [env.BETTER_AUTH_URL],
  });
}

/**
 * Create a singleton auth instance for use in API routes.
 * The env must be passed on the first call.
 */
export function createAuth(env: Env) {
  if (!authInstance) {
    authInstance = getAuth(env);
  }
  return authInstance;
}

export type Auth = ReturnType<typeof getAuth>;
