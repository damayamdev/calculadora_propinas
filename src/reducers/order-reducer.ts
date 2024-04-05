import { MenuItem, OrderItem } from "../types";

export type OrderActions =
  | { type: "add-item"; payload: { item: MenuItem } }
  | { type: "remove-item"; payload: { id: MenuItem["id"] } }
  | { type: "place-order" }
  | { type: "add-tip"; payload: { value: number } };

export type OrderState = {
  order: OrderItem[];
  tip: number;
};

export const initialState: OrderState = {
  order: [],
  tip: 0,
};

export const orderReducer = (
  state: OrderState = initialState,
  action: OrderActions
) => {


  if (action.type === "add-item") {
    const itemExist = state.order.find(
      (itemOrder) => itemOrder.id === action.payload.item.id
    );
    let order: OrderItem[] = [];
    if (itemExist) {
      order = state.order.map((itemOrder) =>
        itemOrder.id === action.payload.item.id
          ? { ...itemOrder, quantity: itemOrder.quantity + 1 }
          : itemOrder
      );
    } else {
      const newItem = { ...action.payload.item, quantity: 1 };
      order = [...state.order, newItem];
    }

    return {
      ...state,
      order,
    };
  }


  if (action.type === "remove-item") {
    return {
      ...state,
      order: state.order.filter(item =>  item.id !== action.payload.id),
    };
  }


  if (action.type === "place-order") {
    return {
        order: [],
        tip: 0,
    };
  }


  if (action.type === "add-tip") {
    const tip = action.payload.value
    return {
      ...state,
      tip
    };
  }


  return state;
};
