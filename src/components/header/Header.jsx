import React, { Component } from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Form } from '../form';
import { styles } from './styles';
class Header extends Component {
  state = {
    open: false,
    action: ''
  };

  handleClickOpenDialog = () => {
    this.setState({ open: true, action: 'CREATE' });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const {
      state: { open, action },
      props: { classes },
      handleClickOpenDialog,
      onSubmit,
      handleClose
    } = this;

    return (
      <AppBar position="static">
        <Toolbar className={classes.root}>
          <Button
            onClick={handleClickOpenDialog}
            variant="contained"
            color={classes.button}
          >
            Create new clip
          </Button>
        </Toolbar>
        <Form
          open={open}
          onSubmit={onSubmit}
          action={action}
          onClose={handleClose}
        />
      </AppBar>
    );
  }
}
export default withStyles(styles)(Header);
