import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import NavLink from '../NavLink';
import NavList from '../NavList';

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  title: {
    flexGrow: 1,
    display: 'flex'
  },
  drawer: {
    width: 0,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  }
}));

export default function headerNav() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  //Drawer State (Might Be able to move)
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <NavLink link='/' name='Kevin Passaglia'></NavLink>
        </Grid>
        <Grid item xs={4}>
          <NavList
            mainSize={['xs', 'sm']}
            secondarySize={['lg', 'md', 'sm', 'xl', 'xs']}></NavList>
        </Grid>
        <Grid item xs={4}>
          <IconButton
            aria-label='open drawer'
            edge='end'
            onClick={handleDrawerOpen}
            className={clsx(open)}>
            <MenuIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='right'
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ClearIcon />
          </IconButton>
        </div>
        <NavList mainSize={['md', 'lg', 'xl']}></NavList>
      </Drawer>
    </div>
  );
}
