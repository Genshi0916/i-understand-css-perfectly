import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  box:{
    position:"relative",
    border:"1px solid #000",
    borderRadius:7.5,
    width:210,
    height:93
  },
  box_text:{
    position: "relative",
    left: 90,
    fontSize:22
  },
});



export default function Main() {
  const classes = useStyles();
  return (
    <div
      style={{
        position: 'absolute',
        left: '30%',
        top: '45%',
        transform: 'translate(-50%, 0%)'
      }}
    >
      <div className={classes.box}>
        <p className={classes.box_text}>
          CSS<br/>
          完全に理解した
        </p>
      </div>
    </div>
  );
}
