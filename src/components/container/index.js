import React from 'react'
import users from './users'
import "../../style.css"

const index = () => {
    return (
        <div>

{users()}



  <ul className="pagination justify-content-center">
    <li className="page-item"><a title=" previous" href="/#" className="page-link" ><i className="fas fa-arrow-circle-left"></i></a></li>
    <li className="page-item"><a href="/#" className="page-link" >1</a></li>
    <li className="page-item"><a href="/#" className="page-link" >2</a></li>
    <li className="page-item"><a href="/#" className="page-link" >3</a></li>
    <li className="page-item"><a title="next" href="/#" className="page-link" ><i className="fas fa-arrow-circle-right"></i></a></li>
  </ul>





        </div>
    )
}


export default index
