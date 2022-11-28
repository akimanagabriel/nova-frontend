import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import api from "./../config/basicConfig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SingleEmployee() {
  const { id } = useParams();
  const [employee, setEmployee] = useState();

  useEffect(() => {
    axios
      .get(api.offlineUrl + "/api/employees/" + id)
      .then((res) => {
        setEmployee(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return <div>{console.log(employee)}</div>;
}

export default SingleEmployee;
