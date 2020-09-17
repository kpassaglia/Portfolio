import React from 'react';
import './style.css';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import NavLink from '../NavLink';
import NavList from '../NavList';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}));

export default function headerNav() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const navStyle = {
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    zIndex: 99,
  };

  //Drawer State (Might Be able to move)
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div style={navStyle}>
      <Grid container spacing={3}>
        <Grid className='navLogo' item xs={4}>
          <NavLink class='headerLink' link='/' name='CoolerProblems'></NavLink>
        </Grid>
        <Grid className='navList' item xs={4}>
          <NavList
            class='headerLink'
            parentClass='navList'
            mainSize={['xs', 'sm']}
            secondarySize={['lg', 'md', 'sm', 'xl', 'xs']}></NavList>
        </Grid>
        <Grid className='headerLink navDrawer' item xs={4}>
          <IconButton
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            className='headerLink'>
            <MenuIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Drawer
        className='drawer'
        variant='persistent'
        anchor='right'
        open={open}
        classes={{
          paper: classes.drawerPaper,
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
