import React, { useState, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, FormControl, Button, Typography } from '@mui/material'
import LockOpenIcon from '@mui/icons-material/LockOpen'
import { LoginStatus } from '../actions'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

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
  lockIcon: {
    color: '#5a471c !important',
    fontSize: '50px !important',
    alignSelf: 'center',
    marginBottom: '10px'
  },
  signup: {
    alignSelf: 'center',
    color: '#5a471c',
    fontSize: '13px !important',
    //marginTop: 'px !important',
    marginBottom: '10px !important'
  },
  loginLink: {
    alignSelf: 'center',
    textDecoration: 'none'
  }
}))

const Login = () => {
  const [email, setEmail] = useState('')
  // console.log(email)
  const [password, setPassword] = useState('')
  // const [name, setName] = useState('')

  const dispatch = useDispatch()
  const reference = useRef(false)
  const users = useSelector(state => state.Signin)

  const classes = useStyles()
  const navigate = useNavigate()

  const handleEmail = event => {
    setEmail(event.target.value)
  }
  const handlePassword = event => {
    setPassword(event.target.value)
  }

  const handleClick = () => {
    try {
      let e = users.find(o => o.email === email)
      let p = users.find(o => o.password === password)
      if (email === e['email'] && password === p['password']) {
        
        navigate('/')
      }
    } catch (err) {
      reference.current = false

      console.log(err)
      if (!email) {
        toast.error('Please enter your email!', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
      } else if (!password) {
        toast.error('Please enter your password!', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
      } else {
        toast.error('Your email or password is incorrect!', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
      }
    }
  }

  // const handleClick = () =>{
  //   navigate('/')
  // }

 
  const handleKeypress = e => {
    //it triggers by pressing the enter key
    if (e.key === 'Enter') {
      handleClick()
    }
  }
  return (
    <div className={classes.parent}>
      <div className={classes.container}>
        <FormControl className={classes.form}>
          <LockOpenIcon className={classes.lockIcon} color='primary' />
          <Typography className={classes.heading} variant='h6'>
            LOGIN
          </Typography>

          <TextField
            className={classes.input}
            id='outlined-basic'
            label='Email'
            variant='outlined'
            size='small'
            value={email}
            onChange={handleEmail}
            onKeyDown={handleKeypress}
          />
          <TextField
            className={classes.input}
            id='outlined-basic'
            label='Password'
            variant='outlined'
            size='small'
            value={password}
            onChange={handlePassword}
            onKeyDown={handleKeypress}
          />
          {/* <Link to="/Signup" className={classes.signupLink}>
          <Typography variant="body2" className={classes.signup}>
           Don't have an account? Signup here
          </Typography>
          // </Link> */}
          {/* <Link state={email} className={classes.loginLink} onClick={handleClick}  > */}
          <Button
            className={classes.button}
            variant='contained'
            color='primary'
            onClick={handleClick}
          >
            Sign in
          </Button>
          {/* </Link> */}
        </FormControl>
        <ToastContainer
          position='top-center'
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  )
}

export default Login
