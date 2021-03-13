import React from 'react';
import {makeStyles} from '@material-ui/core/styles';



const useStyles = makeStyles({
  box:{
    position:"relative",
    border:"1px solid #000",
    borderRadius:5,
    width:140,
    height:62
  },
  box_text:{
    position: "relative",
    left: 60
  },
});

export default function Main() {
  const classes = useStyles();

  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
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
