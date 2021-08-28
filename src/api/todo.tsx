import {
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from 'react-query'

import httpClient from './httpclient'

export interface Todo {
  id?: string
  title: string
  description?: string
  status: string
}

const QueryKeys = {
  TODOS: 'todos',
}

export const useFetchTodos = (): UseQueryResult<Todo[], Error> => {
  return useQuery(QueryKeys.TODOS, async () => {
    const { data } = await httpClient.get('/todo')
    return data.data
  })
}

export const useAddTodo = (): UseMutationResult<void, Error, Todo> => {
  const queryClient = useQueryClient()

  return useMutation(
    async (todo: Todo) => {
      await httpClient.post('/todo', todo)
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries(QueryKeys.TODOS)
      },
    }
  )
}
