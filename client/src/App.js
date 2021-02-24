import React, { useEffect } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Posts from './components/posts/posts';
import Form from './components/form/form';
//import horror from './images/horror.png';<img className={classes.image} src={horror} alt="logo" height="100" width="100" />
import useStyles from './styles';

//importing actions from actions folder
import { getPosts } from './actions/posts'
//importing hook for dispatching action
import { useDispatch } from 'react-redux';

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => { dispatch(getPosts()); }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h2" align="center">Cyber Crime Stories</Typography>
        
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App
