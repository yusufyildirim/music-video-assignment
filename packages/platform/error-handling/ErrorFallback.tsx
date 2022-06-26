import * as React from 'react'
import { FallbackProps } from 'react-error-boundary'

import { HandleError } from './HandleError'

export const ErrorFallback: React.FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  return <HandleError errorMessage={error.message} reset={resetErrorBoundary} />
}
