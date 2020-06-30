import React, { createContext, useState } from 'react';
export const TableContext = createContext();

const TableContextProvider = (props) => {
  const [rows, setRows] = useState('');
  const [columns, setColumns] = useState('');
  const [values, setValues] = useState([]);
  const [sumProduct, setSumProduct] = useState([]);

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
      }}
    >
      {props.children}
    </TableContext.Provider>
  );
};

export default TableContextProvider;
