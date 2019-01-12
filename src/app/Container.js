import { connect } from 'react-redux';
import { selectClip } from '../redux/actions';
import { getClips, clipSelected, nextClip } from '../redux/selectors';
import App from './App';

const mapStateToProps = state => ({
  clips: getClips(state),
  clipSelected: clipSelected(state),
  nextClip: nextClip(state)
});

export default connect(
  mapStateToProps,
  { selectClip }
)(App);
