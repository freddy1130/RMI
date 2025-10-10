import "bootstrap/dist/js/bootstrap.bundle.min.js";
import users from "../assets/users.svg";
import award from "../assets/award.svg";
import star from "../assets/star.svg";
import trendingUp from "../assets/trending-up.svg";
import search from "../assets/search.svg";

type Metric = { value: number | string; label: string; asset?: string };

type Props = {
  metrics?: Metric[];
};

function Metrics_Summary({
  metrics = [
    { value: 0, label: "Companies", asset: users },
    { value: 0, label: "Reviews", asset: award },
    { value: 0, label: "Avg Rating", asset: star },
    { value: "n/a", label: "Success Rate", asset: trendingUp },
  ],
}: Props) {
  if (metrics.length === 0) {
    return (
      <div className="container text-center">
        <div className="row">
          <p>No item found</p>
        </div>
      </div>
    );
  }

  const Industries = [
    "All Industries",
    "Technology",
    "Software",
    "Fintech",
    "Consulting",
    "Cloud Computing",
  ];

  const Difficulties = [
    "Any Difficulty",
    "Easy (1-2)",
    "Medium (3)",
    "Hard (4-5)",
  ];

  const Ratings = ["Any Rating", "4+ Stars", "3+ Stars", "2+ Stars"];

  const Types = [
    "All Types",
    "Phone",
    "Video",
    "In-Person",
    "Coding",
    "Behavioral",
  ];

  return (
    <div className="container pt-4 px-8">
      <div className="row row-cols-1 row-cols-md-4 mb-4">
        {metrics.map((metric, idx) => (
          <div className="col" key={metric.label ?? idx}>
            <div className="card border">
              <div className="d-flex align-items-center px-2 gap-2">
                {metric.asset && (
                  <img
                    src={metric.asset}
                    alt={metric.label}
                    style={{ width: 24, height: 24 }}
                  />
                )}
                <div className="pt-2">
                  <p className="mb-0 font-bold">{metric.value}</p>
                  <p className="text-muted">{metric.label}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="relative mb-4">
        <div className="form-floating mb-3">
          <input
            type=""
            style={{ backgroundColor: "#f3f3f5" }}
            className="form-control"
            id="floatingInput"
            placeholder=""
          />
          <label htmlFor="floatingInput">
            <img
              src={search}
              alt="Search"
              className="me-2"
              style={{ width: 24, height: 24 }}
            />
            Search companies or positions...
          </label>
        </div>
        <div className="row row-cols-1 row-cols-md-5 g-3">
          {/* Industries dropdown button */}
          <div className="btn-group">
            <button
              className="btn border dropdown-toggle"
              style={{ backgroundColor: "#f3f3f5" }}
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              All Industries
            </button>
            <ul className="dropdown-menu">
              {Industries.map((industry) => (
                <li key={industry}>
                  <button className="dropdown-item" type="button">
                    {industry}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {/* Difficulty dropdown button */}
          <div className="btn-group">
            <button
              className="btn border dropdown-toggle"
              style={{ backgroundColor: "#f3f3f5" }}
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Any Difficulty
            </button>
            <ul className="dropdown-menu">
              {Difficulties.map((difficulty) => (
                <li key={difficulty}>
                  <button className="dropdown-item" type="button">
                    {difficulty}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {/* Rating dropdown button */}
          <div className="btn-group">
            <button
              className="btn border dropdown-toggle"
              style={{ backgroundColor: "#f3f3f5" }}
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Any Rating
            </button>
            <ul className="dropdown-menu">
              {Ratings.map((rating) => (
                <li key={rating}>
                  <button className="dropdown-item" type="button">
                    {rating}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {/* Type dropdown button */}
          <div className="btn-group">
            <button
              className="btn border dropdown-toggle"
              style={{ backgroundColor: "#f3f3f5" }}
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Any Rating
            </button>
            <ul className="dropdown-menu">
              {Types.map((type) => (
                <li key={type}>
                  <button className="dropdown-item" type="button">
                    {type}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="col">
            <button type="button" className="btn btn border w-100">
              Clear Filters
            </button>
          </div>
        </div>
      </div>
      <div className="tabs">
        <div role="tablist" aria-label="Company Review Tabs" className="d-flex justify-content-start gap-2">
          <button
            role="tab"
            aria-selected="true"
            aria-controls="panel-1"
            id="tab-1"
            tabIndex={0}
            className="btn btn-sm btn-primary"
            style={{ width: "100px" }}
          >
            Companies
          </button>
          <button
            role="tab"
            aria-selected="false"
            aria-controls="panel-2"
            id="tab-2"
            tabIndex={-1}
            className="btn btn-sm btn-secondary"
            style={{ width: "100px" }}
          >
            Reviews
          </button>
        </div>
        <div id="panel-1" role="tabpanel" aria-labelledby="tab-1" tabIndex={0}>
          <p>Companies content goes here...</p>
        </div>
        <div id="panel-2" role="tabpanel" aria-labelledby="tab-2" tabIndex={0} hidden>
          <p>Reviews content goes here...</p>
        </div>
      </div>
    </div>
  );
}

export default Metrics_Summary;
