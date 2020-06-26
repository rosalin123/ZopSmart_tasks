import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import TableContainer from './components/tableContainer';

function App() {
  return (
    <Provider store={store}>
      <TableContainer />
    </Provider>
  );
}

export default App;
