// This file configures the initialization of Sentry on the browser.
// The config you add here will be used whenever a page is visited.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;
const SENTRY_ENABLED = process.env.NEXT_PUBLIC_SENTRY_ENABLED || process.env.SENTRY_ENABLED 

Sentry.init({
  enabled: !!SENTRY_ENABLED && SENTRY_ENABLED !== "false" && SENTRY_ENABLED !== "no",
  dsn: SENTRY_DSN || 'https://7ab434973dd24ca0b9f859a0873f3eb2@o971160.ingest.sentry.io/5955281',
  tracesSampleRate: 1.0,
});
