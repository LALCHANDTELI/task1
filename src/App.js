import header from "./components/header/index";
import filter from "./components/filter/index";
import container from "./components/container/index";

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">{header()}</div>

        <div className="col-sm-3">{filter()}</div>

        <div className="col-sm-9">{container()}</div>
      </div>
    </div>
  );
};

export default App;
