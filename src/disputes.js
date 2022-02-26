export const DISPUTE_ASSIGNED = 'DISPUTE_ASSIGNED';
export const DISPUTE_UNASSIGNED = 'DISPUTE_UNASSIGNED';

export const STATUS_NOT_ASSIGNED = 'STATUS_NOT_ASSIGNED';
export const STATUS_IN_REVIEW = 'STATUS_IN_REVIEW';
export const STATUS_ASSIGNED = 'STATUS_ASSIGNED';
export const STATUS_RESOLVED = 'STATUS_RESOLVED';

export const ISSUE_TYPE_MAPPING = {
  'TYPE_TECHNICAL_ISSUE_CONNECTION': 'match_modal_report_issue_type_technical_connection',
  'TYPE_TECHNICAL_ISSUE_RIOT': 'match_modal_report_issue_type_technical_riot',
  'TYPE_INCORRECT_SCORE': 'match_modal_report_issue_type_score',
  'TYPE_BREAK_RULES': 'match_modal_report_issue_type_rules',
  'TYPE_TOXICITY': 'match_modal_report_issue_type_toxic',
  'TYPE_CHEATING': 'match_modal_report_issue_type_cheating',
};

export const STATUS_MAPPING = {
  [STATUS_NOT_ASSIGNED]: 'Not assigned',
  [STATUS_ASSIGNED]: 'Assigned',
  [STATUS_RESOLVED]: 'Resolved'
};

export const COLOR_MAPPING = {
  [STATUS_NOT_ASSIGNED]: 'red',
  [STATUS_ASSIGNED]: 'yellow',
  [STATUS_RESOLVED]: 'green'
};
