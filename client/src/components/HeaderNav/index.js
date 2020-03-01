import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
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

const navLinks = [
  {name: 'about', link: '/about'},
  {name: 'projects', link: '/projects'},
  {name: 'contact', link: '/contact'}
];

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
          <NavList></NavList>
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
        {navLinks.map((links, index) => (
          <NavLink key={index} name={links.name} link={links.link} />
        ))}
      </Drawer>
    </div>
  );
}
