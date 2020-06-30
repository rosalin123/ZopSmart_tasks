import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TableContainer from './components/tableContainer';
import TableContextProvider from './contexts/TableContext';

function App() {
  return (
    <Provider store={store}>
      <TableContextProvider>
        {' '}
        <TableContainer />
      </TableContextProvider>
    </Provider>
  );
}

export default App;
