// components
import SvgIconStyle from '../../../components/SvgIconStyle'

// ----------------------------------------------------------------------

const getIcon = (name: string) => (
  <SvgIconStyle
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
)

const ICONS = {
  menuItem: getIcon('ic_menu_item'),
  bomItem: getIcon('ic_invoice'),
  projectsItem: getIcon('ic_calendar'),
  dashboardItem: getIcon('ic_dashboard'),
  customersItem: getIcon('ic_user'),
}

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'General',
    items: [
      {
        title: 'My Dashboard',
        path: '/dashboard',
        icon: ICONS.dashboardItem,
      },
      {
        title: 'Projects',
        path: '/projects',
        icon: ICONS.projectsItem,
      },
      {
        title: 'Bill of Materials',
        path: '/bom-management',
        icon: ICONS.bomItem,
      },
    ],
  },
  // MANAGEMENT
  // ----------------------------------------------------------------------
  {
    subheader: 'Management',
    items: [
      {
        title: 'Customers',
        path: '/customers',
        icon: ICONS.customersItem,
      },
    ],
  },
]

export default navConfig
