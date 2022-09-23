import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Link, useLocation } from 'react-router-dom'
// import Pagination from '@mui/material/Pagination'
// import Stack from '@mui/material/Stack'
import { xml2json } from 'xml-js'
import axios from 'axios'
import { BookList } from '../actions'
import { useSelector, useDispatch } from 'react-redux'
import book from '../assets/book.png'
import InfiniteScroll from 'react-infinite-scroll-component'

const useStyles = makeStyles(theme => ({
  parent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    flexDirection: 'column'
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  listItem: {
    border: '1px solid grey',
    borderRadius: '5px',
    // listStyleType: 'disc'
    marginBottom: '5px',
    width: 'fit-content',
    blockSize: 'fit-content',
    listStyleImage: `url(${book})`
  },
}))

const Books = () => {
  const location = useLocation()
  const data = location.state
  console.log(location)
  const [state, setState] = useState(data)
  const [book, setBook] = useState([])
  // const [loading, setLoading] = useState(true)
  console.log(data)
  const [page, setPage] = React.useState(1)
  const books = useSelector(state => state.BookList.books)
  const dispatch = useDispatch()
  const classes = useStyles()
  dispatch(BookList(book))
  console.log(book)
  // const allbooks = books['books']
  // const observer = useRef()
  // const lastBookElementRef = useCallback(node =>{
  //   console.log(node)
  //    if(loading) return
  //   if(observer.current) observer.current.disconnect()
  //   observer.current = new IntersectionObserver(entries=>{
  //     if(entries[0].isIntersecting){
  //       console.log('visible')
  //     }
  //   })
  //   if(node) observer.current.observe(node)
  //   // observer.current = new IntersectionObserver(entries=>{
  //   //   if(entries[0].isIntersecting){
  //   //     console.log('visible')
  //   //   }
  //   // })
  // } )
  // const handleChange = (event, value) => {
  //   setPage(value)
  // }

  const getAllBooks = async () => {
    // setLoading(true)
    axios
      .get(
        `https://www.goodreads.com/search/index.xml?key=FtRVHgmjzjpzKjCt3SUMw&q=${state}+&page=${page}`
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
        let value3 = value2.map(a => a[1])
        let value4 = value3.map(a => a['elements'])
        let value5 = value4.map(a => a[0]['text'])
        const merge = [...books, ...value5]
        setBook(merge)
      })
      .catch(error => {
        const errorMsg = error.message
        console.log(errorMsg)
      })
  }
  useEffect(() => {
    getAllBooks()
    // fetchMoreData()
  }, [state, page, book])

  console.log(books.length)

  const fetchMoreData = () => {
    setPage(prev => prev + 1)
    getAllBooks()
  }
  return (
    <div className={classes.parent}>
      <div>
        <InfiniteScroll
          dataLength={books.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          <ol>
            {books.map((item, i) => (
              <Link to={'/SingleBook'} state={item}>
                <li className={classes.listItem} key={i}>
                  {item}
                </li>
              </Link>
            ))}
          </ol>
        </InfiniteScroll>

        {/* <div>{loading && 'Loading.....'}</div> */}
      </div>
      <div>
        {/* <Stack spacing={2}>
          <Pagination
            count={10}
            page={page}
            shape='rounded'
            variant='outlined'
            onChange={handleChange}
          />
        </Stack> */}
      </div>
    </div>
  )
}

export default Books

// if(loading) return
// if(observer.current) observer.current.disconnect()
// // observer.current = new IntersectionObserver(entries=>{
// //   if(entries[0].isIntersecting){
// //     console.log('visible')
// //   }
// // })
// if(node) observer.current.observe(node)
