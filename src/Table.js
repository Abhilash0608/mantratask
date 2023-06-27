import React from "react";

const Table = ({ data, handleDelete, handleEdit, setEdit }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.firstName}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.address}</td>
            <td>
              <button
                onClick={() => {
                  handleEdit(item.id);
                  setEdit(true);
                }}
              >
                edit
              </button>
              <button
                onClick={() => {
                  handleDelete(item.id);
                }}
              >
                delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
