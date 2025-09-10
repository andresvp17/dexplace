import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PokemonDetail } from '@components/pokemonDetail'
import { ROUTES } from './constants/routes.ts'
import { Layout } from './layout.tsx'
import { Search } from './components/search/search.tsx'
import { MovesGrid } from './components/moves/moves-grid.tsx'
import App from './App.tsx'
import './index.css'
import { MoveDetail } from './components/moves/movesDetail/index.tsx'
import { ErrorBoundary } from './error-boundary.tsx'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: ROUTES.home,
        Component: App,
        loader: () => <p>Loading...</p>,
      },
      {
        path: ROUTES.pokemon,
        Component: PokemonDetail,
        loader: () => <p>Loading...</p>,
      },
      {
        path: ROUTES.search,
        Component: Search,
      },
      {
        path: ROUTES.moves,
        Component: MovesGrid,
      },
      {
        path: ROUTES.moveDetailed,
        Component: MoveDetail,
      },
    ],
  },
])

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ErrorBoundary>
  </StrictMode>
)
