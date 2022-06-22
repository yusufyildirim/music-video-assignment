import * as React from 'react'

/**
 * @param name A name for the provider to throw an error
 * to be used to identify and easily track down context errors
 */
export function createCtx<ContextType>(name: string) {
  const ctx = React.createContext<ContextType | undefined>(undefined)
  function useCtx() {
    const c = React.useContext(ctx)
    if (c === undefined) throw new Error(`Hook used outside of the provider: ${name}`)
    return c
  }
  return [useCtx, ctx.Provider] as const
}
