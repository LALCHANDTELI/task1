const chain=()=>{
    return(
        <div className="mt-2">

<h6 className="ml-4 pl-2">Chain</h6>

<div className="form-check">
  <label className="form-check-label">
  <i className="fas fa-arrows-alt-v  ml-3 mr-3"></i>
  Ethereum
    <input type="radio" className="form-check-input ml-5" name="chain"/>
  </label>
</div>

<div className="form-check">
  <label className="form-check-label">
  <i className="fas ml-3 mr-3 fa-dollar-sign"></i>
  USD
    <input type="radio" className="form-check-input ml-5" name="chain"/>
  </label>
</div>





<hr/>

</div>
    )
}

export default chain