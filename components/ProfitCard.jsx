"use client";

import { useSelector, useDispatch } from "react-redux";
import { sellEclair, buyIngredients } from "@/redux/profitSlice";

export default function ProfitCard() {
const dispatch = useDispatch();
const profit = useSelector(state => state.profit.amount);
   return (
    <div className="profit-card">
      <p className="profit-label">Current profit</p>
      <p className={profit < 0 ? "profit-amount negative" : "profit-amount"}>
        ${profit}
      </p>

      <div className="profit-buttons">
        <button className="btn btn-primary" onClick={() => dispatch(sellEclair())}>
          Sell Éclair +$5
        </button>
        <button className="btn btn-clear" onClick={() => dispatch(buyIngredients())}>
          Buy Ingredients −$2
        </button>
      </div>
    </div>
  );

}
