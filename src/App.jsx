import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Courses from "./components/Courses";

export const totalCredits = 15;

function App() {
  const [carts, setCarts] = useState([]);

  const handleAddCredit = (course) => {
    const credits = carts.reduce((p, c)=> p+c.credit,0)
    if(credits + course.credit > totalCredits){
      return alert(`Only ${totalCredits} Credits Allowed`)
    }
    const alreadyExists = carts.find((c) => c.id == course.id);
    if (!alreadyExists) setCarts((c) => [...c, course]);
  };

  return (
    <div className="container mx-auto bg-base-200 p-4">
      <div className="text-center p-6">
        <h1 className="text-3xl font-bold">Course Registration</h1>
      </div>
      <div className="md:grid grid-cols-12 gap-6 ">
        <div className="md:col-span-10">
          <Courses handleAddCredit={handleAddCredit}></Courses>
        </div>
        <div className="md:col-span-2">
          <Cart carts={carts}></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
