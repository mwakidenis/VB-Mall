import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTotalAmount as setTotalAmountAction } from "../../redux/cartSlice";

const currencyFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
});

const cardClass = "p-4 bg-white rounded-lg shadow-md";

const calculateShipping = (itemsTotal, threshold, rate) => {
  return itemsTotal >= threshold || itemsTotal === 0 ? 0.0 : rate;
};

function OrderSummary() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const itemsTotal = items.reduce((acc, item) => acc + item.total, 0);

  const shippingThreshold = 500.0;
  const shippingRate = 40.0;

  let shipping = calculateShipping(itemsTotal, shippingThreshold, shippingRate);
  let total = itemsTotal + shipping;

  useEffect(() => {
    dispatch(setTotalAmountAction(total));
  }, [total, dispatch]);


  if (itemsTotal === 0) {
    return (
      <div className="mb-5">
        <h2 className="text-2xl font-bold mb-6 text-black">Subtotal</h2>
        <div className={`${cardClass} space-y-2`} style={{ border: "1px solid black" }}>
          <p className="text-lg font-semibold text-zinc-800">Order Summary</p>
          <p className="my-5">You have no items in the shopping cart!</p>
          <ul className="list-inside text-zinc-700 space-y-1 list-none">
            <li className="flex items-center justify-between gap-5 font-bold text-xl">
              <span>Total</span>
              <span>{currencyFormatter.format(total)}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-5">
      <h2 className="text-2xl font-bold mb-6 text-black">Subtotal</h2>
      <div className={`${cardClass} space-y-2`} style={{ border: "1px solid black" }}>
        <p className="text-lg font-semibold text-zinc-800">Order Summary</p>
        <ul className="list-inside text-zinc-700 space-y-1 list-none">
          <hr />
          {items.map((item, index) => (
            <li key={index} className="flex items-center justify-between gap-5 py-1">
              <span>{item.title}</span>
              <span>{currencyFormatter.format(item.total)}</span>
            </li>
          ))}
          <li className="flex items-center justify-between gap-5 font-bold">
            <span>Shipping</span>
            {shipping === 0.0 ? (
              <span className="text-green-600">FREE</span>
            ) : (
              <span>{currencyFormatter.format(shipping)}</span>
            )}
          </li>
          <hr />
          <li className="flex items-center justify-between gap-5 font-bold text-xl">
            <span>Total</span>
            <span>{currencyFormatter.format(total)}</span>
            
          </li>
        </ul>
      </div>
    </div>
  );
}

export default OrderSummary;
