import React from 'react'

import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const PageOne = () => {
  return (
      <>
        <h1>Welcome to Page One</h1>
        <Link to="/home" >Home</Link>
        <br/>
        <Link to="/page-2" className="ml-3">Page _Two</Link>
      </>
  )
}

export default PageOne
