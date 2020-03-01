import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import NavLink from '../NavLink';

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

export default function PersistentDrawerRight() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <NavLink link='/' name='Kevin Passaglia'></NavLink>
          </Grid>
          <Grid item xs={4}>
            <NavLink link='/about' name='about'></NavLink>
            <NavLink link='/projects' name='projects'></NavLink>
            <NavLink link='/contact' name='contact'></NavLink>
          </Grid>
          <Grid item xs={4}>
            <IconButton
              style={global}
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
          <List>
            {['About', 'Projects', 'Contact'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['Blogs', 'Music', 'Visuals'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </div>
    </div>
  );
}
