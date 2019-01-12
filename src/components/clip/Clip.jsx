import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardActionArea,
  IconButton,
  GridListTileBar,
  Popover,
  Button
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { Form } from '../form';
import { formatSource } from '../../utils';
import { styles } from './styles';

class Clip extends Component {
  state = {
    anchorEl: null,
    open: false,
    action: ''
  };

  openDialogEdit = () => {
    this.setState({ open: true, action: 'EDIT' });
  };

  openDialogDelete = () => {
    this.setState({ open: true, action: 'DELETE' });
  };

  handleCloseDialog = () => {
    this.setState({ open: false });
  };

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null
    });
  };

  onSelect = () => {
    const clipFormatted = formatSource(
      this.props.clip.startTime,
      this.props.clip.endTime
    );
    this.props.onSelect({ id: this.props.clip.id, clipFormatted });
  };

  renderDialog = () => {
    const {
      props: { clip },
      state: { open, action },
      handleCloseDialog
    } = this;

    return (
      <Form
        onClose={handleCloseDialog}
        action={action}
        clip={clip}
        open={open}
      />
    );
  };
  renderPopover = () => {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <Popover
        id="simple-popper"
        open={open}
        anchorEl={anchorEl}
        onClose={this.handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
      >
        <div className={classes.containerButtons}>
          <Button onClick={this.openDialogEdit}>Edit</Button>
          <Button onClick={this.openDialogDelete}>Delete</Button>
        </div>
      </Popover>
    );
  };

  render() {
    const { clip, classes } = this.props;

    return (
      <Fragment>
        <Card>
          <CardActionArea onClick={this.onSelect}>
            <PlayArrowIcon className={classes.playIcon} />
          </CardActionArea>
        </Card>
        <GridListTileBar
          title={clip.name}
          classes={{
            root: classes.titleBar,
            title: classes.title
          }}
          actionIcon={
            <IconButton onClick={this.handleClick}>
              <MoreVertIcon />
            </IconButton>
          }
        />
        {this.renderPopover()}
        {this.renderDialog()}
      </Fragment>
    );
  }
}

Clip.propTypes = {
  onSelect: PropTypes.func.isRequired,
  clip: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    startTime: PropTypes.string,
    endTime: PropTypes.string
  })
};

export default withStyles(styles)(Clip);
