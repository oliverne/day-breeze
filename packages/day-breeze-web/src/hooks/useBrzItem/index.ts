import { useReducer } from 'react'
import { IBrzItem, itemReducer } from './itemReducer'

interface IUseBrzItem {
  items: IBrzItem[]
}

export function useBrzItem(): IUseBrzItem {
  const [items, /* dispatch */] = useReducer(itemReducer, [])

  return {
    items,
  }
}
