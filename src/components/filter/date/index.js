const date=()=>{
    return(
        <div className="mt-2">

<h6 className="ml-4 p">Date</h6>

<div className="form-check">
  <label className="form-check-label">
  <i className="fas ml-3 mr-3 fa-calendar"></i>
  Any
    <input type="radio" className="form-check-input ml-5" name="date"/>
  </label>
</div>

<div className="form-check">
  <label className="form-check-label">
  <i className="fas  ml-3 mr-3 fa-calendar-alt"></i>
  This Week
    <input type="radio" className="form-check-input ml-5" name="date"/>
  </label>
</div>

<div className="form-check">
  <label className="form-check-label">
  <i className="fas ml-3 mr-3 fa-calendar-day"></i>
  Last 30 Days
    <input type="radio" className="form-check-input ml-5" name="date"/>
  </label>
</div>

<div className="form-check">
  <label className="form-check-label">
  <i className="far  ml-3 mr-3 fa-calendar"></i>
  Custom
    <input type="radio" className="form-check-input ml-5" name="date"/>
  </label>
</div>



<hr/>

</div>
    )
}

export default date