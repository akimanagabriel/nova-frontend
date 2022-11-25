import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import api from "./../config/basicConfig";
import noImage from "../images/no-image.png";
import LoadingComponent from "./../components/LoadingComponent";
import ReactReadMoreReadLess from "react-read-more-read-less";
import { Link } from "react-router-dom";

function ShopWrapper(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect((_) => {
    axios
      .get(api.offlineUrl + "/api/products")
      .then(({ data }) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {loading && <LoadingComponent />}
      {!loading && (
        <div className="mt-3">
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {products.map((product, index) => (
              <div key={index} className="mb-5">
                <Link to={`/product/view/${product._id}`}>
                  <div className="border shadow flex flex-col gap-3 hover:border-gray-200 hover:shadow-xl bg-white hover:bg-gray-50 cursor-default">
                    <img
                      src={product.image[0] || noImage}
                      alt={product.name}
                      className="max-h-[200px] md:max-h-xs w-100"
                    />
                    <div className="px-3 pb-3">
                      <h1 className="font-[900] overflow-x-clip">
                        <ReactReadMoreReadLess
                          charLimit={20}
                          readMoreText={"▼"}
                          readLessText={"▲"}
                          readMoreClassName="text-blue-900 font-bold"
                          readLessClassName="text-blue-900 font-bold"
                        >
                          {product.name || "Un-Titled product"}
                        </ReactReadMoreReadLess>
                      </h1>

                      {/* details of product */}
                      <ReactReadMoreReadLess
                        charLimit={30}
                        readMoreText={""}
                        readLessText={""}
                        readMoreClassName="text-blue-900 font-bold"
                        readLessClassName="text-blue-900 font-bold"
                      >
                        {product.description || "Un described product"}
                      </ReactReadMoreReadLess>
                      {props.button && (
                        <p>
                          <button className="px-4 py-2 bg-orange-700 text-white font-bold mt-2 rounded hover:bg-orange-600">
                            <i className="fa fa-cart-plus mr-2" />
                            Add to cart
                          </button>
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default ShopWrapper
