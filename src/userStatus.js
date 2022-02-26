import { STATUS_PENDING_CONFIRM_CHALLENGE } from './lobbies';
import { MATCH_STATUS_TEXT_BY_CODE } from './matches';
import {
  STATUS_MM_FINDING_MATCH,
  STATUS_MM_MATCH_ACCEPTED,
  STATUS_MM_MATCH_REJECTED,
  STATUS_MM_PENDING_ACCEPT,
} from './matchmaking';
import { PM_STATUS_MATCH_STARTING } from './privateMatches';

export const MESSAGE_USER_BANNED = 'USER_BANNED';
export const MESSAGE_USER_PERMABAN = 'USER_PERMANENTLY_BANNED';
export const MESSAGE_USER_UNBANNED = 'USER_UNBANNED';

export const USER_STATUS_TEXT = {
  matchmaking: 'user_status_text_matchmaking',
  matches: 'user_status_text_matches',
  lobbies: 'user_status_text_lobbies',
  'private-match': 'user_status_text_private_match',
  'BANNED': 'temporaly_ban',
  'PERMANENTLY_BANNED': 'permanent_ban'
};

export const FEATURE_STATUS_TEXT = {
  lobbies: {
    null: 'user_status_in_lobby',
    [STATUS_PENDING_CONFIRM_CHALLENGE]: 'user_status_pending_confirm_challenge',
  },
  matchmaking: {
    [STATUS_MM_FINDING_MATCH]: 'user_status_finding_match',
    [STATUS_MM_PENDING_ACCEPT]: 'user_status_match_found',
    [STATUS_MM_MATCH_ACCEPTED]: 'user_status_match_accepted',
    [STATUS_MM_MATCH_REJECTED]: 'user_status_match_rejected',
  },
  matches: MATCH_STATUS_TEXT_BY_CODE,
  'private-match': {
    idle: 'user_status_in_private_match',
    [PM_STATUS_MATCH_STARTING]: 'user_status_starting_match',
  },
  'BANNED': {},
  'PERMANENTLY_BANNED': {},
};
