import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import api from "./../config/basicConfig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Employees() {
  const [error, setError] = useState("");
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get(api.offlineUrl + "/api/employees")
      .then((res) => {
        var extractedEmp = [];
        const employees = res.data.filter((e) => e.userId);
        employees.forEach((element) => {
          extractedEmp.push(element);
        });
        setEmployees(extractedEmp);
      })
      .catch((err) => setError(err.response.data));
  }, []);

  // delete employees
  const handleDelete = (id) => {
    const emps = employees.filter((e) => e._id !== id);
    axios
      .delete(`${api.offlineUrl}/api/employees/${id}`)
      .then((res) => {
        setEmployees(emps);
        toast.success("Employee deleted successfully!", {
          theme: "light",
          position: "bottom-right",
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="my-3 flex justify-between">
        <h1 className="text-xl ">Employees details</h1>
        <div>
          <Link to={"/admin/dashbord"} className="font-bold text-indigo-900">
            Dashboard
          </Link>
          /Employees
        </div>
      </div>

      {/* toast */}
      <ToastContainer />

      {error ? <p className="text-red-600">{error.message}</p> : null}

      <div className="my-2">
        <div className="bg-white shadow rounded p-2">
          <table className="w-[100%]">
            <thead>
              <tr className="border">
                <th className="border">#</th>
                <th className="border">Full names</th>
                <th className="border">Email</th>
                <th className="border">Telephone</th>
                <th className="border" colSpan={2}>
                  Username
                </th>
              </tr>
            </thead>
            <tbody>
              {employees.map((e, i) => (
                <tr key={i} className="border">
                  <td className="border">{++i}</td>
                  <td className="border">{e.userId.fullName}</td>
                  <td className="border">{e.userId.email}</td>
                  <td className="border">{e.userId.telephone}</td>
                  <td className="border">{e.userId.username}</td>
                  <td className="border flex justify-around">
                    <button
                      onClick={() => handleDelete(e._id)}
                      className="border-0"
                    >
                      <i className="fa fa-trash" />
                    </button>
                    <button className="border-0">
                      <Link to={`/employment/change/${e._id}`}>
                        <i className="fa fa-edit" />
                      </Link>
                    </button>
                    <button className="border-0">
                      <Link to={`/employment/view/${e._id}`}>
                        <i className="fa fa-eye" />
                      </Link>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Employees;
