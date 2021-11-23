const creators=()=>{
    return(
        <div className="mt-2">

<h6 className="ml-4 pl-2">Creators</h6>

<div class="form-check">
  <label class="form-check-label">
  <i class="fas ml-3 mr-3 fa-table"></i>
  All
    <input type="radio" class="form-check-input ml-5" name="creators"/>
  </label>
</div>

<div class="form-check">
  <label class="form-check-label">
  <i class="fab fa-youtube ml-3 mr-3"></i>
  Youtube
    <input type="radio" class="form-check-input ml-5" name="creators"/>
  </label>
</div>

<div class="form-check">
  <label class="form-check-label">
  <i class="fab fa-tiktok ml-3 mr-3"></i>
  Tiktok
    <input type="radio" class="form-check-input ml-5" name="creators"/>
  </label>
</div>



<hr/>

</div>
    )
}

export default creators