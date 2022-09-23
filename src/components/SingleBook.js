import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import StarIcon from '@mui/icons-material/Star'
import StarHalfIcon from '@mui/icons-material/StarHalf'
import Image from 'mui-image'
import Divider from '@mui/material/Divider'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import StarBorder from '@mui/icons-material/StarBorder'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { xml2json } from 'xml-js'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BookTitle } from '../actions'
import { BookImage } from '../actions'
import { BookRating } from '../actions'
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
  image: {
    width: '120px !important',
    height: 'auto !important'
  },
  avgRating: {
    alignSelf: 'center'
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column'
  },
  bookTitle: {
    alignSelf: 'center'
  },
  stars: {
    alignSelf: 'center'
  },
  star: {
    color: 'gold'
  }
}))

// const getAllBooks = async () => {
//   axios
//     .get(
//       `https://www.goodreads.com/search/index.xml?key=FtRVHgmjzjpzKjCt3SUMw&q=harry`
//     )
//     .then(response => {
//       let json = xml2json(response.data)
//       let obj = JSON.parse(json)
//       let abc = obj['elements']
//       let abcd = abc[0].elements
//       let abcde = abcd.map(a => a.elements)
//       let bcd = abcde[1]
//       let bcde = bcd[6]
//       let bcdef = bcde['elements']
//       let value = bcdef.map(a => a['elements'])
//       let value1 = value.map(a => a[8])
//       let value2 = value1.map(a => a['elements'])
//       value2.map(a => a.splice(0, 1))
//       value2.map(a => a.splice(1, 1))
//       value2.map(a => a.splice(2, 1))
//       // const { type, ...employeeRest } = value2;

//       // let value3 = value2.map(a=> a.slice(0,1))
//       // let value4 = value2.map(a=> a.slice(1))
//       // const value5 = [...value3, ...value4 ]
//       console.log(value2)
//     })
//     .catch(error => {
//       const errorMsg = error.message
//       console.log(errorMsg)
//     })
// }

const SingleBook = () => {
  const location = useLocation()
  const [array, setArray] = useState('')
  const [rating, setRating] = useState('')
  const data = location.state
  console.log(data)
  const classes = useStyles()
  const bookTitle = useSelector(state => state.BookTitle.books)
  console.log(bookTitle)
  const bookImage = useSelector(state => state.BookImage.books)
  console.log(bookImage)
  const bookRating = useSelector(state => state.BookRating.books)
  console.log(bookRating)
  const dispatch = useDispatch()

  const getAllBooks = async () => {
    axios
      .get(
        `https://www.goodreads.com/search/index.xml?key=FtRVHgmjzjpzKjCt3SUMw&q=${data}`
      )
      .then(response => {
        let json = xml2json(response.data)
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
        value2.map(a => a.splice(0, 1))
        value2.map(a => a.splice(1, 1))
        value2.map(a => a.splice(2, 1))
        let value3 = value2[0]
        let value4 = value3[1]['elements']
        let value5 = value4['text']
        console.log(bcdef)
        setArray(value4[0].text)

        let value7 = value[0]
        console.log(value7[7].elements[0].text)
        setRating(value7[7].elements[0].text)

        dispatch(BookTitle(data))
        dispatch(BookImage(value4[0].text))
        dispatch(BookRating(value7[7].elements[0].text))
      })
      .catch(error => {
        const errorMsg = error.message
        console.log(errorMsg)
      })
  }
  useEffect(() => {
    getAllBooks()
  }, [])

  return (
    <div className={classes.parent}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent className={classes.cardContent}>
          <Typography
            variant='h5'
            component='div'
            className={classes.bookTitle}
          >
            {bookTitle}
          </Typography>
          <br />
          <Divider />
          <br />
          <Image className={classes.image} src={bookImage} />
          <br />
          <Divider />
          <br />
          <Typography variant='body2' className={classes.avgRating}>
            Avg Rating
          </Typography>
          <div className={classes.stars}>
            <StarIcon className={classes.star} />{' '}
            <StarIcon className={classes.star} />{' '}
            <StarIcon className={classes.star} />{' '}
            <StarIcon className={classes.star} />{' '}
            <StarHalfIcon className={classes.star} />
          </div>
          <Typography variant='body2' className={classes.avgRating}>
            {bookRating}
          </Typography>
          <br />
          <Typography variant='body2' className={classes.avgRating}>
            Rate It!
          </Typography>
          <div className={classes.stars}>
            <StarIcon className={classes.star} />{' '}
            <StarIcon className={classes.star} />{' '}
            <StarIcon className={classes.star} />{' '}
            <StarIcon className={classes.star} />{' '}
            <StarBorder className={classes.star} />
          </div>
          <Typography variant='body2' className={classes.avgRating}>
            4.0
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default SingleBook
