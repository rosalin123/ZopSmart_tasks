import React from 'react';
import { Provider } from 'react-redux';
import TableContainer from './components/tableContainer';
import TableContextProvider from './contexts/TableContext';

function App() {
  return (
    <TableContextProvider>
      <TableContainer />
    </TableContextProvider>
  );
}

export default App;
