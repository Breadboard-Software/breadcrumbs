// routes
import { PATH_BOM_MANAGEMENT } from './routes/paths'


// API
// ----------------------------------------------------------------------

export const HOST_API = process.env.REACT_APP_HOST_API_KEY || ''

export const AUTH0_API = {
  clientId: process.env.REACT_APP_AUTH_CLIENT_ID,
  domain: process.env.REACT_APP_AUTH_DOMAIN,
  redirectUri: process.env.REACT_APP_AUTH_REDIRECT_URI,
  scope: process.env.REACT_APP_AUTH_SCOPE,
  response_type: process.env.REACT_APP_RESPONSE_TYPE,
}

// ROOT PATH AFTER LOGIN SUCCESSFUL
export const PATH_AFTER_LOGIN = PATH_BOM_MANAGEMENT.bom.upload

// LAYOUT
// ----------------------------------------------------------------------

export const HEADER = {
  MOBILE_HEIGHT: 64,
  MAIN_DESKTOP_HEIGHT: 88,
  PROJECTS_DESKTOP_HEIGHT: 92,
  PROJECTS_DESKTOP_OFFSET_HEIGHT: 92 - 32,
}

export const NAVBAR = {
  BASE_WIDTH: 260,
  PROJECTS_WIDTH: 280,
  PROJECTS_COLLAPSE_WIDTH: 80,
  //
  PROJECTS_ITEM_ROOT_HEIGHT: 48,
  PROJECTS_ITEM_SUB_HEIGHT: 40,
  PROJECTS_ITEM_HORIZONTAL_HEIGHT: 32,
}

export const ICON = {
  NAVBAR_ITEM: 22,
  NAVBAR_ITEM_HORIZONTAL: 20,
}

// SETTINGS
// Please remove `localStorage` when you change settings.
// ----------------------------------------------------------------------

export const defaultSettings = {
  themeMode: 'dark',
  themeDirection: 'ltr',
  themeContrast: 'default',
  themeLayout: 'horizontal',
  themeColorPresets: 'default',
  themeStretch: true,
}


