import { formatCurrency } from "../helpers"
import type { MenuItem } from "../types"

type MenuItemsTypes = {
    item: MenuItem,
    addItem: (item: MenuItem) => void
}

export default function MenuItems({item, addItem}: MenuItemsTypes) {
  return (
    <button onClick={() => addItem(item)} className="border-2 rounded-lg border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between">
      <p>{item.name}</p>
      <p className="font-black">{formatCurrency(item.price)}</p>
    </button>
  )
}
