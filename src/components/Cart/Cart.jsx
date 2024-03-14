/* eslint-disable react/prop-types */
import { totalCredits } from "../../App";

const Cart = ({ carts }) => {
    const credits = carts.reduce((p, c) => p + c.credit, 0);
  return (
    <div className="bg-white p-3 pl-3 rounded-lg">
      <div className=" font-semibold text-purple-800 pb-2">
        Credit Hour Remaining {totalCredits - credits} hr
      </div>
      <hr className="mb-2" />
      <div>
        <p className="font-bold mb-2">Course Name</p>
        <div>
          <ul>
            {carts.map((c) => (
              <li key={c.id}>{c.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <hr className="mb-2" />
      <div className="mb-2 font-semibold">
        total credit hour: {credits}
      </div>
      <hr className="mb-2" />
      <div className="font-semibold">
        total price:{carts.reduce((p, c) => p + c.price, 0)} USD
      </div>
    </div>
  );
};

export default Cart;
