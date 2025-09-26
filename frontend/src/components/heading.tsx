function Heading() {
  return (
    <header className="border-bottom">
      <div className="container items-center">
        <div className="flex row align-items-center">
          <div className="col-auto">
            <div>
              <h1>Rate My Interview</h1>
              <p>Real interview experiences from real candidates</p>
            </div>
          </div>
          <div className="col"></div>
          <div className="col-auto ml-auto d-flex align-items-center">
            <button
              type="button"
              className="btn btn-dark flex-shrink-0 text-nowrap"
              style={{ minWidth: 120 }}
            >
              + Write Review
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Heading;
