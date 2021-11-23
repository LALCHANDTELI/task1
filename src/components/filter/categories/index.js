const categories=()=>{
    return(
        <div className="mt-2">

<h6 className="ml-4 pl-2">Categories</h6>

<div class="form-check">
  <label class="form-check-label">
  <i class="fas ml-3 mr-3 fa-gamepad"></i>
  Gaming
    <input type="radio" class="form-check-input ml-5" name="categories"/>
  </label>
</div>

<div class="form-check">
  <label class="form-check-label">
  <i class="fas ml-3 mr-3  fa-video"></i>
  Entertainment
    <input type="radio" class="form-check-input ml-5" name="categories"/>
  </label>
</div>

<div class="form-check">
  <label class="form-check-label">
  <i class="fas ml-3 mr-3 fa-tshirt"></i>
  Fashion
    <input type="radio" class="form-check-input ml-5" name="categories"/>
  </label>
</div>

<div class="form-check">
  <label class="form-check-label">
  <i class="fas ml-3 mr-3 fa-music"></i>
  Music
    <input type="radio" class="form-check-input ml-5" name="categories"/>
  </label>
</div>

<div class="form-check">
  <label class="form-check-label">
  <i class="fas ml-3 mr-3 fa-pizza-slice"></i>
  Food
    <input type="radio" class="form-check-input ml-5" name="categories"/>
  </label>
</div>

<div class="form-check">
  <label class="form-check-label">
  <i class="fas ml-3 mr-3 fa-car"></i>
  Travel
    <input type="radio" class="form-check-input ml-5" name="categories"/>
  </label>
</div>

<hr/>

</div>
    )
}

export default categories