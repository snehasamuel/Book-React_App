import React from 'react'
import Navigation from './Navigation'

const Viewbook = () => {
    var booklist={
        "title":"Christmas Carol",
"Author":"Charles Dickens",
"Price":"300"
}
  return (
    <div>
        <Navigation/>

        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
           <label className='form-label'>Book Title : </label>

            {booklist.title}
        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label className='form-label'>Author : </label>
            {booklist.Author}
        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label className='form-label'>Price :</label>
            {booklist.Price}
        </div>
    </div>
</div>

    </div>
  )
}

export default Viewbook