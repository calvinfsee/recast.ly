var Search = (props) => {
  return (<div className="search-bar form-inline">
    <input onChange={(e) => { props.handleChange(e.target.value); }} className="form-control" type="text" />
    <button onClick={(e) => { props.handleSubmit(e.target.value); }} className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>);
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;