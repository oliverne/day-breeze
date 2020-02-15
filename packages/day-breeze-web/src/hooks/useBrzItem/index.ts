import { useReducer } from 'react'
import { itemReducer, IBrzItem, ADD_ITEM } from './itemReducer'

interface IUseBrzItem {
  items: IBrzItem[]
  addItem: (content: string) => void
}

const generateCid = () =>
  Math.random()
    .toString(32)
    .slice(2)

const createPayload = (content = '') => {
  return {
    content,
    cid: generateCid(),
    id: '',
    title: content.split('\n')[0],
    labels: [''],
    createdAt: Date.now(),
    updatedAt: Date.now()
  }
}

export function useBrzItem(): IUseBrzItem {
  const [items, dispatch] = useReducer(itemReducer, [])

  const addItem = (content = '') => {
    dispatch({
      type: ADD_ITEM,
      payload: createPayload(content)
    })
  }

  return {
    items,
    addItem
  }
}
