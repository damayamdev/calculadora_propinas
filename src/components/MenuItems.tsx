import type { MenuItem } from "../types"

type MenuItemsTypes = {
    item: MenuItem
}

export default function MenuItems({item}: MenuItemsTypes) {
  return (
    <button className="border-2 rounded-lg border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between">
      <p>{item.name}</p>
      <p className="font-black">{item.price}</p>
    </button>
  )
}
