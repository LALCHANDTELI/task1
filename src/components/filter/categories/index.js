const categories=()=>{
    return(
        <div className="mt-2">

<h6 className="ml-4 pl-2">Categories</h6>

<div className="form-check">
  <label className="form-check-label">
  <i className="fas ml-3 mr-3 fa-gamepad"></i>
  Gaming
    <input type="radio" className="form-check-input ml-5" name="categories"/>
  </label>
</div>

<div className="form-check">
  <label className="form-check-label">
  <i className="fas ml-3 mr-3  fa-video"></i>
  Entertainment
    <input type="radio" className="form-check-input ml-5" name="categories"/>
  </label>
</div>

<div className="form-check">
  <label className="form-check-label">
  <i className="fas ml-3 mr-3 fa-tshirt"></i>
  Fashion
    <input type="radio" className="form-check-input ml-5" name="categories"/>
  </label>
</div>

<div className="form-check">
  <label className="form-check-label">
  <i className="fas ml-3 mr-3 fa-music"></i>
  Music
    <input type="radio" className="form-check-input ml-5" name="categories"/>
  </label>
</div>

<div className="form-check">
  <label className="form-check-label">
  <i className="fas ml-3 mr-3 fa-pizza-slice"></i>
  Food
    <input type="radio" className="form-check-input ml-5" name="categories"/>
  </label>
</div>

<div className="form-check">
  <label className="form-check-label">
  <i className="fas ml-3 mr-3 fa-car"></i>
  Travel
    <input type="radio" className="form-check-input ml-5" name="categories"/>
  </label>
</div>

<hr/>

</div>
    )
}

export default categories