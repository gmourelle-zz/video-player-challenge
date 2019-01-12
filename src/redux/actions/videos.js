import { actionTypes } from './actionTypes';

export const submitClip = payload => ({
  type: actionTypes.SUBMIT_CLIP,
  payload
});

export const editClip = payload => ({
  type: actionTypes.EDIT_CLIP,
  payload
});
export const deleteClip = payload => ({
  type: actionTypes.DELETE_CLIP,
  payload
});
export const selectClip = clip => ({
  type: actionTypes.CLIP_SELECTED,
  payload: clip
});
export const updateNextClip = payload => ({
  type: actionTypes.UPDATE_NEXT_CLIP,
  payload: payload
});
