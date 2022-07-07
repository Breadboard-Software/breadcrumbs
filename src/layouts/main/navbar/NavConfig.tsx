// components
import { BreakfastDining } from '@mui/icons-material'
import SvgIconStyle from '../../../components/SvgIconStyle'

// ----------------------------------------------------------------------

const getIcon = (name: string) => (
  <SvgIconStyle
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
)

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'BreadCrumbs',
    items: [
      {
        title: 'Crumb Builder',
        path: '/crumb-builder',
        icon: <BreakfastDining/>,
      },
    
    ],
  },
]

export default navConfig
