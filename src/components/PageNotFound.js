import { Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import error404 from '../assets/error404.png'
import Image from 'mui-image'

const useStyles = makeStyles(theme => ({
  parent: {
    height: '89%',
    position: 'absolute',
    left: '0',
    width: '100%',
    overflow: 'hidden',
    display: 'flex',
    // flexDirection: 'column !important',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center'
    // width: "500px",
  },
  heading: {
    color: '#5a471c'
  },
  img: {
    width: '200px !important',
    height: 'auto !important'
  }
}))
const PageNotFound = () => {
  const classes = useStyles()

  return (
    <div className={classes.parent}>
      <div className={classes.container}>
        <Image className={classes.img} src={error404} />
        <Typography className={classes.heading} variant='h3'>
          Page Not Found!
        </Typography>
      </div>
    </div>
  )
}

export default PageNotFound
