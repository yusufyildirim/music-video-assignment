import { renderHook } from '@testing-library/react-hooks'
import { BASE_URL } from '@xi/platform.http'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import MockContentResponse from '../mocks/MockContentResponse'
import { useContentQuery } from './useContentQuery'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      useErrorBoundary: true,
      retry: false,
      cacheTime: Infinity,
    },
  },
})

const wrapper: React.FC = ({ children }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

describe('useContentQuery', () => {
  const server = setupServer()

  beforeAll(() => {
    server.listen({ onUnhandledRequest: 'error' })
  })

  afterAll(() => {
    server.close()
  })

  it('should retreive data from the server', async () => {
    server.use(
      rest.get(BASE_URL + '/data/dataset.json', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(MockContentResponse))
      }),
    )

    const { result, waitFor } = renderHook(() => useContentQuery(data => data), {
      wrapper,
    })

    await waitFor(() => result.current.isSuccess)
  })

  it('should return the transformed result', async () => {
    server.use(
      rest.get(BASE_URL + '/data/dataset.json', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(MockContentResponse))
      }),
    )

    const { result, waitFor } = renderHook(
      () => useContentQuery(data => ({ genreName: data.genres[0].name })),
      {
        wrapper,
      },
    )
    await waitFor(() => result.current.isSuccess)
    expect(result.current.data?.genreName).toBe(MockContentResponse.genres[0].name)
  })
})
