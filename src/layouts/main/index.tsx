import { useState } from 'react'
import { Outlet } from 'react-router-dom'
// @mui
import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'
// hooks
import useCollapseDrawer from '../../hooks/useCollapseDrawer'
// config
import { HEADER, NAVBAR } from '../../config'
//
import NavbarVertical from './navbar/NavbarVertical'

// ----------------------------------------------------------------------

type MainStyleProps = {
  collapseClick: boolean
}

const MainStyle = styled('main', {
  shouldForwardProp: (prop) => prop !== 'collapseClick',
})<MainStyleProps>(({ collapseClick, theme }) => ({
  flexGrow: 1,
  paddingTop: HEADER.MOBILE_HEIGHT + 24,
  paddingBottom: HEADER.MOBILE_HEIGHT + 24,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 36,
    paddingRight: 36,
    paddingTop: HEADER.PROJECTS_DESKTOP_HEIGHT,
    paddingBottom: HEADER.PROJECTS_DESKTOP_HEIGHT + 24,
    width: `calc(100% - ${NAVBAR.PROJECTS_WIDTH}px)`,
    transition: theme.transitions.create('margin-left', {
      duration: theme.transitions.duration.shorter,
    }),
    ...(collapseClick && {
      marginLeft: NAVBAR.PROJECTS_COLLAPSE_WIDTH,
    }),
  },
}))

// ----------------------------------------------------------------------

export default function MainLayout() {
  const { collapseClick, isCollapse } = useCollapseDrawer()


  const [open, setOpen] = useState(false)

  return (
    <Box
      sx={{
        display: { lg: 'flex' },
        minHeight: { lg: 1 },
      }}
    >
      <NavbarVertical
        isOpenSidebar={open}
        onCloseSidebar={() => setOpen(false)}
      />

      <MainStyle collapseClick={collapseClick}>
        <Outlet />
      </MainStyle>
    </Box>
  )
}
