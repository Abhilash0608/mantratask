import React, { useState } from "react";
import "./App.css";

import InputForm from "./InputForm";
import Table from "./Table";

import { Route, Routes } from "react-router";

function App() {
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState(false);
  const [editElement, setEditElement] = useState({});
  const appendData = (item) => {
    setData((prev) => {
      return [...prev, item];
    });
  };

  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<InputForm />} />
      </Routes>

      {/* <Table
        data={data}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        setEdit={setEdit}
  />*/}
    </div>
  );
}

export default App;
