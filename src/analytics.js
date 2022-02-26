// Login constants

export const LOGIN_BUTTON_CLICK = 'login_button_click'; // click on login to open the login form [custom event]
export const LOGIN = 'login'; // submit the login form [recommended event]

// Signup constants

export const SIGNUP_BUTTON_CLICK = 'signup_button_click'; // click on signup to open the signup form [custom event]
export const SIGNUP = 'sign_up'; // submit the signup form [recommended event]

// Game account constants

export const GAME_ACCOUNT_CREATED = 'game_account_created'; // submit the game account creation form [custom event]
export const GAME_ACCOUNT_EDITED = 'game_account_edited'; // submit the game account edit form [custom event]


// Solo matchmaking constants

export const SOLO_MATCHMAKING_SEARCH_CREATED =
  'solo_matchmaking_search_created'; // submit the matchmaking search form [custom event]
export const SOLO_MATCHMAKING_SEARCH_CANCELED =
  'solo_matchmaking_search_canceled'; // Cancel the matchmaking search [custom event]

// Lobby constants

export const LOBBY_CREATED = 'lobby_created'; // submit the lobby creation form [custom event]
export const LOBBY_CHALLENGED = 'lobby_challenged'; // click on "challenge" in the lobbies screen [custom event]
export const LOBBY_ABANDONED = 'lobby_abandoned'; // click on icon to leave lobby in the lobbies screen [custom event]

// Private match constants

export const PRIVATE_MATCH_CREATED = 'private_match_created'; // submit the private match creation form [custom event]

// Tutorial constants

export const WATCH_TUTORIAL_CLICK = 'watch_tutorial_click'; // click on "Watch Tutorial" [custom event]

export const PRIVATE_MATCH_TUTORIAL = 'private_match_tutorial'; // private match tutorial type
export const TEAM_LOBBY_TUTORIAL = 'team_lobby_tutorial'; // team lobby match tutorial type
export const SOLO_MATCHMAKING_TUTORIAL = 'solo_matchmaking_tutorial'; // solo matchmaking match tutorial type
export const SCHEDULED_MATCH = 'scheduled_match'; // solo matchmaking match tutorial type

// Party constants

export const PARTY_CREATED = 'party_created'; // user created a party
export const PARTY_MESSAGE_SENT = 'party_message_sent'; // user sent a message inside a party chat
export const PARTY_USER_INVITED = 'party_user_invited'; // user sent a message inside a party chat
export const PARTY_JOINED = 'party_joined'; // user sent a message inside a party chat

// Friends tab constants

export const FRIENDS_TAB_EXPANDED = 'friends_tab_expanded'; // friends tab expanded
export const FRIENDS_TAB_COLLAPSED = 'friends_tab_collapsed'; // friends tab collapsed

// Sounds settings

export const SOUND_MUTED = 'sound_muted'; // sound desactivated from the navbar
export const SOUND_UNMUTED = 'sound_unmuted'; // sound activated from the navbar

// Sounds settings

export const WALLET_ADD_FUNDS_CLICK = 'wallet_add_funds_click'; // click to open the form to add funds
export const WALLED_ADD_FUNDS_REQUEST_CREATED =
  'walled_add_funds_request_created'; // session to add fund created
export const WALLED_ADD_FUNDS_REQUEST_CONCRETED =
  'walled_add_funds_request_concreted'; // session to add fund concreted successfully
export const WALLED_ADD_FUNDS_REQUEST_CANCELED =
  'walled_add_funds_request_canceled'; // session to add fund failed or abandoned
export const WALLET_WITHDRAW_CLICK = 'wallet_withdraw_click'; // click to open the form to withdraw

// Shared constants
export const NAVBAR = 'navbar';
export const MAIN_CARD = 'main_card';
export const GET_STARTED_CARD = 'get_started_card';
export const USERNAME_AND_PASSWORD_METHOD = 'username_and_password';
