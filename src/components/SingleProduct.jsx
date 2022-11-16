import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "./../config/basicConfig";
import axios from "axios";
import LoadingComponent from "./LoadingComponent";
import noImage from "../images/no-image.png";
import ShopWrapper from "../app/ShopWrapper";
// import userAuthentication from "../shared/Authentication";

function SingleProduct() {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  //   const [user, setUser] = useState();

  useEffect(() => {
    axios
      .get(`${api.offlineUrl}/api/products/${productId}`)
      .then(({ data }) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [productId]);

  //   get logged user

  //   useEffect(() => {
  //     userAuthentication.login("peter", "shardaq").then((data) => {
  //       setUser(data);
  //     });
  //   }, []);

  const handleImageView = (event) => {
    const mainImage = document.querySelector("#mainImage");
    mainImage.src = event.target.src;
  };

  //   console.log(user);

  return (
    <>
      {loading && <LoadingComponent />}
      {!loading && (
        <div className="my-4">
          <img
            id="mainImage"
            src={product.image[0] || product.image[1] || noImage}
            alt={product.name}
            className={`max-h-[60vh] max-w-100 border rounded `}
          />

          <h1 className="text-xl font-bold text-blue-900 my-2">
            {product.name}
          </h1>

          <div className={`flex gap-3 flex-wrap`}>
            {product.image.map((imgUrl, index) => (
              <img
                key={index}
                src={imgUrl}
                alt={"Image " + (index + 1)}
                className={`h-[80px] rounded border cursor-pointer`}
                onClick={handleImageView}
              />
            ))}
          </div>

          <div className="mt-3">
            <p className="font-[600] text-lg">{product.description}</p>
            <p className="flex gap-2 flex-wrap">
              <button className="px-4 py-2 bg-orange-700 text-white mt-2 rounded hover:bg-orange-600">
                <i className="fa fa-cart-plus mr-2" />
                Add to cart
              </button>

              <button className="px-4 py-2 bg-blue-700 text-white mt-2 rounded hover:bg-blue-600">
                <i className="fa fa-edit mr-2" />
                Edit Product
              </button>

              <button className="px-4 py-2 bg-red-700 text-white mt-2 rounded hover:bg-red-600">
                <i className="fa fa-trash mr-2" />
                Remove from stock
              </button>
            </p>
          </div>
        </div>
      )}

      {/* shopping details again */}
      <div className="my-10">
        <ShopWrapper button={false} />
      </div>
    </>
  );
}

export default SingleProduct;
