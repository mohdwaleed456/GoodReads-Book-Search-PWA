import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  loginLink: {
    textDecoration: 'none',
    color: 'white !important'
  },
  loginBtn: {
    // borderRadius: '10px !important',
    marginLeft: '20px',
    color: 'white',
    backgroundColor: '#766335',
    // eslint-disable-next-line
    ['&:hover']: {
      backgroundColor: '#766335',
      transform: 'scale(1.01)'
    }
  },
  header: {
    backgroundColor: '#5a471c'
  }
}))

const Header = () => {
  const dispatch = useDispatch()
  const classes = useStyles()

 

  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.header}>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            <Link to='/' className={classes.loginLink}>
              {' '}
              GoodReads{' '}
            </Link>
          </Typography>
          {/* <Typography variant='body' >
              Welcome! {a}
          </Typography> */}
          <Link to='/' className={classes.loginLink}>
            <Button variant='contained' className={classes.loginBtn}>
              Home
            </Button>
          </Link>
      
            <Link to='/Login' className={classes.loginLink}>
              <Button variant='contained' className={classes.loginBtn}>
                Login
              </Button>
            </Link>

        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
