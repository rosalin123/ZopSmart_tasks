import React, { Component } from 'react';
import Table from './components/table';
import { Grid, Typography, Button } from '@material-ui/core';
import Header from './components/header';
import { withStyles } from '@material-ui/core';

const styles = {
  contentStyles: {
    background: '#eceff1',
    width: '100vw',
    height: '100vh',
  },
  formStyles: {
    width: 400,
    height: 240,
    background: 'white',
    marginTop: '5vh',
    padding: 20,
    borderRadius: 5,
    border: '1px solid grey',
    boxShadow: '1px 4px 22px -7px rgba(0,0,0,0.75)',
  },
  headerStyles: {
    width: '100%',
  },

  inputFieldStyles: {
    height: 20,
    width: 40,
  },

  paddingStyles: {
    paddingLeft: 100,
    paddingRight: 100,
  },

  submitButtonStyles: {
    width: '100%',
    height: 35,
  },
  typograpgyStyles: {
    fontWeight: 'bold',
  },

  tableStyles: {
    marginTop: '30px',
  },
};

class App extends Component {
  state = { rows: 0, columns: 0, showTable: false };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ showTable: true });
  };

  handleChange = (e, input) => {
    console.log(e.target.value);
    this.setState({ [input]: Number(e.target.value), showTable: false }, () => {
      console.log(this.state);
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.contentStyles}
      >
        <Grid item className={classes.headerStyles}>
          <Header />
        </Grid>

        <Grid item className={classes.formStyles}>
          {' '}
          <form onSubmit={this.handleSubmit}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <h3>Enter rows and columns to create a table</h3>
              </Grid>
              <Grid item>
                <Grid
                  container
                  spacing={1}
                  direction="column"
                  className={classes.paddingStyles}
                >
                  {' '}
                  <Grid item>
                    <Grid container spacing={2} justify="space-between">
                      {' '}
                      <Grid item>
                        {' '}
                        <Typography
                          color="textSecondary"
                          className={classes.typograpgyStyles}
                        >
                          Rows:
                        </Typography>
                      </Grid>
                      <Grid item>
                        {' '}
                        <input
                          type="number"
                          onChange={(e) => this.handleChange(e, 'rows')}
                          className={classes.inputFieldStyles}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container justify="space-between">
                      {' '}
                      <Grid item>
                        {' '}
                        <Typography
                          color="textSecondary"
                          className={classes.typograpgyStyles}
                        >
                          Columns:
                        </Typography>
                      </Grid>
                      <Grid item>
                        <input
                          type="number"
                          onChange={(e) => this.handleChange(e, 'columns')}
                          className={classes.inputFieldStyles}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                {' '}
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.submitButtonStyles}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Grid item className={classes.tableStyles}>
          {' '}
          {this.state.showTable && (
            <Table rows={this.state.rows} columns={this.state.columns} />
          )}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(App);
