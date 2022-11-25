import {makeStyles} from '@material-ui/core';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar:{
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 30px 10px 30px'
  },
  heading:{
    color: 'rgba(0,183, 255, 1)',
    textDecoration: 'none',
    justifyContent: 'flex',
    cursor: 'pointer'
  },
  image:{
    marginLeft: '15px',
    // justifyContent: 'flex-end',
  },
  toolbar: {
      display: 'flex',
      justifyContent: 'flex-end',
      width: '400px'
  },
  profile: {
    display: 'flex',
    justifyContent: 'center',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500]
  },

  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: 'colum-reverse'
    }
  }
}));