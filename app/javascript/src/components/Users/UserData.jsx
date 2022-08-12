import React from "react";

const UserData = ({ users }) => (
  <div className="mt-10 flex flex-col">
    <div className="my-2 overflow-x-auto px-4 sm:-mx-6 lg:-mx-8">
      <div
        className="inline-block min-w-full py-2
            align-middle sm:px-6 lg:px-8"
      >
        <div
          className="border-b shadow
              md:custom-box-shadow overflow-hidden border-gray-200"
        >
          <table className="divide-y min-w-full divide-gray-200">
            <thead>
              <tr>
                <th className="w-4"></th>
                <th
                  className="bg-gray-50 px-6 py-3 text-left
        text-xs font-bold uppercase leading-4
        tracking-wider text-bb-gray-600 text-opacity-50"
                >
                  Name
                </th>

                <th
                  className="bg-gray-50 px-6 py-3 text-left text-sm
          font-bold leading-4 tracking-wider
          text-bb-gray-600 text-opacity-50"
                >
                  Email
                </th>

                <th
                  className="bg-gray-50 px-6 py-3 text-left text-sm
          font-bold leading-4 tracking-wider
          text-bb-gray-600 text-opacity-50"
                >
                  Role
                </th>
                <th
                  className="bg-gray-50 py-3 pl-6 text-center text-sm
          font-bold leading-4 tracking-wider
          text-bb-gray-600 text-opacity-50"
                >
                  Status
                </th>
                <th
                  className="bg-gray-50 py-3 pl-6 text-center text-sm
          font-bold leading-4 tracking-wider
          text-bb-gray-600 text-opacity-50"
                >
                  Update role
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td className="text-center">{index + 1}</td>
                  <td
                    className="whitespace-no-wrap px-6 py-4 text-sm font-medium
                            leading-5 text-bb-gray-600"
                  >
                    <div className="truncate max-w-64 ">{user.name}</div>
                  </td>
                  <td
                    className="whitespace-no-wrap px-6 py-4 text-sm font-medium
                            leading-5 text-bb-gray-600"
                  >
                    <div className="truncate max-w-64 ">{user.email}</div>
                  </td>

                  <td
                    className="whitespace-no-wrap text-bb-gray-900 px-6 py-4 text-sm
                            font-medium leading-5"
                  >
                    <div className="truncate max-w-64 ">{user.role}</div>
                  </td>
                  <td style={{ width: "164px" }}></td>

                  <td className="cursor-pointer py-4 pl-6 text-center">
                    <i
                      className="transition ri-edit-line text-center
                  text-2xl text-bb-border duration-300
                  ease-in-out hover:text-bb-red"
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

export default UserData;
