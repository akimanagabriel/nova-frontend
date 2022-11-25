import React from "react";
import ShopWrapper from "../ShopWrapper";

function AdminProducts() {
  return (
    <div>
      <div className="flex justify-between mt-3">
        <h1 className="text-xl font-bold">Products</h1>
        <button className="px-3 py-1 rounded bg-indigo-900 text-white">
          <i className="fa fa-plus" />
        </button>
      </div>
      <ShopWrapper />
    </div>
  );
}

export default AdminProducts;
