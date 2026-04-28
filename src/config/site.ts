export const SITE_NAME = 'Bond';
export const SITE_URL = 'https://nimrod-bar.github.io/bond-app';
export const SITE_BASE = '/bond-app';
export const COPYRIGHT_YEAR = 2026;

// Until full Hebrew translation ships in v1.1, the EN/HE switcher is hidden.
// Flip to `true` once src/i18n/he.json contains real translations.
export const ENABLE_HEBREW_SWITCHER = false;

export type Locale = 'en' | 'he';
export const LOCALES: Locale[] = ['en', 'he'];
export const DEFAULT_LOCALE: Locale = 'en';
