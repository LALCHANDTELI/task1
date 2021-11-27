const creators=()=>{
    return(
        <div className="mt-2">

<h6 className="ml-4 pl-2">Creators</h6>

<div className="form-check">
  <label className="form-check-label">
  <i className="fas ml-3 mr-3 fa-table"></i>
  All
    <input type="radio" className="form-check-input ml-5" name="creators"/>
  </label>
</div>

<div className="form-check">
  <label className="form-check-label">
  <i className="fab fa-youtube ml-3 mr-3"></i>
  Youtube
    <input type="radio" className="form-check-input ml-5" name="creators"/>
  </label>
</div>

<div className="form-check">
  <label className="form-check-label">
  <i className="fab fa-tiktok ml-3 mr-3"></i>
  Tiktok
    <input type="radio" className="form-check-input ml-5" name="creators"/>
  </label>
</div>



<hr/>

</div>
    )
}

export default creators