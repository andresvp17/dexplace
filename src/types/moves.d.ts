export interface NamedAPIResource {
  name: string
  url: string
}

export interface Language {
  name: string
  url: string
}

export interface EffectEntry {
  effect: string
  language: Language
  short_effect: string
}

export interface FlavorTextEntry {
  flavor_text: string
  language: Language
  version_group: NamedAPIResource
}

export interface ContestCombo {
  use_after: null
  use_before: NamedAPIResource[] | null
}

export interface MoveMeta {
  ailment: NamedAPIResource
  ailment_chance: number
  category: NamedAPIResource
  crit_rate: number
  drain: number
  flinch_chance: number
  healing: number
  max_hits: null
  max_turns: null
  min_hits: null
  min_turns: null
  stat_chance: number
}

export interface Name {
  language: Language
  name: string
}

export interface Move {
  accuracy: number
  contest_combos: {
    normal: ContestCombo
    super: ContestCombo
  }
  contest_effect: NamedAPIResource
  contest_type: NamedAPIResource
  damage_class: NamedAPIResource
  effect_chance: null
  effect_changes: unknown[]
  effect_entries: EffectEntry[]
  flavor_text_entries: FlavorTextEntry[]
  generation: NamedAPIResource
  id: number
  learned_by_pokemon: NamedAPIResource[]
  machines: unknown[]
  meta: MoveMeta
  name: string
  names: Name[]
  past_values: unknown[]
  power: number
  pp: number
  priority: number
  stat_changes: unknown[]
  super_contest_effect: NamedAPIResource
  target: NamedAPIResource
  type: NamedAPIResource
}
