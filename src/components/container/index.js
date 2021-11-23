import React from 'react'
import users from './users'
import "../../style.css"

const index = () => {
    return (
        <div>



<table class="table table-transparent table-hover">
    <thead>
      <tr>
        <th>Rank</th>
        <th>Creator</th>
        <th>Volume</th>
        <th>24h %</th>
        <th>7d %</th>
        <th>Owners</th>
        <th>Listings</th>
      </tr>
    </thead>
    <tbody>
      {users()}
    </tbody>
  </table>



  <ul class="pagination justify-content-center">
    <li class="page-item"><a class="page-link" ><i class="fas fa-arrow-circle-left"></i></a></li>
    <li class="page-item"><a class="page-link" >1</a></li>
    <li class="page-item"><a class="page-link" >2</a></li>
    <li class="page-item"><a class="page-link" >3</a></li>
    <li class="page-item"><a class="page-link" ><i class="fas fa-arrow-circle-right"></i></a></li>
  </ul>





        </div>
    )
}


export default index
