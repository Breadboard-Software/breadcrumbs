// ----------------------------------------------------------------------

function path(root: string, sublink: string) {
  return `${root}${sublink}`
}

const ROOTS_AUTH = '/auth'
const ROOT_BOM_MANAGEMENT = '/bom-management'
const ROOT_PROJECTS = '/projects'

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
  register: path(ROOTS_AUTH, '/register'),
  loginUnprotected: path(ROOTS_AUTH, '/login-unprotected'),
  registerUnprotected: path(ROOTS_AUTH, '/register-unprotected'),
  verify: path(ROOTS_AUTH, '/verify'),
  resetPassword: path(ROOTS_AUTH, '/reset-password'),
  newPassword: path(ROOTS_AUTH, '/new-password'),
}

export const PATH_PAGE = {
  comingSoon: '/coming-soon',
  maintenance: '/maintenance',
  page403: '/403',
  page404: '/404',
  page500: '/500',
}

export const PATH_BOM_MANAGEMENT = {
  root: ROOT_BOM_MANAGEMENT,
  bom: {
    upload: path(ROOT_BOM_MANAGEMENT, '/upload'),
    view: path(ROOT_BOM_MANAGEMENT, '/view'),
  },
}

export const PATH_PROJECTS = {
  root: ROOT_PROJECTS,
}
