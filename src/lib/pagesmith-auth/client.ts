/**
 * Pagesmith Authentication Client
 *
 * Client-side helpers for BetterAuth.
 * This file is injected into user sites when auth is enabled.
 */
import { createAuthClient } from 'better-auth/client';

// Create the auth client - it automatically uses /api/auth as the base path
export const authClient = createAuthClient();

// Re-export common hooks and utilities
export const {
  signIn,
  signUp,
  signOut,
  useSession,
  getSession,
} = authClient;

// Helper types
export type Session = Awaited<ReturnType<typeof getSession>>;
export type User = NonNullable<Session>['user'];
