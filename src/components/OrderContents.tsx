import { formatCurrency } from "../helpers";
import type { OrderItem } from "../types";

type OrderContentsProps = {
  order: OrderItem[];
  removeItem: (item: OrderItem["id"]) => void;
};

const OrderContents = ({ order, removeItem }: OrderContentsProps) => {
  return (
    <>
      <h2 className="font-black text-4xl">Consumo</h2>

      <section className="space-y-3 mt-10">
        {order.map((item) => (
          <div
            className="flex items-center justify-between border-t border-gray-200 py-5 last-of-type:border-b"
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
              onClick={() => removeItem(item.id)}
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
