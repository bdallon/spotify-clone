import React from "react";
import "./Footer.css";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { Grid, Slider } from "@mui/material";

function Footer() {
  return (
    <div className='footer'>
      <div className='footer_left'>
        <img src='' alt='' className='footer_albumlogo' />
        <div className='footer_songinfo'>
          <h4>Yeah!</h4>
          <p>Usher</p>
        </div>
      </div>
      <div className='footer_center'>
        <ShuffleIcon className='footer_green' />
        <SkipPreviousIcon className='footer_icon' />
        <PlayCircleIcon fontSize='large' className='footer_icon' />
        <SkipNextIcon className='footer_icon' />
        <RepeatIcon className='footer_green' />
      </div>
      <div className='footer_right'>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs={4}>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
