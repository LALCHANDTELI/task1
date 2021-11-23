const index=()=>{
    return(
        <>
         <li class="nav-item mr-2 ml-2">
            <a class="nav-link" href="#">
            <i class="fas fa-search mr-1"></i>
              Explore
            </a>
          </li>
          <li class="nav-item mr-2 ml-2">
            <a class="nav-link" href="#">
         
            <i class="fas fa-gavel mr-1"></i>
              Auction
            </a>
          </li>
          <li class="nav-item mr-2 ml-2">
            <a class="nav-link" href="#">
        
            <i class="fas fa-volume-up mr-1"></i>
              Marketplace
            </a>
          </li>
          <li class="nav-item mr-2 ml-2">
            <a class="nav-link" href="#">
            <i class="fas fa-signal mr-1"></i>
              Stats
            </a>
          </li>
          <li class="nav-item mr-2 ml-2">
            <a class="nav-link" href="#">
            <i class="fas fa-clock mr-1"></i>
           
              Activity
            </a>
          </li>

          <li class="nav-item  connect  mr-2 ml-2">
            <button class="nav-link" href="#">
           
           Connect wallet
              
            </button>
          </li>
        </>
    )
}

export default index