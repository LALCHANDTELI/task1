import search from "./search/index";
import navs from "./navs/index"
import banner from "./banner/index"
import "../../style.css"

const index = () => {
  return (
    <div>

      <nav className="navbar navbar-expand-lg text-dark  navbar-transparent container fixed-top">
  <a className="navbar-brand" href="/#"> <h5>NFTBOOK.IO</h5></a>
  <button title="home" className="navbar-toggler bg-secondary" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
  <i className="fas fa-bars"></i>
  </button>
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
    <li className="nav-item">{search()}</li>
       {navs()}
    </ul>
  </div>  
</nav>

{banner()}
    </div>
  );
};

export default index;
