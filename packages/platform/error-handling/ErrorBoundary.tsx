import * as React from 'react'
import { ErrorBoundary as ErrorBoundaryDep } from 'react-error-boundary'
import { useQueryErrorResetBoundary } from 'react-query'

import { ErrorFallback } from './ErrorFallback'

export const ErrorBoundary: React.FC = ({ children }) => {
  const { reset } = useQueryErrorResetBoundary()

  return (
    <ErrorBoundaryDep onReset={reset} fallbackRender={ErrorFallback}>
      {children}
    </ErrorBoundaryDep>
  )
}
