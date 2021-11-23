const chain=()=>{
    return(
        <div className="mt-2">

<h6 className="ml-4 pl-2">Chain</h6>

<div class="form-check">
  <label class="form-check-label">
  <i class="fas fa-arrows-alt-v  ml-3 mr-3"></i>
  Ethereum
    <input type="radio" class="form-check-input ml-5" name="chain"/>
  </label>
</div>

<div class="form-check">
  <label class="form-check-label">
  <i class="fas ml-3 mr-3 fa-dollar-sign"></i>
  USD
    <input type="radio" class="form-check-input ml-5" name="chain"/>
  </label>
</div>





<hr/>

</div>
    )
}

export default chain