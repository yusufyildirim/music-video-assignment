import { ErrorBoundary } from '@xi/platform.error-handling'
import * as React from 'react'

/**
 * Every screen component should be wrapped with `ScreenHOC`.
 * It's responsible of managing page level stuff.
 *
 * Like, ErrorBoundaries, Viewability Events, Performance tracing etc.
 */
export const ScreenHOC = (Component: React.FC) => (props: any) =>
  (
    <ErrorBoundary>
      <Component {...props} />
    </ErrorBoundary>
  )
