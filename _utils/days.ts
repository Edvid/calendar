const WIP: string[] = [];

const RainbowColours = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet"
]

const Colours = [
  RainbowColours,
  WIP,
  WIP,
  WIP
]

const SnowwhiteDwarves = WIP;

const MythicalCreatures = [
  SnowwhiteDwarves,
  WIP,
  WIP,
  WIP
];

const MostCommonFarmAnimals = WIP
const MostCommonPets = WIP
const MostPopulousWildAnimals = WIP

const Animals = [
  MostCommonFarmAnimals,
  MostCommonPets,
  MostPopulousWildAnimals,
  WIP
];
const Chakras = WIP
const Genisis = WIP
const Elements = WIP

const Spirituality = [
  Chakras,
  Genisis,
  Elements,
  WIP,
]

const SuperTopic = [
  "Universe",
  "Everything"
]

const SuperCategory = [
  SuperTopic
]

const Seas = WIP
const Continents = WIP
// excluding mountains from ranges in which there
// already is a mountain on this list
const TallestMountains = WIP

const Geography = [
  Seas,
  Continents,
  TallestMountains,
  WIP,
]

const dayNames = [
  Colours,
  MythicalCreatures,
  Animals,
  Spirituality,
  Geography,
  WIP,
  WIP,
  WIP,
  WIP,
  WIP,
  WIP,
  WIP,
  WIP,
  SuperCategory
];

export default dayNames.flat(Infinity) as string[];
