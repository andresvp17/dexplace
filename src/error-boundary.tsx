import React, { type ReactNode } from 'react'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

function ErrorFallback({ error }: { error: Error | null }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png"
        alt="Sad Psyduck"
        width={120}
        height={120}
        style={{ marginBottom: '1rem' }}
      />
      <h2>Oops! Something went wrong.</h2>
      <p>
        Our Pokémon seem confused. Please try refreshing the page or come back
        later.
      </p>
      {error && (
        <pre style={{ color: '#b71c1c', marginTop: '1rem' }}>
          {error.message}
        </pre>
      )}
    </div>
  )
}

export const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  const [state, setState] = React.useState<ErrorBoundaryState>({
    hasError: false,
    error: null,
  })

  const resetError = React.useCallback(() => {
    setState({ hasError: false, error: null })
  }, [])

  React.useEffect(() => {
    resetError()
  }, [children, resetError])

  const errorHandler = React.useCallback((error: Error) => {
    setState({ hasError: true, error })
  }, [])

  React.useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      errorHandler(event.error || new Error(event.message))
    }
    window.addEventListener('error', handleError)
    return () => window.removeEventListener('error', handleError)
  }, [errorHandler])

  try {
    if (state.hasError) {
      return <ErrorFallback error={state.error} />
    }
    return <>{children}</>
  } catch (error: unknown) {
    if (error instanceof Error) {
      errorHandler(error)
      return <ErrorFallback error={error} />
    } else {
      const genericError = new Error('An unknown error occurred')
      errorHandler(genericError)
      return <ErrorFallback error={genericError} />
    }
  }
}
