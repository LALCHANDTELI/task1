const index=()=>{
    return(
        <>
         <li className="nav-item mr-2 ml-2">
            <a className="nav-link" href="/#">
            <i className="fas fa-search mr-1"></i>
              Explore
            </a>
          </li>
          <li className="nav-item mr-2 ml-2">
            <a className="nav-link" href="/#">
         
            <i className="fas fa-gavel mr-1"></i>
              Auction
            </a>
          </li>
          <li className="nav-item mr-2 ml-2">
            <a className="nav-link" href="/#">
        
            <i className="fas fa-volume-up mr-1"></i>
              Marketplace
            </a>
          </li>
          <li className="nav-item mr-2 ml-2">
            <a className="nav-link" href="/#">
            <i className="fas fa-signal mr-1"></i>
              Stats
            </a>
          </li>
          <li className="nav-item mr-2 ml-2">
            <a className="nav-link" href="/#">
            <i className="fas fa-clock mr-1"></i>
           
              Activity
            </a>
          </li>

          <li className="nav-item  connect  mr-2 ml-2">
            <button title="connect with us" className="nav-link" href="/#">
           
           Connect wallet
              
            </button>
          </li>
        </>
    )
}

export default index