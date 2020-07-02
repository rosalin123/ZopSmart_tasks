import React, { useContext } from 'react';
import './styles.css';
import { TableContext } from '../../contexts/TableContext';
import uuid from 'uuid/dist/v1';

const Table = () => {
  const { updateValues, values, sumProduct } = useContext(TableContext);

  const handleChange = (e) => {
    let row = Number(e.target.dataset.row);
    let column = Number(e.target.dataset.column);
    let prevValue = values[row][column];
    values[row][column] = Number(e.target.value);
    sumProduct[row][0] =
      sumProduct[row][0] - prevValue + Number(e.target.value);
    sumProduct[row][1] = values[row].reduce((product, value) => {
      product *= value;
      return product;
    }, 1);
    updateValues(values, sumProduct);
  };

  const tableData =
    values.length &&
    values.map((value1, index1) => {
      return (
        <tr key={index1} data-row="index">
          <td>{index1 + 1}</td>

          {value1.map((value2, index2) => {
            return (
              <td key={index2}>
                <input
                  type="number"
                  onChange={(e) => handleChange(e)}
                  defaultValue={values[index1][index2]}
                  data-row={index1}
                  data-column={index2}
                  data-test="input"
                />
              </td>
            );
          })}
          <td key={uuid()}>{sumProduct[index1][0]}</td>
          <td key={uuid()}>{sumProduct[index1][1]}</td>
        </tr>
      );
    });

  return (
    values.length && (
      <div className="scrollit">
        {' '}
        <table>
          <tbody>
            <tr>
              <th>S.No</th>
              {values[0].map((value, index) => {
                return <th key={index}>Val {index + 1}</th>;
              })}
              <th key={uuid()}>Sum</th>
              <th key={uuid()}>Product</th>
            </tr>
            {tableData}
          </tbody>
        </table>
      </div>
    )
  );
};

export default Table;
