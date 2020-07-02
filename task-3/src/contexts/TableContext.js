import React, { createContext, useState } from 'react';
export const TableContext = createContext();

const TableContextProvider = (props) => {
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);
  const [values, setValues] = useState([[]]);
  const [sumProduct, setSumProduct] = useState([[]]);

  const handleRows = (rows) => {
    setRows(rows);
  };

  const handleColumns = (columns) => {
    setColumns(columns);
  };

  const updateValues = (values, sumProduct) => {
    setValues([...values]);
    setSumProduct([...sumProduct]);
  };

  const setInitialValues = () => {
    let values = [];
    let sumProduct = [];
    for (let i = 0; i < rows; i++) {
      let row = [];
      sumProduct.push([0, 0]);
      for (let j = 0; j < columns; j++) {
        row.push(0);
      }
      values.push(row);
    }

    setValues([...values]);
    setSumProduct([...sumProduct]);
  };

  return (
    <TableContext.Provider
      value={{
        rows,
        columns,
        values,
        sumProduct,
        updateValues,
        handleRows,
        handleColumns,
        setInitialValues,
      }}
    >
      {props.children}
    </TableContext.Provider>
  );
};

export default TableContextProvider;
