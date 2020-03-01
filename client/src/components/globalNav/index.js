import React from 'react';
import clsx from 'clsx';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 240;

const linkStyle = {
  color: 'white'
};
const hide = {
  display: 'none'
};
const global = {
  color: 'white',
  position: 'sticky',
  top: 0
};

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between'
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
  // const theme = useTheme();
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
        <div>
          <Button style={global} href='/'>
            Kevin Passaglia
          </Button>
        </div>
        <div>
          <Button
            display={{xs: 'none', sm: 'block'}}
            style={linkStyle}
            href='/about'>
            about
          </Button>
          <Button style={linkStyle} href='/projects'>
            projects
          </Button>
          <Button style={linkStyle} href='/contact'>
            contact
          </Button>
        </div>
        <div>
          <IconButton
            style={global}
            aria-label='open drawer'
            edge='end'
            onClick={handleDrawerOpen}
            className={clsx(open)}>
            <MenuIcon />
          </IconButton>
        </div>
      </div>
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

        <Divider />
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
  );
}
