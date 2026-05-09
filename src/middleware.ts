/**
 * Pagesmith Authentication Middleware
 *
 * Astro middleware for session handling with BetterAuth.
 * This file is injected into user sites when auth is enabled.
 */
import { defineMiddleware } from 'astro:middleware';
import { getAuth } from './lib/pagesmith-auth/server';

export const onRequest = defineMiddleware(async (context, next) => {
  // Get the Cloudflare environment from the request
  const env = context.locals.runtime?.env;

  if (!env?.DB || !env?.BETTER_AUTH_SECRET) {
    // Auth not configured, continue without session
    context.locals.user = null;
    context.locals.session = null;
    return next();
  }

  try {
    const auth = getAuth(env);
    const session = await auth.api.getSession({
      headers: context.request.headers,
    });

    if (session) {
      context.locals.user = session.user;
      context.locals.session = session.session;
    } else {
      context.locals.user = null;
      context.locals.session = null;
    }
  } catch (error) {
    console.error('[Auth Middleware] Session error:', error);
    context.locals.user = null;
    context.locals.session = null;
  }

  return next();
});
