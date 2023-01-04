import React from "react";
import { MdClose } from "react-icons/md";

const CartElement = ({ element, count }) => {
  return (
    <div className="grid grid-cols-[repeat(3,minmax(0,1fr)),max-content] p-2 pb-4 border-b-2 last:border-b-0 gap-3">
      <img
        src={element.image}
        alt={element.title}
        className="bg-gray-500 w-full aspect-square rounded-md col-span-full md:col-span-1"
      />
      <div className="col-span-full md:col-span-1">
        <h4 className="font-bold text-lg">{element.title}</h4>
        <p className="font-light">{element.desc}</p>
        <p className="font-semibold text-lg">{element.price}</p>
      </div>
      <div className="col-span-2 md:col-span-1 flex items-center md:items-start">
        <select
          name=""
          id=""
          defaultValue={count}
          className="p-2 rounded-md outline-none"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      <div className="col-span-2 md:col-span-1 flex items-center justify-end md:items-start">
        <button className="text-xl hover:text-tg">
          <MdClose />
        </button>
      </div>
    </div>
  );
};

const CartPage = () => {
  return (
    <div className="w-full container mx-auto grid md:grid-cols-[auto,max-content] p-4 gap-4 rounded-md">
      <div className="flex flex-col gap-3 bg-[#f1f1f1] rounded-md p-2">
        <CartElement
          element={{
            title: "Elemento 1",
            desc: "caracteristicas",
            price: "$99.00",
          }}
          count="3"
        />
        <CartElement
          element={{
            title: "Elemento 2",
            desc: "caracteristicas",
            price: "$99.00",
          }}
          count="3"
        />
      </div>
      <div className="p-2 rounded-md bg-tc text-white h-max">
        <h3 className="font-bold text-lg text-tg">Resumen</h3>
        <div className="flex justify-between items-center py-1 gap-3">
          <span>Subtotal</span>
          <p className="font-bold">$99.00</p>
        </div>
        <div className="flex justify-between items-center py-1 gap-3 border-b-2 text-sm">
          <span>Estimación de envío</span>
          <p className="font-bold">$5.00</p>
        </div>
        <div className="flex justify-between items-center py-1 gap-3 border-b-2 text-sm">
          <span>Estimación de impuestos</span>
          <p className="font-bold">$8.32</p>
        </div>
        <div className="flex justify-between items-center py-1 gap-3">
          <p className="font-bold text-tg">Orden total</p>
          <p className="font-bold text-tg">$112.32</p>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
