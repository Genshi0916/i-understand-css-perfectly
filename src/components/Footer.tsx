import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      top: 'auto',
      bottom: 0,
    },
    grow: {
      flexGrow: 1,
    },
    text: {
      padding: theme.spacing(0.5),
    }
  }),
);

export default function BottomAppBar() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" style={{ backgroundColor: "#44bc84" }} className={classes.appBar}>
      <Toolbar>
        <div className={classes.grow} />
        <MailOutlineIcon />
        <div className={classes.text}>genshi0916@gmail.com</div>
      </Toolbar>
    </AppBar>
  );
}
