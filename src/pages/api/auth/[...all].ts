/**
 * BetterAuth API Handler
 *
 * Catch-all API route for BetterAuth endpoints.
 * Target path: src/pages/api/auth/[...all].ts
 */
import type { APIRoute } from 'astro';
import { getAuth } from '../../../lib/pagesmith-auth/server';

// This is a server-rendered API route (not statically generated)
export const prerender = false;

export const ALL: APIRoute = async (context) => {
  const env = context.locals.runtime?.env;

  if (!env?.DB || !env?.BETTER_AUTH_SECRET) {
    return new Response(
      JSON.stringify({ error: 'Auth not configured' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  const auth = getAuth(env);

  // Forward the request to BetterAuth handler
  return auth.handler(context.request);
};

// Export individual methods for Astro compatibility
export const GET = ALL;
export const POST = ALL;
export const PUT = ALL;
export const DELETE = ALL;
export const PATCH = ALL;
