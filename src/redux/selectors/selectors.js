export const getClips = state => Object.values(state.videoPlayer.clips);
export const clipSelected = state => state.videoPlayer.clipSelected;
export const nextClip = state => state.videoPlayer.nextClip;
