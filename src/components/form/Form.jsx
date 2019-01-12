import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { TextField, Button, Dialog } from '@material-ui/core';
import { formActions } from '../../constants';
import { styles } from './styles';

class Form extends Component {
  state = {
    id: '',
    name: '',
    startTime: '',
    endTime: ''
  };

  componentDidMount() {
    this.setState({
      id: this.props.clip ? this.props.clip.id : '',
      name: this.props.clip ? this.props.clip.name : '',
      startTime: this.props.clip ? this.props.clip.startTime : '',
      endTime: this.props.clip ? this.props.clip.endTime : ''
    });
  }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleCancel = event => {
    event.preventDefault();
    this.props.onClose();
  };

  handleSubmit = e => {
    e.preventDefault();

    switch (this.props.action) {
      case formActions.FORM_ACTION_CREATE:
        this.props.submitClip(this.state);
        this.setState({
          id: '',
          name: '',
          startTime: '',
          endTime: ''
        });
        this.props.onClose();
        break;
      case formActions.FORM_ACTION_EDIT:
        this.props.editClip(this.state);
        this.props.onClose();
        break;
      case formActions.FORM_ACTION_DELETE:
        this.props.deleteClip(this.state);
        this.props.onClose();
        break;
      default:
        break;
    }
  };

  render() {
    const {
      props: { classes, action, open },
      state: { name, startTime, endTime },
      handleInputChange,
      handleSubmit
    } = this;

    return (
      <Dialog open={open} aria-labelledby="responsive-dialog-title">
        <form autoComplete="off">
          <div className={classes.containerInputs}>
            <TextField
              required={true}
              autoFocus={true}
              id="outlined-required"
              label="Name"
              name="name"
              value={name}
              onChange={handleInputChange}
              margin="normal"
              variant="outlined"
              className={classes.textField}
              disabled={action === formActions.FORM_ACTION_DELETE}
            />

            <TextField
              id="outlined-name"
              label="Start Time*"
              value={startTime}
              name="startTime"
              onChange={handleInputChange}
              margin="normal"
              variant="outlined"
              className={classes.textField}
              disabled={action === formActions.FORM_ACTION_DELETE}
              type="number"
            />
            <TextField
              id="outlined-name"
              label="End Time"
              value={endTime}
              name="endTime"
              onChange={handleInputChange}
              margin="normal"
              variant="outlined"
              className={classes.textField}
              disabled={action === formActions.FORM_ACTION_DELETE}
              type="number"
              required={true}
            />
          </div>
          <div className={classes.containerButtons}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={handleSubmit}
              disabled={!name || !startTime}
            >
              {action}
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={this.handleCancel}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Dialog>
    );
  }
}

Form.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default withStyles(styles)(Form);
