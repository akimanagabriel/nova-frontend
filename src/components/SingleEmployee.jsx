import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import api from "./../config/basicConfig";
import moment from "moment";
import "react-toastify/dist/ReactToastify.css";
import noDocument from "../images/no-documents.jpg";

function SingleEmployee() {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    axios
      .get(api.offlineUrl + "/api/employees/" + id)
      .then((res) => {
        setEmployee(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      {employee !== null && (
        <div className="flex justify-center items-center mt-[80px]">
          <div className="my-4">
            <div className="border relative  bg-white shadow rounded flex justify-center p-7">
              <i className="fa fa-user text-8xl absolute top-[-60px] text-indigo-600" />

              <div className="flex flex-col md:flex-row md:space-x-20">
                <div className="pt-12 pb-3 space-y-3 flex flex-col justify-start">
                  <div className="flex justify-center mb-3">
                    <label className="text-2xl font-bold uppercase">
                      {employee.userId.fullName}
                      <hr />
                    </label>
                  </div>

                  <div className="flex">
                    <label className="font-bold">
                      Email: &nbsp;&nbsp;&nbsp;{""}
                    </label>
                    <label>{employee.userId.email}</label>
                  </div>

                  <div className="flex">
                    <label className="font-bold">
                      Mobile: &nbsp;&nbsp;&nbsp;{""}
                    </label>
                    <label>{employee.userId.telephone}</label>
                  </div>

                  <div className="flex">
                    <label className="font-bold">
                      Creation duration: &nbsp;&nbsp;&nbsp;{""}
                    </label>
                    <label>{moment(employee.createdAt).fromNow(false)}</label>
                  </div>

                  <div className="flex">
                    <label className="font-bold">
                      Creation date: &nbsp;&nbsp;&nbsp;{""}
                    </label>
                    <label>{moment(employee.createdAt).calendar()}</label>
                  </div>
                </div>

                <div className="flex flex-col space-y-3 mt-3  md:mt-14">
                  <h1 className="text-black font-bold">Attached documents</h1>
                  <div>
                    {/* {console.log(employee)} */}
                    {employee.documents.length === 0 ? (
                      <span className="text-red-500">
                        <img
                          className="w-12 md:w-32"
                          src={noDocument}
                          alt="no document found"
                        />
                        No document found
                      </span>
                    ) : (
                      <div>
                        <ol>
                          {employee.documents.map((doc, i) => {
                            return (
                              <li key={i}>
                                <a
                                  target={"_blank"}
                                  rel="noreferrer"
                                  href={doc.documentUrl}
                                  className={`text-indigo-800 font-bold`}
                                >
                                  {doc.documentType}
                                </a>
                              </li>
                            );
                          })}
                        </ol>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SingleEmployee;
