import React, { Fragment } from 'react';
import { Grid } from '@material-ui/core';
import { Header, VideoPlayer, ClipList } from '../components';

const App = ({ clips, selectClip, clipSelected, nextClip, updateNextClip }) => (
  <Fragment>
    <Header />
    <Grid container spacing={16}>
      <Grid item xs={6}>
        <VideoPlayer
          source={clipSelected}
          OnUpdateNextClip={updateNextClip}
          nextClip={nextClip}
          clips={clips}
        />
      </Grid>
      <Grid item xs={6}>
        <h2>Lista de clips</h2>
        <ClipList clips={clips} onSelect={selectClip} />
      </Grid>
    </Grid>
  </Fragment>
);

export default App;
