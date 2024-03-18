import React from "react";

function OrderPage() {
  return (
    <>
      {/* main box */}
      <div className="main-div flex justify-between bg-primeColor h-[700px] m-10">

        {/* Shpoing Box */}
        <div className="Shoping-div relative m-2 bg-slate-100 w-[60%]">
          <h1 className="text-2xl font-bold">Shoping Cart</h1>

          {/* Order Box */}
          <div className="absolute bg-slate-100 border ring bottom-0 right-0 w-72 h-60 m-4">
            order
          </div>
        </div>

        {/* Payment Box */}
        <div className="Payment-div m-2 px-4 bg-slate-100 w-[40%]">
          <h1 className="text-2xl font-bold">Payment Info</h1>
           <h3 className="py-4 px-2">Payment Method</h3>
           
        </div>
      </div>
    </>
  );
}

export default OrderPage;
