import { Suspense, lazy, ElementType } from 'react'
import { Navigate, useRoutes, useLocation } from 'react-router-dom'
// layouts
import MainLayout from '../layouts/main'

// components
import LoadingScreen from '../components/LoadingScreen'

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation()
  return (
    <Suspense
      fallback={
        <LoadingScreen isDashboard={pathname.includes('/crumb-builder')} />
      }
    >
      <Component {...props} />
    </Suspense>
  )
}

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Navigate to="/crumb-builder" replace />,
    },
    {
      path: '/crumb-builder',
      element: <MainLayout />,
      children: [
        {
          element: <CrumbBuilder />,
          index: true,
        },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ])
}

const CrumbBuilder = Loadable(lazy(() => import('../pages/CrumbBuilder')))
const NotFound = Loadable(lazy(() => import('../pages/Page404')))
