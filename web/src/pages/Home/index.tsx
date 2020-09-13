import React from 'react';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    contentHeader: {
      flexGrow: 1,
      marginBottom: theme.spacing(4),
      justifyContent: 'space-between',
    },
  }),
);

const Home: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={4} className={classes.contentHeader}>
      <Typography variant="h4" component="h1">
        Mapa de residências
      </Typography>
      <Button color="primary" variant="contained" onClick={() => {}}>
        Adicionar uma residência
      </Button>
    </Grid>
  );
};

export default Home;
