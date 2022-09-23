import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, FormControl, Button, Typography } from '@mui/material'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  parent: {
    height: '89%',
    position: 'absolute',
    left: '0',
    width: '100%',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '500px'
  },
  button: {
    backgroundColor: '#5a471c !important',
    borderRadius: '20px !important',
    width: '100px',
    alignSelf: 'center'
  },
  form: {
    width: '300px'
  },
  input: {
    marginBottom: '20px !important',
    [`& fieldset`]: {
      borderColor: '#5a471c !important',
      borderRadius: '20px'
    },
    [`& label`]: {
      color: '#5a471c !important'
    }
  },
  heading: {
    color: '#5a471c',
    alignSelf: 'center',
    marginBottom: '20px !important'
  },
  addIcon: {
    color: '#5a471c !important',
    fontSize: '50px !important',
    alignSelf: 'center',
    marginBottom: '10px'
  },
  login: {
    alignSelf: 'center',
    color: '#5a471c',
    fontSize: '13px !important',
    marginBottom: '10px !important'
  },
  loginLink: {
    alignSelf: 'center',
    textDecoration: 'none'
  }
}))

const Signup = () => {
  const classes = useStyles()
  return (
    <div className={classes.parent}>
      <div className={classes.container}>
        <FormControl className={classes.form}>
          <PersonAddIcon className={classes.addIcon} color='primary' />
          <Typography className={classes.heading} variant='h6'>
            SIGN UP
          </Typography>
          <TextField
            className={classes.input}
            id='outlined-basic'
            label='Name'
            variant='outlined'
            size='small'
          />
          <TextField
            className={classes.input}
            id='outlined-basic'
            label='Email'
            variant='outlined'
            size='small'
          />
          <TextField
            className={classes.input}
            id='outlined-basic'
            label='Password'
            variant='outlined'
            size='small'
          />
          <Link to='/Login' className={classes.loginLink}>
            <Typography variant='body2' className={classes.login}>
              Already have an account? Login here
            </Typography>
          </Link>
          <Button
            className={classes.button}
            variant='contained'
            color='primary'
          >
            Register
          </Button>
        </FormControl>
      </div>
    </div>
  )
}

export default Signup
