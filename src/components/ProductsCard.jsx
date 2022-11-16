import React from 'react'
import { Link } from 'react-router-dom'
import noImage from '../images/no-image.png'
import ReactReadMoreReadLess from "react-read-more-read-less";

function ProductsCard({ product }) {
  return (
    <>
      <div className="shadow rounded p-3 border my-3">
        <div className="flex items-center gap-3">
          <img src={product.image[0] || noImage} alt={"img"} className="h-10" />

          <div>
            <Link
              to={"/product/view/" + product._id}
              className=" block font-bold text-lg text-indigo-900 hover:text-orange-700"
            >
              {product.name || "Un named"}
            </Link>
            <small className="bg-gray-300 px-3 rounded-full">
              {product.category || "Un categorised"}
            </small>
            <p>
              <ReactReadMoreReadLess
                charLimit={30}
                readMoreText={"Read More"}
                readLessText={"Less"}
                readMoreClassName="text-blue-900 font-bold"
                readLessClassName="text-blue-900 font-bold"
              >
                {product.description || "No details available"}
              </ReactReadMoreReadLess>
            </p>
            <p>
              <Link
                to={"/product/order/" + product._id}
                className="mt-3  bg-orange-700 py-1 px-2 rounded text-white space-x-2 hover:bg-orange-600"
              >
                <i className="fa fa-cart-plus" />
                <span>Order Now</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsCard
