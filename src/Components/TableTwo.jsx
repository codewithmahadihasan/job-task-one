import React, { useEffect, useState } from "react";
import { RiArrowUpDownFill } from "react-icons/ri";
import TableThree from "./TableThree";

const TableTwo = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("information.json")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);

  return (
    <div>
      <div className="antialiased bg-gray-100 text-gray-600  px-4">
        <h1 className="text-center font-bold text-3xl pt-20">
          Table Number Two
        </h1>
        <div className="flex flex-col justify-center pt-10">
          <div className="w-full max-w-5xl mx-auto bg-white shadow-lg rounded-sm ">
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-black bg-gray-50">
                    <tr className="">
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left flex gap-2 items-center">
                          Name <RiArrowUpDownFill></RiArrowUpDownFill>
                        </div>
                      </th>

                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left flex gap-2 items-center">
                          Email
                        </div>
                      </th>

                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left flex gap-2 items-center">
                          Role
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100 ">
                    {datas?.map((data, i) => (
                      <tr key={data._id} className="">
                        <td className="font-p-2 whitespace-nowrap flex  items-center gap-2 ">
                          <img
                            className="rounded-full w-10 h-10"
                            src={data?.avatar}
                            alt=""
                          />
                          {data.person.name}
                        </td>

                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left text-blue-500 underline">
                            {" "}
                            {data.email}
                          </div>
                        </td>

                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left"> {data.role}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TableThree></TableThree>
    </div>
  );
};

export default TableTwo;
