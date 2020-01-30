export interface RouterProps {
  history: History;
  location: Location;
  match: Match;
}

export interface History {
  length: number;
  action: string;
  location: Location;
  push: (loc: string) => void;
}

export interface Location {
  pathname: string;
  search: string;
  hash: string;
  key: string;
}

export interface Match {
  path: string;
  url: string;
  isExact: boolean;
  params: Params;
}

export interface Params {
  poemId: string;
}
