interface IImages {
  png: string;
  svg: string;
}

interface IDD {
  root: string;
  suffixes: string[] | number[];
}

interface IMaps {
  googleMaps: string;
  openStreetMaps: string;
}

interface IName {
  common: string;
  official: string;
  nativeName: { kal: { common: string; official: string } };
}

export interface ICountries {
  altSpellings: string[];
  area: number;
  capital: string[];
  capitalInfo: any;
  car: any;
  cca2: string;
  cca3: string;
  ccn3: string;
  coatOfArms: IImages;
  continents: string[];
  currencies: any;
  demonyms: any;
  flag: string;
  flags: IImages;
  idd: IDD;
  independent: boolean;
  landlocked: boolean;
  languages: any;
  latlng: number[];
  maps: IMaps;
  name: IName;
  population: number;
  postalCode: { format: string; regex: string };
  region: string;
  startOfWeek: string;
  status: string;
  subregion: string;
  timezones: string[];
  tld: string[];
  translations: any;
  unMember: boolean;
}
