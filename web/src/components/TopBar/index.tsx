import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginBottom: theme.spacing(4),
    },
    homeIcon: {
      marginRight: theme.spacing(2),
    },
  }),
);

const TopBar: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="regular">
          <Link href="/">
            <HomeIcon className={classes.homeIcon} />
          </Link>

          <Typography variant="h6" color="inherit">
            Desafio - react
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopBar;
