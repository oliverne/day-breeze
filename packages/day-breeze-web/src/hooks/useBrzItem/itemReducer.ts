export interface IBrzItem {
  cid?: string
  id?: string
  title: string
  content: string
  labels: string[]
  createdAt: number
  updatedAt: number
}

export const ADD_ITEM = 'ADD_ITEM'
interface IAddItemAction {
  type: typeof ADD_ITEM
  payload: IBrzItem
}

export type IBrzItemActions = IAddItemAction

export function itemReducer(state: IBrzItem[] = [], action: IBrzItemActions) {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload]
    default:
      throw new Error('Invalid action type')
  }
}
