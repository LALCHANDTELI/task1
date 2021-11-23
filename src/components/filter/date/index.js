const date=()=>{
    return(
        <div className="mt-2">

<h6 className="ml-4 p">Date</h6>

<div class="form-check">
  <label class="form-check-label">
  <i class="fas ml-3 mr-3 fa-calendar"></i>
  Any
    <input type="radio" class="form-check-input ml-5" name="date"/>
  </label>
</div>

<div class="form-check">
  <label class="form-check-label">
  <i class="fas  ml-3 mr-3 fa-calendar-alt"></i>
  This Week
    <input type="radio" class="form-check-input ml-5" name="date"/>
  </label>
</div>

<div class="form-check">
  <label class="form-check-label">
  <i class="fas ml-3 mr-3 fa-calendar-day"></i>
  Last 30 Days
    <input type="radio" class="form-check-input ml-5" name="date"/>
  </label>
</div>

<div class="form-check">
  <label class="form-check-label">
  <i class="far  ml-3 mr-3 fa-calendar"></i>
  Custom
    <input type="radio" class="form-check-input ml-5" name="date"/>
  </label>
</div>



<hr/>

</div>
    )
}

export default date