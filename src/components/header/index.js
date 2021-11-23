import search from "./search/index";
import navs from "./navs/index"
import banner from "./banner/index"
import "../../style.css"

const index = () => {
  return (
    <div>
      <nav class="navbar container navbar-expand-sm text-dark  navbar-transparent fixed-top">
        <a class="navbar-brand" href="#">
            <h5>NFTBOOK.IO</h5>
        </a>
        
        <ul class="navbar-nav">
          <li class="nav-item">{search()}</li>
          {navs()}
        </ul>
      </nav>


      {banner()}
    </div>
  );
};

export default index;
