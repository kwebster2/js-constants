import { faPlaystation, faXbox } from '@fortawesome/free-brands-svg-icons';
import { faLaptop , faHouseUser, faRandom , faUnlockAlt, faUsers , 
  faGamepadAlt ,
  faMap,
  faHandPointUp,
  faLayerGroup,
  faUserCog,
  faSwords,
  faStopwatch,
  faSun,
  faEye,
  faFighterJet,
  faFutbol,
} from '@fortawesome/pro-light-svg-icons';

import lolBanner from '../assets/games/lol-banner.webp';
import fortniteBanner from '../assets/games/fortnite-banner.webp';
import hearthstoneBanner from '../assets/games/hearthstone-banner.webp';
import codVanguardBanner from '../assets/games/cod-vanguard-banner.webp';
import fifaBanner from '../assets/games/fifa-banner.webp';
import codWarzoneBanner from '../assets/games/cod-warzone-banner.webp';
import lolMap from '../assets/games/lol-map.webp';
import lolMap5v5 from '../assets/games/lol-map-5v5.webp';
import fortniteMap from '../assets/games/fortnite-map.webp';
import hearthstoneMap from '../assets/games/hearthstone-map.webp';
import codVanguardMap from '../assets/games/cod-vanguard-map.webp';
import fifaMap from '../assets/games/fifa-map.webp';
import codWarzoneMap from '../assets/games/cod-warzone-map.webp';
import fortniteIcon from '../assets/icons/fortnite.webp';
import hearthstoneIcon from '../assets/icons/hearthstone.webp';
import lolIcon from '../assets/icons/lol.webp';
import codVanguardIcon from '../assets/icons/codvanguard.webp';
import fifaIcon from '../assets/icons/fifa.webp';
import codWarzoneIcon from '../assets/icons/codwarzone.webp';
import fortniteLogo from '../assets/modals/fortnite-logo.webp';
import hearthstoneLogo from '../assets/modals/hearthstone-logo.webp';
import lolLogo from '../assets/modals/league-of-legends-logo.webp';
import codVanguardLogo from '../assets/modals/codvanguard-logo.webp';
import fifaLogo from '../assets/modals/fifa-logo.webp';
import codWarzoneLogo from '../assets/modals/codwarzone-logo.webp';

import ban2 from './../assets/matches/bans/2.webp';
import codVanguardStrafingRun from './../assets/matches/bans/cod-vanguard/9-strafing-run.webp';
import codVanguardBombingRun from './../assets/matches/bans/cod-vanguard/10-bombing-run.webp';
import codVanguardDeathMachine from './../assets/matches/bans/cod-vanguard/11-death-machine.webp';
import codVanguardFlamenaut from './../assets/matches/bans/cod-vanguard/13-flamenaut.webp';
import codVanguarAttackDogs from './../assets/matches/bans/cod-vanguard/14-attack-dogs.webp';
import codVanguardFireBombingRun from './../assets/matches/bans/cod-vanguard/15-fire-bombing-run.webp';
import codVanguardBallTurretGunner from './../assets/matches/bans/cod-vanguard/17-ball-turret-gunner.webp';

export const GAME_CODE_LOL = 'LEAGUE_OF_LEGENDS';
export const GAME_CODE_FORTNITE = 'FORTNITE';
export const GAME_CODE_HEARTHSTONE = 'HEARTHSTONE';
export const GAME_CODE_COD_VANGUARD = 'COD_VANGUARD';
export const GAME_CODE_FIFA = 'FIFA';
export const GAME_CODE_COD_WARZONE = 'COD_WARZONE';

export const GAME_ID_LOL = 1;
export const GAME_ID_HEARTHSTONE = 2;
export const GAME_ID_FORTNITE = 3;
export const GAME_ID_COD_VANGUARD = 4;
export const GAME_ID_FIFA = 5;
export const GAME_ID_COD_WARZONE = 6;


export const GAME_ID_TO_NAME = {
  [GAME_ID_LOL]: 'League of Legends',
  [GAME_ID_FORTNITE]: 'Fortnite',
  [GAME_ID_HEARTHSTONE]: 'Hearthstone',
  [GAME_ID_COD_VANGUARD]: 'CoD : Modern Warfare',
  [GAME_ID_FIFA]: 'FIFA 21',
  [GAME_ID_COD_WARZONE]: 'CoD : Warzone',
};


export const GAME_NAMES = {
  [GAME_CODE_LOL]: 'League of Legends',
  [GAME_CODE_FORTNITE]: 'Fortnite',
  [GAME_CODE_HEARTHSTONE]: 'Hearthstone',
  [GAME_CODE_COD_VANGUARD]: 'CoD : Vanguard',
  [GAME_CODE_FIFA]: 'FIFA 21',
  [GAME_CODE_COD_WARZONE]: 'CoD : Warzone',
};

export const GAME_CARD_TEXT = {
  [GAME_CODE_LOL]: '',
  [GAME_CODE_FORTNITE]: '',
  [GAME_CODE_HEARTHSTONE]: '',
  [GAME_CODE_COD_VANGUARD]: '',
  [GAME_CODE_FIFA]: '',
  [GAME_CODE_COD_WARZONE]: '',
};

export const GAME_COVER_IMAGES = {
  [GAME_CODE_LOL]: lolBanner,
  [GAME_CODE_HEARTHSTONE]: hearthstoneBanner,
  [GAME_CODE_FORTNITE]: fortniteBanner,
  [GAME_CODE_COD_VANGUARD]: codVanguardBanner,
  [GAME_CODE_FIFA]: fifaBanner,
  [GAME_CODE_COD_WARZONE]: codWarzoneBanner,
};

export const GAME_ICONS = {
  [GAME_CODE_LOL]: lolIcon,
  [GAME_CODE_HEARTHSTONE]: hearthstoneIcon,
  [GAME_CODE_FORTNITE]: fortniteIcon,
  [GAME_CODE_COD_VANGUARD]: codVanguardIcon,
  [GAME_CODE_FIFA]: fifaIcon,
  [GAME_CODE_COD_WARZONE]: codWarzoneIcon,
};

export const PLATFORM_NAME_ICONS = {
  PC: faLaptop,
  PS4: faPlaystation,
  PS5: faPlaystation,
  XBOXONE: faXbox,
  XBOXSERIES: faXbox,
  CROSS_PLATFORM: faRandom,
};

export const PLATFORM_NAMES = {
  PC: 'PC',
  PS4: 'PS4',
  PS5: 'PS5',
  XBOXONE: 'Xbox One',
  XBOXSERIES: 'Xbox Series',
  CROSS_PLATFORM: 'Cross Platform',
};

export const PLATFORM_TYPE_ICONS = {
  PC: faLaptop,
  CONSOLE: faGamepadAlt,
  CROSS_PLATFORM: faRandom,
};

export const GAME_LOGOS = {
  [GAME_CODE_LOL]: lolLogo,
  [GAME_CODE_HEARTHSTONE]: hearthstoneLogo,
  [GAME_CODE_FORTNITE]: fortniteLogo,
  [GAME_CODE_COD_VANGUARD]: codVanguardLogo,
  [GAME_CODE_FIFA]: fifaLogo,
  [GAME_CODE_COD_WARZONE]: codWarzoneLogo,
};


export const SETTING_TO_ICON = {
  map: faMap,
  map_code: faMap,
  game_mode: faUsers,
  game_type: faHandPointUp,
  deck_format: faLayerGroup,
  match_settings: faUserCog,
  format: faSwords,
  weather: faSun,
  allow_spectators: faEye,
  roomName: faHouseUser,
  roomPassword: faUnlockAlt,
  combat_pacing: faFighterJet,
  half_length: faStopwatch,
  game_speed: faFutbol,
};

export const MATCH_MODE_RULES = {
  'matchmaking': [
    'I have read the <0>1v1</0> match type rules.',
    'I understand that I will receive a temporary ban of 5 minutes if I do not confirm the match within 30 seconds of finding an opponent.',
    'I accept the <2>member agreement</2>.',
  ],
  'lobbies': [
    'I have read the <0>2v2</0> and <1>5v5</1> match type rules.',
    'I understand that if I am selected captain of my team, it is my responsibility to report the score of the match.',
    'I accept the <2>member agreement</2>.',
  ],
  'privatematch': [],
  'schedulematches': [
    'I have read the <0>1v1</0> match type rules.',
    'I understand that I will lose the match if I do not show up at the scheduled start date.',
    'I understand that if I cancel a scheduled match within 24 hours of the start date, half of my buy in will be awarded to my opponent.',
    'I accept the <2>member agreement</2>.',
  ],
};

// Matches settings
export const LOL_1VS1_SETTINGS = {
  gameSettings: {
    map: 'howling_abyss',
    game_type: 'blind_pick',
    game_mode: '1v1',
    allow_spectators: 'spectators_none',
  },
  mapImg: lolMap,
  rules: ['rule_lol_1', 'rule_lol_2', 'rule_lol_3', 'rule_lol_4', 'rule_lol_5'],
  winConditions: ['win_lol_1', 'win_lol_2', 'win_lol_6'],
  winConditionExplanation: 'screenshot_lol_explanation_1',
  winConditionExample: 'https://i.ibb.co/KbPjdw1/firstblood.png',
  reporting: ['reporting_lol_1', 'reporting_lol_2'],
};

export const LOL_2VS2_SETTINGS = {
  gameSettings: {
    map: 'howling_abyss',
    game_mode: '2v2',
    game_type: 'blind_pick',
    allow_spectators: 'spectators_none',
  },
  mapImg: lolMap,
  rules: ['rule_lol_1', 'rule_lol_2', 'rule_lol_3', 'rule_lol_5', 'rule_lol_7'],
  winConditions: ['win_lol_3', 'win_lol_4'],
  winConditionExplanation: 'screenshot_lol_explanation_1',
  winConditionExample: 'https://i.ibb.co/jJ0n2gT/lol2v2.png',
  reporting: ['reporting_1', 'reporting_2'],
};

export const LOL_5VS5_SETTINGS = {
  gameSettings: {
    map: 'Summoners Rift',
    game_mode: '5v5',
    game_type: 'draft_pick',
    allow_spectators: 'spectators_none',
  },
  mapImg: lolMap5v5,
  rules: ['rule_lol_9', 'rule_lol_2', 'rule_lol_3', 'rule_lol_5', 'rule_lol_8'],
  winConditions: ['win_lol_5'],
  winConditionExplanation: 'screenshot_lol_explanation_2',
  winConditionExample: 'https://i.ibb.co/M1FWR9b/lol5v5.png',
  reporting: ['reporting_1', 'reporting_2'],
};

export const COD_WARZONE_1VS1_SETTINGS = {
  gameSettings: {
    map: 'Caldera',
    Format: 'Kill Race',
    game_mode: 'Battle Royale 1v1',
  },
  mapImg: codWarzoneMap,
  rules: ['rule_cod_wz_1', 'rule_cod_wz_2', 'rule_cod_wz_3', 'rule_cod_wz_4', 'rule_cod_wz_5', 'rule_cod_wz_6'],
  winConditions: ['win_cod_wz_1'],
  reporting: ['reporting_1', 'reporting_2'],
};

export const COD_WARZONE_2VS2_SETTINGS = {
  gameSettings: {
    map: 'Caldera',
    Format: 'Kill Race',
    game_mode: 'Battle Royale 2v2',
  },
  mapImg: codWarzoneMap,
  rules: ['rule_cod_wz_1', 'rule_cod_wz_2', 'rule_cod_wz_3', 'rule_cod_wz_4', 'rule_cod_wz_5', 'rule_cod_wz_6'],
  winConditions: ['win_cod_wz_1'],
  reporting: ['reporting_1', 'reporting_2'],
};

export const COD_VANGUARD_1VS1_SETTINGS = {
  gameSettings: {
    game_mode: 'Team Deathmatch  Domination  Hardpoint',
    map: 'Random',
    combat_pacing: 'All',
  },
  mapImg: codVanguardMap,
  rules: ['rule_cod_vanguard_1', 'rule_cod_vanguard_2', 'rule_cod_vanguard_3', 'rule_cod_vanguard_4', 'rule_cod_vanguard_5'],
  winConditions: ['win_cod_wz_1'],
  reporting: ['reporting_1', 'reporting_2'],
};

export const COD_VANGUARD_2VS2_SETTINGS = {
  gameSettings: {
    game_mode: 'Team Deathmatch  Domination  Hardpoint',
    map: 'Random',
    combat_pacing: 'All',
  },
  mapImg: codVanguardMap,
  rules:  ['rule_cod_vanguard_1', 'rule_cod_vanguard_2', 'rule_cod_vanguard_3', 'rule_cod_vanguard_4', 'rule_cod_vanguard_5'],
  winConditions: ['win_cod_wz_1'],
  reporting: ['reporting_1', 'reporting_2'],
};

export const FORTNITE_1VS1_SETTINGS = {
  gameSettings: {
    map: 'Battle Royale',
    game_mode: '1v1 Kill Race',
  },
  mapImg: fortniteMap,
  rules: [
    'rule_fortnite_1',
    'rule_fortnite_2',
    'rule_fortnite_3',
    'rule_fortnite_5',
  ],
  winConditions: ['win_cod_wz_1'],
  reporting: ['reporting_1', 'reporting_2'],
};

export const FORTNITE_2VS2_SETTINGS = {
  gameSettings: {
    map: 'Battle Royale',
    game_mode: '2v2 Kill Race',
  },
  mapImg: fortniteMap,
  rules: [
    'rule_fortnite_1',
    'rule_fortnite_2',
    'rule_fortnite_4',
    'rule_fortnite_6',
  ],
  winConditions: ['win_cod_wz_1'],
  reporting: ['reporting_1', 'reporting_2'],
};

export const HEARTHSTONE_1VS1_SETTINGS = {
  gameSettings: {
    game_mode: 'Battlegrounds 1v1',
  },
  mapImg: hearthstoneMap,
  rules: [
    'rule_hs_1',
    'rule_hs_2',
    'rule_hs_3',
    'rule_hs_4',
  ],
  winConditions: ['win_hs_1'],
  reporting: ['reporting_1', 'reporting_2'],
};

export const FIFA_1VS1_SETTINGS = {
  gameSettings: {
    game_mode: 'Only Clubs 1v1',
    half_length: '6 minutes',
    game_speed: 'Normal',
  },
  mapImg: fifaMap,
  rules: [
    'The host is listed on the match details page. The host team should add and invite the opposing players but both teams are ultimately responsible for this.',
    'The hosting team must ensure that all the settings are correct. If any setting is found to be incorrect, then the hosting team risks forfeiting so long as the proper proof has been supplied.',
    'Ties/Overtime: In the event of a tie in the first play through, with the same teams a second play through of the match must be played up until the first-half has been completed. If the game is still tied when the first half has been completed, then the second half of the game must be completed.',
    'If a member of either team drops during the initial launch of the game, the game will be replayed.',
  ],
  winConditions: [
    'Win the match. Ties/Overtime: In the event of a tie in the first play through, with the same teams a second play through of the match must be played up until the first-half has been completed. If the game is still tied when the first half has been completed, then the second half of the game must be completed.',
  ],
  reporting: ['reporting_1', 'reporting_2'],
};

export const FIFA_2VS2_SETTINGS = {
  gameSettings: {
    game_mode: 'Only Clubs 2v2',
    half_length: '6 minutes',
    game_speed: 'Normal',
  },
  mapImg: fifaMap,
  rules: [
    'The host is listed on the match details page. The host team should add and invite the opposing players but both teams are ultimately responsible for this.',
    'The hosting team must ensure that all the settings are correct. If any setting is found to be incorrect, then the hosting team risks forfeiting so long as the proper proof has been supplied.',
    'Ties/Overtime: In the event of a tie in the first play through, with the same teams a second play through of the match must be played up until the first-half has been completed. If the game is still tied when the first half has been completed, then the second half of the game must be completed.',
    'If a member of either team drops during the initial launch of the game, the game will be replayed.',
  ],
  winConditions: [
    'Win the match. Ties/Overtime: In the event of a tie in the first play through, with the same teams a second play through of the match must be played up until the first-half has been completed. If the game is still tied when the first half has been completed, then the second half of the game must be completed.',
  ],
  reporting: ['reporting_1', 'reporting_2'],
};

export const GAME_TO_GA_TEXT = {
  [GAME_CODE_LOL]: {
    header: 'Link your League of Legends account',
    gameAccountDisplay: 'Summoner Name',
  },
  [GAME_CODE_FORTNITE]: {
    header: 'Link your Fortnite account',
    gameAccountDisplay: 'Epic Display Name',
  },
  [GAME_CODE_HEARTHSTONE]: {
    header: 'Link your Hearthstone account',
    gameAccountDisplay: 'BattleTag',
  },
  [GAME_CODE_COD_VANGUARD]: {
    header: 'Link your Call of Duty account',
    gameAccountDisplay: 'Activision ID',
  },
  [GAME_CODE_FIFA]: {
    header: 'Link your FIFA account',
    gameAccountDisplay: 'Origin ID',
  },
  [GAME_CODE_COD_WARZONE]: {
    header: 'Link your Call of Duty account',
    gameAccountDisplay: 'Activision ID',
  },
};

export const MATCH_TYPE_TO_GAME_SETTINGS = {
  LOL_1VS1_HOWLING_ABYSS: LOL_1VS1_SETTINGS,
  LOL_2VS2_HOWLING_ABYSS: LOL_2VS2_SETTINGS,
  LOL_5VS5_CLASSIC: LOL_5VS5_SETTINGS,
  FORTNITE_1VS1: FORTNITE_1VS1_SETTINGS,
  FORTNITE_2VS2: FORTNITE_2VS2_SETTINGS,
  HS_1VS1: HEARTHSTONE_1VS1_SETTINGS,
  COD_VANGUARD_1VS1: COD_VANGUARD_1VS1_SETTINGS,
  COD_VANGUARD_2VS2: COD_VANGUARD_2VS2_SETTINGS,
  FIFA_1VS1: FIFA_1VS1_SETTINGS,
  FIFA_2VS2: FIFA_2VS2_SETTINGS,
  COD_WARZONE_1VS1: COD_WARZONE_1VS1_SETTINGS,
  COD_WARZONE_2VS2: COD_WARZONE_2VS2_SETTINGS,
};

export const MATCH_TYPE_TO_GAME_LOBBY_TITLE = {
  LOL_1VS1_HOWLING_ABYSS: '1v1 - Howling Abyss',
  LOL_2VS2_HOWLING_ABYSS: '2v2 - Howling Abyss',
  LOL_5VS5_CLASSIC: '5v5 - Summoner Rift',
  FORTNITE_1VS1: '1v1 - Dubbz Box Fight Bo11',
  FORTNITE_2VS2: '2v2 - Dubbz Box Fight Bo11',
  HS_1VS1_BO3: 'Conquest Best of 3',
  COD_VANGUARD_1VS1: '1v1 - Gunfight Speedball',
  COD_VANGUARD_2VS2: '2v2 - Gunfight Speedball',
  FIFA_1VS1: '1v1 - Only Clubs',
  FIFA_2VS2: '2v2 - Only Clubs',
  COD_WARZONE_1VS1: '1v1 - Kill Race',
  COD_WARZONE_2VS2: '2v2 - Kill Race',
};

export const REGION_ID_TO_REGION_CODE = {
  1: 'LOL_REGION_NA',
  2: 'LOL_REGION_BR',
  3: 'LOL_REGION_EUN',
  4: 'LOL_REGION_EUW',
  5: 'LOL_REGION_LAN',
  6: 'LOL_REGION_LAS',
  7: 'LOL_REGION_OCE',
};

export const GAME_REGIONS = {
  LOL_REGION_NA: 'NA1 (North America)',
  LOL_REGION_BR: 'BR1 (Brazil)',
  LOL_REGION_EUN: 'EUN1 (Europe Nordic & East)',
  LOL_REGION_EUW: 'EUW1 (Europe West)',
  LOL_REGION_LAN: 'LAN (Latin America North)',
  LOL_REGION_LAS: 'LAS (Latin America South)',
  LOL_REGION_OCE: 'OCE (Oceania)',
  HS_REGION_AMERICAS: 'Americas',
  HS_REGION_EUROPE: 'Europe',
  HS_REGION_ASIA: 'Asia',
  FORTNITE_REGION_NORTH_AMERICA: 'North America',
  FORTNITE_REGION_SOUTH_AMERICA: 'South America',
  FORTNITE_REGION_EUROPE: 'Europe',
  FORTNITE_REGION_OCEANIA: 'Oceania',
  FORTNITE_REGION_ASIA: 'Asia',
  FORTNITE_REGION_MIDDLE_EAST: 'Middle East',
  FIFA_REGION_NORTH_AMERICA: 'North America',
  FIFA_REGION_SOUTH_AMERICA: 'South America',
  FIFA_REGION_EUROPE: 'Europe',
  FIFA_REGION_OCEANIA: 'Oceania',
  FIFA_REGION_ASIA: 'Asia',
  COD_WARZONE_REGION_NORTH_AMERICA: 'North America',
  COD_WARZONE_REGION_SOUTH_AMERICA: 'South America',
  COD_WARZONE_REGION_EUROPE: 'Europe',
  COD_WARZONE_REGION_ASIA: 'Asia',
  COD_WARZONE_REGION_OCEANIA: 'Oceania',
  COD_VANGUARD_REGION_NORTH_AMERICA: 'North America',
  COD_VANGUARD_REGION_SOUTH_AMERICA: 'South America',
  COD_VANGUARD_REGION_EUROPE: 'Europe',
  COD_VANGUARD_REGION_ASIA: 'Asia',
  COD_VANGUARD_REGION_OCEANIA: 'Oceania',
};

export const GAME_REGIONS_SIMPLIFIED = {
  LOL_REGION_NA: 'NA1',
  LOL_REGION_BR: 'BR1',
  LOL_REGION_EUN: 'EUN1',
  LOL_REGION_EUW: 'EUW1',
  LOL_REGION_LAN: 'LAN',
  LOL_REGION_LAS: 'LAS',
  LOL_REGION_OCE: 'OCE',
  HS_REGION_AMERICAS: 'AM',
  HS_REGION_EUROPE: 'EU',
  HS_REGION_ASIA: 'AS',
  FORTNITE_REGION_NORTH_AMERICA: 'NA',
  FORTNITE_REGION_SOUTH_AMERICA: 'SA',
  FORTNITE_REGION_EUROPE: 'EU',
  FORTNITE_REGION_OCEANIA: 'OCE',
  FORTNITE_REGION_ASIA: 'AS',
  FORTNITE_REGION_MIDDLE_EAST: 'ME',
  FIFA_REGION_NORTH_AMERICA: 'NA',
  FIFA_REGION_SOUTH_AMERICA: 'SA',
  FIFA_REGION_EUROPE: 'EU',
  FIFA_REGION_OCEANIA: 'OCE',
  FIFA_REGION_ASIA: 'AS',
  COD_WARZONE_REGION_NORTH_AMERICA: 'NA',
  COD_WARZONE_REGION_SOUTH_AMERICA: 'SA',
  COD_WARZONE_REGION_EUROPE: 'EU',
  COD_WARZONE_REGION_ASIA: 'AS',
  COD_WARZONE_REGION_OCEANIA: 'OCE',
  COD_VANGUARD_REGION_NORTH_AMERICA: 'NA',
  COD_VANGUARD_REGION_SOUTH_AMERICA: 'SA',
  COD_VANGUARD_REGION_EUROPE: 'EU',
  COD_VANGUARD_REGION_ASIA: 'AS',
  COD_VANGUARD_REGION_OCEANIA: 'OCE',
};

const COD_BAN = {
  description: 'matchMaking.banned_description_killstreaks',
  bans: [
    {
      src: codVanguardStrafingRun,
      name: 'Strafing Run',
    },
    {
      src: codVanguardBombingRun,
      name: 'Bombing Run',
    },
    {
      src: codVanguardDeathMachine,
      name: 'Death Machine',
    },
    {
      src: codVanguardFlamenaut,
      name: 'Flamenaut',
    },
    {
      src: codVanguarAttackDogs,
      name: 'Attack Dogs',
    },
    {
      src: codVanguardFireBombingRun,
      name: 'Bombing Run',
    },
    {
      src: codVanguardBallTurretGunner,
      name: 'Turrent Gunner',
    },
  ]
};

export const GAME_WITH_BANS = {
  1: {
    description: 'matchMaking.banned_description_lol',
    bans: [
      {
        src: ban2,
        name: 'Ornn'
      }
    ]
  },
  6: COD_BAN,
  7: COD_BAN,
};
