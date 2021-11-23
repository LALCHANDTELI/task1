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




         
        </div>
    )
}


export default index
