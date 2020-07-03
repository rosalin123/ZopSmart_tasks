import Layout from '../components/Layout';
import { Grid } from '@material-ui/core';
import UserComponent from '../components/UserComponent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    paddingTop: '10px',
  },
  userStyles: {
    borderBottom: '1px solid lightgrey',
    background: 'white',
  },
});

const Users = (props) => {
  const classes = useStyles();
  const { users } = props;
  return (
    <Layout>
      <Grid container spacing={3} direction="column" className={classes.root}>
        {users.map((user, index) => {
          return (
            <Grid item key={index} className={classes.userStyles}>
              <UserComponent
                key={user.id}
                username={user.username}
                email={user.email}
                id={user.id}
              />
            </Grid>
          );
        })}
      </Grid>
    </Layout>
  );
};

Users.getInitialProps = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return { users: data };
};

export default Users;
