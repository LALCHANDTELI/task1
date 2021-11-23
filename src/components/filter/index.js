import categories from "./categories"
import chain from "./Chain"
import creators from "./creators"
import date from "./date"
import "../../style.css"

const index = () => {
    return (
        <div className="filter">
           {date()}
           {categories()}
           {chain()}
           {creators()}
        </div>
    )
}


export default index
