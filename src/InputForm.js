import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";

const InputForm = () => {
  const [data, setData] = useState([]);
  const [editElement, setEditElement] = useState({});
  const [edit, setEdit] = useState(false);
  const [search, setSearch] = useState("");
  const [sortAscending, setSortAscending] = useState(true);
  const [sortDescending, setSortDescending] = useState(false);
  const handleDelete = (id) => {
    setData(
      data.filter((item) => {
        return item.id !== id;
      })
    );
  };
  const handleSearch = () => {
    const filteredData = data.filter((item) => {
      return item.firstName.toLowerCase().includes(search);
    });
    setData(filteredData);
  };
  const handleEdit = (id) => {
    let ele = data.find((item) => item.id === id);
    setEditElement(ele);
    setInputValues(ele);
  };

  const [inputValues, setInputValues] = useState({
    firstName: "",
    phone: undefined,
    email: "",
    address: "",
    id: "",
  });
  useEffect(() => {}, [data]);

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setInputValues((prev) => {
      return { ...prev, [name]: value };
    });
  };
  console.log(inputValues);
  const handleSort = () => {
    if (sortAscending) {
      // Sort in ascending order
      setData([...data].sort((a, b) => a.firstName.localeCompare(b.firstName)));
      setSortAscending(false);
      setSortDescending(true);
    } else {
      // Sort in descending order
      setData([...data].sort((a, b) => b.firstName.localeCompare(a.firstName)));
      setSortAscending(true);
      setSortDescending(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (edit) {
      // Editing an existing element
      setData((prevData) => {
        return prevData.map((item) => {
          if (item.id === editElement.id) {
            return { ...item, ...inputValues };
          }
          return item;
        });
      });
    } else {
      // Creating a new element
      let values = { ...inputValues, id: nanoid() };
      setData((prev) => {
        return [...prev, values];
      });
    }

    setInputValues({
      firstName: "",
      phone: 0,
      email: "",
      address: "",
      id: "",
    });
    setEdit(false);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit} className="form-wrapper">
        <div className="row">
          <div className="single-input">
            <label htmlFor="firstName">Name</label>
            <input
              value={inputValues.firstName}
              placeholder="Enter name"
              type="text"
              name="firstName"
              onChange={handleChange}
              required
            />
          </div>
          <div className="single-input">
            <label htmlFor="email">Email</label>
            <input
              value={inputValues.email}
              placeholder="Enter email"
              type="email"
              name="email"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="single-input">
            <label htmlFor="phone">Phone</label>
            <input
              value={inputValues.phone}
              onChange={handleChange}
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter phone number"
              pattern="[0-9]{10}"
              required
            />
          </div>
          <div className="single-input">
            <label htmlFor="address">Address</label>
            <input
              value={inputValues.address}
              type="text"
              id="address"
              name="address"
              placeholder="Enter address"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <button type="submit">Submit Data</button>
      </form>
      <div className="search-element">
        <div>
          <input
            placeholder="search-name"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className="sort-buttons">
          <button onClick={handleSort}>Sort A-Z</button>
          <button onClick={handleSort}>Sort Z-A</button>
        </div>
      </div>
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
    </div>
  );
};

export default InputForm;
