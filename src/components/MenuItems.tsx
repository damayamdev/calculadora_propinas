import { Dispatch } from "react"
import { formatCurrency } from "../helpers"
import { OrderActions } from "../reducers/order-reducer"
import type { MenuItem } from "../types"

type MenuItemsTypes = {
    item: MenuItem,
    dispatch: Dispatch<OrderActions>
}

export default function MenuItems({item, dispatch}: MenuItemsTypes) {
  return (
    <button onClick={() => dispatch({type:'add-item', payload:{item}})} className="border-2 rounded-lg border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between">
      <p>{item.name}</p>
      <p className="font-black">{formatCurrency(item.price)}</p>
    </button>
  )
}
