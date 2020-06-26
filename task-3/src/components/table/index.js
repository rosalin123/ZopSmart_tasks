import React, { Component } from 'react';
import { updateValues } from '../../actions/tableActions';
import { connect } from 'react-redux';
import './styles.css';

export class Table extends Component {
  componentDidMount = () => {
    const { rows, columns } = this.props;
    const values = this.setInitialValues(rows, columns);
    const sumProduct = this.setSumProductValues(rows);
    this.props.updateValues(values, sumProduct);
  };

  setInitialValues = (rows, columns) => {
    let values = [];
    for (let i = 0; i < rows; i++) {
      let row = [];
      for (let j = 0; j < columns; j++) {
        row.push(0);
      }
      values.push(row);
    }
    return values;
  };

  setSumProductValues = (rows) => {
    let sumProduct = [];
    for (let i = 0; i < rows; i++) {
      sumProduct.push([0, 0]);
    }

    return sumProduct;
  };

  handleChange = (e) => {
    let row = Number(e.target.dataset.row);
    let column = Number(e.target.dataset.column);
    let { values, sumProduct } = this.props;
    let prevValue = values[row][column];
    values[row][column] = Number(e.target.value);
    sumProduct[row][0] =
      sumProduct[row][0] - prevValue + Number(e.target.value);
    sumProduct[row][1] = values[row].reduce((product, value) => {
      product *= value;
      return product;
    }, 1);
    this.props.updateValues(values, sumProduct);
  };

  render() {
    let { values, sumProduct } = this.props;

    const tableData =
      values !== null &&
      values.map((value1, index1) => {
        return (
          <tr key={index1} data-row="index">
            <td>{index1 + 1}</td>
            {value1.map((value2, index2) => {
              return (
                <td key={index2}>
                  <input
                    type="number"
                    onChange={(e) => this.handleChange(e)}
                    defaultValue={0}
                    data-row={index1}
                    data-column={index2}
                    data-test="input"
                  />
                </td>
              );
            })}
            <td key={100}>{sumProduct[index1][0]}</td>
            <td key={111}>{sumProduct[index1][1]}</td>
          </tr>
        );
      });

    return (
      values !== null && (
        <div>
          {' '}
          <table style={{ width: '100%' }}>
            <tbody>
              <tr>
                <th>S.No</th>
                {values[0].map((value, index) => {
                  return <th key={index}>Val {index + 1}</th>;
                })}
                <th key={100}>Sum</th>
                <th key={101}>Product</th>
              </tr>
              {tableData}
            </tbody>
          </table>
        </div>
      )
    );
  }
}

const mapStateToProps = (state) => ({
  values: state.Values.values,
  sumProduct: state.Values.sumProduct,
});

export const mapDispatchToProps = (dispatch) => ({
  updateValues: (values, sumProduct) =>
    dispatch(updateValues(values, sumProduct)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
