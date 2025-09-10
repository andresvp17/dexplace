interface NamedAPIResource {
  name: string;
  url: string;
}

interface Ability {
  ability: NamedAPIResource;
  is_hidden: boolean;
  slot: number;
}

interface VersionGameIndex {
  game_index: number;
  version: NamedAPIResource;
}

interface Cries {
  latest: string;
  legacy: string;
}

interface HeldItemVersionDetail {
  rarity: number;
  version: NamedAPIResource;
}

interface HeldItem {
  item: NamedAPIResource;
  version_details: HeldItemVersionDetail[];
}

interface MoveLearnMethod {
  name: string;
  url: string;
}

interface VersionGroup {
  name: string;
  url: string;
}

interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: MoveLearnMethod;
  order: number | undefined;
  version_group: VersionGroup;
}

interface Move {
  move: NamedAPIResource;
  version_group_details: VersionGroupDetail[];
}

interface PastAbility {
  abilities: {
    ability: NamedAPIResource | undefined;
    is_hidden: boolean;
    slot: number;
  }[];
  generation: NamedAPIResource;
}

interface Sprites {
  back_default: string | undefined;
  back_female: string | undefined;
  back_shiny: string | undefined;
  back_shiny_female: string | undefined;
  front_default: string | undefined;
  front_female: string | undefined;
  front_shiny: string | undefined;
  front_shiny_female: string | undefined;
  other: {
    dream_world: {
      front_default: string | undefined;
      front_female: string | undefined;
    };
    home: {
      front_default: string | undefined;
      front_female: string | undefined;
      front_shiny: string | undefined;
      front_shiny_female: string | undefined;
    };
    "official-artwork": {
      front_default: string | undefined;
      front_shiny: string | undefined;
    };
    showdown: {
      back_default: string | undefined;
      back_female: string | undefined;
      back_shiny: string | undefined;
      back_shiny_female: string | undefined;
      front_default: string | undefined;
      front_female: string | undefined;
      front_shiny: string | undefined;
      front_shiny_female: string | undefined;
    };
  };
  versions: {
    [generation: string]: {
      [version: string]: {
        back_default?: string | undefined;
        back_gray?: string | undefined;
        back_shiny?: string | undefined;
        back_transparent?: string | undefined;
        back_shiny_transparent?: string | undefined;
        front_default?: string | undefined;
        front_gray?: string | undefined;
        front_shiny?: string | undefined;
        front_transparent?: string | undefined;
        front_shiny_transparent?: string | undefined;
        front_female?: string | undefined;
        front_shiny_female?: string | undefined;
        back_female?: string | undefined;
        back_shiny_female?: string | undefined;
        animated?: {
          back_default: string | undefined;
          back_female: string | undefined;
          back_shiny: string | undefined;
          back_shiny_female: string | undefined;
          front_default: string | undefined;
          front_female: string | undefined;
          front_shiny: string | undefined;
          front_shiny_female: string | undefined;
        };
      };
    };
  };
}

interface Stat {
  base_stat: number;
  effort: number;
  stat: NamedAPIResource;
}

interface Type {
  slot: number;
  type: NamedAPIResource;
}

export interface Pokemon {
  abilities: Ability[];
  base_experience: number;
  cries: Cries;
  forms: NamedAPIResource[];
  game_indices: VersionGameIndex[];
  height: number;
  held_items: HeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_abilities: PastAbility[];
  past_types: []; // Could be more specific if needed
  species: NamedAPIResource;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}