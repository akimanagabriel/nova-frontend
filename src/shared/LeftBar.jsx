import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import ProductsCard from '../components/ProductsCard'
import api from './../config/basicConfig';
import LoadingComponent from './../components/LoadingComponent';


function LeftBar() {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(_ => {
        axios.get(api.offlineUrl + "/api/products")
            .then(({ data }) => {
                setProducts(data.filter(p => p.name))
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])


    return (
      <div className="w-full md:w-4/12 hidden lg:block">
        <div className=" p-3">
          <h1 className="md:text-2xl font-bold text-sky-900">
            Available Goods
          </h1>

          {/* list of items */}
          <div>
            {loading && <LoadingComponent />}
            {!loading &&
              products.map((p) => <ProductsCard key={p._id} product={p} />)}
          </div>
        </div>
      </div>
    );
}

export default LeftBar
