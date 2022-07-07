import { Suspense, lazy, ElementType } from 'react'
import { Navigate, useRoutes, useLocation } from 'react-router-dom'
// layouts
import MainLayout from '../layouts/main'

// components
import LoadingScreen from '../components/LoadingScreen'

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) => {
  // FIXME: this is a react component but eslint doesn't agree
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation()

  // eslint-disable-next-line react-hooks/rules-of-hooks

  return (
    <Suspense
      fallback={
        <LoadingScreen
          isDashboard={pathname.includes('/breadcrumbs')}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  )
}

export default function Router() {
  return useRoutes([
    {
      path: '/breadcrumbs',
      element: (
          <MainLayout />
      ),
      children: [     {
        element: <Breadcrumbs />,
        index: true,
      },],
    },

    { path: '*', element: <Navigate to="/404" replace /> },
  ])
}

const Breadcrumbs = Loadable(lazy(() => import('../pages/Breadcrumbs')))
const NotFound = Loadable(lazy(() => import('../pages/Page404')))