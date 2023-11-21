import kanto from '../../public/assets/kanto.jpg'
import johto from '../../public/assets/johto.jpg'
import hoenn from '../../public/assets/hoenn.jpg'
import sinnoh from '../../public/assets/sinnoh.jpg'
import unova from '../../public/assets/unova.webp'
import kalos from '../../public/assets/kalos.webp'
import alola from '../../public/assets/alola.jpg'
import galar from '../../public/assets/galar.webp'
import paldea from '../../public/assets/paldea.webp'

export const GEN_SPRITES = {
  'generation-ii': 'crystal',
  'generation-iii': 'emerald',
  'generation-iv': 'diamond-pearl',
  'generation-v': 'black-white',
  'generation-vi': 'x-y'
}

export const GENERATIONS = {
  'generation-ii': 'Johto',
  'generation-iii': 'Hoenn',
  'generation-iv': 'Sinnoh',
  'generation-v': 'Unova',
  'generation-vi': 'Kalos',
  'generation-vii': 'Alola',
  'generation-viii': 'Galar',
  'generation-ix': 'Paldea'
}

export const REGION_DATA = {
  kanto: {
    name: 'Kanto',
    image: kanto
  },
  johto: {
    name: 'Johto',
    image: johto
  },
  hoenn: {
    name: 'Hoenn',
    image: hoenn
  },
  sinnoh: {
    name: 'Johto',
    image: sinnoh
  },
  unova: {
    name: 'Johto',
    image: unova
  },
  kalos: {
    name: 'Johto',
    image: kalos
  },
  alola: {
    name: 'Johto',
    image: alola
  },
  galar: {
    name: 'Johto',
    image: galar
  },
  paldea: {
    name: 'Johto',
    image: paldea
  }
}

export const getRandomColor = () => {
  return RANDOM_COLORS[Math.floor(Math.random() * RANDOM_COLORS.length)].bgColor
}

export const RANDOM_COLORS = [
  { bgColor: 'bg-purple-400' },
  { bgColor: 'bg-indigo-600' },
  { bgColor: 'bg-green-500' },
  { bgColor: 'bg-emerald-600' },
  { bgColor: 'bg-cyan-600' },
  { bgColor: 'bg-blue-800' },
  { bgColor: 'bg-fuchsia-700' },
  { bgColor: 'bg-pink-800' }
]
