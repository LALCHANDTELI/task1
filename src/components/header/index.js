import search from "./search/index";
import navs from "./navs/index"
import banner from "./banner/index"
import "../../style.css"

const index = () => {
  return (
    <div>

      <nav class="navbar navbar-expand-lg text-dark  navbar-transparent container fixed-top">
  <a class="navbar-brand" href="#"> <h5>NFTBOOK.IO</h5></a>
  <button class="navbar-toggler bg-secondary" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
  <i class="fas fa-bars"></i>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
    <li class="nav-item">{search()}</li>
       {navs()}
    </ul>
  </div>  
</nav>

{banner()}
    </div>
  );
};

export default index;
