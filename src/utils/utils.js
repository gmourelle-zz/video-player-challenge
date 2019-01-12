import { urlVideo } from '../constants';
import { findIndex, propEq } from 'ramda';
import { indexFullVideo } from '../constants';
export const formatSource = (startTime = '', endTime) => {
  if (!endTime || endTime === '') {
    return `${urlVideo}#t=${startTime}`;
  }
  return `${urlVideo}#t=${startTime},${endTime}`;
};

export const getNextClip = (id, clips) => {
  let nextClip = {};
  if (id === indexFullVideo) {
    if (clips.length > 0) {
      nextClip = clips[0];
    }
  } else {
    const index = findIndex(propEq('id', id))(clips);

    if (index > -1) {
      nextClip = clips[index + 1];
    }
  }
  return nextClip;
};
