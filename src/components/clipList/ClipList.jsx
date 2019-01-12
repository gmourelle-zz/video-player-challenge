import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardActionArea,
  GridList,
  GridListTile,
  GridListTileBar
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Clip from '../clip/Clip';
import { urlVideo, indexFullVideo } from '../../constants';
import { styles } from './styles';

const ClipList = ({ clips, onSelect, classes }) => {
  ClipList.defaultProps = {
    clips: []
  };
  const play = () => {
    onSelect({ id: indexFullVideo, clipFormatted: urlVideo });
  };

  return (
    <div className={classes.root}>
      <GridList cellHeight={200} cols={2} className={classes.gridList}>
        <GridListTile>
          <Card className={classes.card}>
            <CardActionArea onClick={play}>
              <PlayArrowIcon className={classes.playIcon} />
            </CardActionArea>
          </Card>
          <GridListTileBar title={'Full video'} />
        </GridListTile>
        {clips.map(clip => (
          <GridListTile key={clip.id}>
            <Clip clip={clip} onSelect={onSelect} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

ClipList.propTypes = {
  onSelect: PropTypes.func.isRequired,
  clips: PropTypes.array.isRequired
};

export default withStyles(styles)(ClipList);
