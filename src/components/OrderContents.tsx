import { Dispatch } from "react";
import { formatCurrency } from "../helpers";
import { OrderActions } from "../reducers/order-reducer";
import type { OrderItem } from "../types";

type OrderContentsProps = {
  order: OrderItem[];
  dispatch: Dispatch<OrderActions>
};

const OrderContents = ({ order, dispatch }: OrderContentsProps) => {
  return (
    <>
      <h2 className="font-black text-4xl">Consumo</h2>

      <section className="space-y-3 mt-10 overflow-y-scroll h-[20rem]">
        {order.map((item) => (
          <div
            className="flex items-center justify-between border-t border-gray-200 py-3 pr-3 last-of-type:border-b"
            key={item.id}
          >
            <div>
              <p className="text-lg">
                {item.name} - {formatCurrency(item.price)}
              </p>
              <p className="font-black">
                Cantidad: {item.quantity} -{" "}
                {formatCurrency(item.price * item.quantity)}
              </p>
            </div>
            <button
              onClick={() => dispatch({type:'remove-item', payload:{id:item.id}})}
              className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
            >
              X
            </button>
          </div>
        ))}
      </section>
    </>
  );
};

export default OrderContents;
