import { Dispatch } from "react";
import { OrderActions } from "../reducers/order-reducer";

const tipOptions = [
  { id: "tip-10", value: 0.1, label: "10%" },
  { id: "tip-20", value: 0.2, label: "20%" },
  { id: "tip-50", value: 0.5, label: "50%" },
];

type TipPercentageFormProps = {
  dispatch: Dispatch<OrderActions>
    tip: number
}

const TipPercentageForm = ({dispatch, tip}: TipPercentageFormProps) => {

  return (
    <section>
      <h3 className="font-black text-2xl">Propina:</h3>
      <form action="">
        {tipOptions.map((item) => (
          <div className="flex gap-2" key={item.id}>
            <label htmlFor={item.id}>{item.label}</label>
            <input onChange={e => dispatch({type:'add-tip', payload:{value:+e.target.value}})} type="radio" id={item.id} name="item" value={item.value} checked={item.value === tip}/>
          </div>
        ))}
      </form>
    </section>
  );
};

export default TipPercentageForm;
