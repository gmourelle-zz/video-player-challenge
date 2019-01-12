import { actionTypes } from '../actions';
import uuid from 'uuid';
import { omit } from 'ramda';
import { getNextClip } from '../../utils';

const videoReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SUBMIT_CLIP:
      const clip = { ...action.payload, id: uuid.v4() };
      return {
        ...state,
        clips: { ...state.clips, [clip.id]: clip }
      };
    case actionTypes.EDIT_CLIP:
      return {
        ...state,
        clips: { ...state.clips, [action.payload.id]: action.payload }
      };
    case actionTypes.DELETE_CLIP:
      return { ...state, clips: omit([action.payload.id], state.clips) };
    case actionTypes.CLIP_SELECTED:
      return {
        ...state,
        clipSelected: action.payload.clipFormatted,
        nextClip: getNextClip(action.payload.id, Object.values(state.clips))
      };
    default:
      return state;
  }
};
export default videoReducer;
