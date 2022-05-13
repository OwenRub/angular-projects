export interface Country {
  name:         Name;
  tld?:         string[];
  cca2:         string;
  ccn3?:        string;
  cca3:         string;
  cioc?:        string;
  independent?: boolean;
  status:       Status;
  unMember:     boolean;
  currencies:   Currencies;
  idd:          Idd;
  capital:      string[];
  altSpellings: string[];
  region:       Region;
  subregion:    Subregion;
  languages:    Languages;
  translations: { [key: string]: Translation };
  latlng:       number[];
  landlocked:   boolean;
  borders?:     string[];
  area:         number;
  demonyms:     Demonyms;
  flag:         string;
  maps:         Maps;
  population:   number;
  gini?:        { [key: string]: number };
  fifa?:        string;
  car:          Car;
  timezones:    string[];
  continents:   Region[];
  flags:        CoatOfArms;
  coatOfArms:   CoatOfArms;
  startOfWeek:  StartOfWeek;
  capitalInfo:  CapitalInfo;
  postalCode?:  PostalCode;
}

export interface CapitalInfo {
  latlng: number[];
}

export interface Car {
  signs: string[];
  side:  Side;
}

export enum Side {
  Left = "left",
  Right = "right",
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export enum Region {
  Europe = "Europe",
}

export interface Currencies {
  BYN?: All;
  EUR?: All;
  GIP?: All;
  RSD?: All;
  GBP?: All;
  BAM?: BAM;
  CHF?: All;
  NOK?: All;
  MKD?: All;
  DKK?: All;
  BGN?: All;
  PLN?: All;
  FOK?: All;
  CZK?: All;
  JEP?: All;
  RON?: All;
  UAH?: All;
  RUB?: All;
  HUF?: All;
  SEK?: All;
  ALL?: All;
  GGP?: All;
  MDL?: All;
  IMP?: All;
  HRK?: All;
  ISK?: All;
}

export interface All {
  name:   string;
  symbol: string;
}

export interface BAM {
  name: string;
}

export interface Demonyms {
  eng:  Eng;
  fra?: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Idd {
  root:     string;
  suffixes: string[];
}

export interface Languages {
  bel?: string;
  rus?: string;
  slk?: string;
  lav?: string;
  eng?: string;
  srp?: string;
  swe?: string;
  bos?: string;
  hrv?: string;
  ita?: string;
  lat?: string;
  deu?: string;
  cnr?: string;
  nor?: string;
  mkd?: string;
  dan?: string;
  ell?: string;
  cat?: string;
  fra?: string;
  gsw?: string;
  roh?: string;
  bul?: string;
  sqi?: string;
  pol?: string;
  fin?: string;
  nld?: string;
  bar?: string;
  gle?: string;
  fao?: string;
  ces?: string;
  ltz?: string;
  nrf?: string;
  ron?: string;
  mlt?: string;
  spa?: string;
  ukr?: string;
  tur?: string;
  nno?: string;
  nob?: string;
  smi?: string;
  slv?: string;
  lit?: string;
  hun?: string;
  por?: string;
  nfr?: string;
  est?: string;
  glv?: string;
  isl?: string;
}

export interface Maps {
  googleMaps:     string;
  openStreetMaps: string;
}

export interface Name {
  common:     string;
  official:   string;
  nativeName: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common:   string;
}

export interface PostalCode {
  format: string;
  regex:  string;
}

export enum StartOfWeek {
  Monday = "monday",
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
  UserAssigned = "user-assigned",
}

export enum Subregion {
  CentralEurope = "Central Europe",
  EasternEurope = "Eastern Europe",
  NorthernEurope = "Northern Europe",
  SoutheastEurope = "Southeast Europe",
  SouthernEurope = "Southern Europe",
  WesternEurope = "Western Europe",
}
