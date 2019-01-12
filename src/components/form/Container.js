import { connect } from 'react-redux';
import { submitClip, editClip, deleteClip } from '../../redux/actions';
import Form from './Form';

export default connect(
  null,
  { submitClip, editClip, deleteClip }
)(Form);
