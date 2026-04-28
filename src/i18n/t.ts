import en from './en.json';
import he from './he.json';
import type { Locale } from '../config/site';

export type Strings = typeof en;

const dictionaries: Record<Locale, Strings> = {
  en: en as Strings,
  he: he as unknown as Strings,
};

export function getStrings(locale: Locale): Strings {
  return dictionaries[locale] ?? dictionaries.en;
}
