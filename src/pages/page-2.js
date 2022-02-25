import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const PageTwo = () => {
  return (
    <>
      <h1>Welcome to Page Two</h1>
      <Link to="/home">Home</Link>
      <br/>
      <Link to="/page-1" className="ml-3">Page_One</Link>
    </>
  )
}

export default PageTwo
