export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  wins: number;
  losses: number;
  ties: number;
  types: Type[];
  sprites: Sprites;
}

export interface Sprites {
  front_default: string;
}

export interface Type {
  slot: number;
  type: _Type;
}

export interface _Type {
  name: string;
  url: string;
}