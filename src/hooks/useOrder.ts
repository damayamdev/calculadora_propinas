import { useState } from "react"
import type { OrderItem, MenuItem } from "../types"

export default function useOrder() {

    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)

    const addItem = (item: MenuItem) => {
        const itemExist = order.find((itemOrder) => itemOrder.id === item.id)
        if (itemExist) {
            const updateOrder = order.map(itemOrder => itemOrder.id === item.id ? { ...itemOrder, quantity: itemOrder.quantity + 1 } : itemOrder)
            setOrder(updateOrder)
        } else {
            const newItem = { ...item, quantity: 1 }
            setOrder([...order, newItem])
        }

    }

    const removeItem = (itemId: MenuItem['id']) => {
        setOrder(order.filter(item => item.id !== itemId))
    }

    const placeOrder = () => {
        setOrder([])
        setTip(0)
    }

    return {
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrder
        
    }
}