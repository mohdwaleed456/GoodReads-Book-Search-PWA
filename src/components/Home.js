import React, { useState, useEffect } from 'react'
import Image from 'mui-image'
import home from '../assets/home.png'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, Autocomplete, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { xml2json } from 'xml-js'
import { BookAction } from '../actions'
import { useLocation } from 'react-router-dom'

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
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#5a471c !important',
    borderRadius: '20px !important'
  },
  form: {
    width: '300px'
  },
  input: {},
  heading: {
    alignSelf: 'center'
  },

  image: {
    width: '350px !important',
    height: 'auto !important',
    marginBottom: '30px',
    '@media (max-width: 600px)': {
      width: '250px !important'
    }
  },
  autocomplete: {
    marginRight: '10px',
    [`& fieldset`]: {
      borderRadius: '20px',
      borderColor: '#5a471c !important'
    },
    [`& label`]: {
      color: '#5a471c !important'
    },
    '@media (max-width: 600px)': {
      width: '320px !important'
    }
  },
  innerContainer: {
    display: 'flex'
  },
  SearchLink: {
    textDecoration: 'none',
    color: 'white !important'
  }
}))

const Home = () => {
  const location = useLocation()
  const data = location.state
  const [value, setValue] = useState('')
  const books = useSelector(state => state.StoreBooks)
  const dispatch = useDispatch()
  const classes = useStyles()

  const handleChange = (event, value) => {
    let finalValue = value ? value : event.target.value
    setValue(finalValue)
  }

  const handleClick = e => {
    if (!value) e.preventDefault()
  }

  const getAllBooks = () => {
    axios
      .get(
        `https://www.goodreads.com/search/index.xml?key=FtRVHgmjzjpzKjCt3SUMw&q=${value}`
      )
      .then(response => {
        let json = xml2json(response.data)
        console.log(obj)
        let obj = JSON.parse(json)
        let abc = obj['elements']
        let abcd = abc[0].elements
        let abcde = abcd.map(a => a.elements)
        let bcd = abcde[1]
        let bcde = bcd[6]
        let bcdef = bcde['elements']
        let value = bcdef.map(a => a['elements'])
        let value1 = value.map(a => a[8])
        let value2 = value1.map(a => a['elements'])
        let value3 = value2.map(a => a[1])
        let value4 = value3.map(a => a['elements'])
        let value5 = value4.map(a => a[0]['text'])
        dispatch(BookAction(value5))
      })
      .catch(error => {
        const errorMsg = error.message
        console.log(errorMsg)
      })
  }

  useEffect(() => {
    getAllBooks()
  }, [value])

  let allbooks = books['books']

  return (
    <div className={classes.parent}>
      <div className={classes.container}>
        <Image className={classes.image} src={home} />
        <div className={classes.innerContainer}>
          <Autocomplete
            onChange={handleChange}
            size='small'
            disablePortal
            autoSelect={true}
            className={classes.autocomplete}
            id='combo-box-demo'
            options={allbooks}
            sx={{ width: 500 }}
            renderInput={params => (
              <TextField
                {...params}
                label='Search the Books'
                onChange={handleChange}
              />
            )}
          />
          <Link
            to={'/Books'}
            state={value}
            className={classes.SearchLink}
            onClick={handleClick}
          >
            <Button
              className={classes.button}
              variant='contained'
              color='primary'
            >
              Search
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
