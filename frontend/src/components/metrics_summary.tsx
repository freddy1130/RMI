import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState } from "react";
import users from "../assets/users.svg";
import award from "../assets/award.svg";
import star from "../assets/star.svg";
import trendingUp from "../assets/trending-up.svg";
import search from "../assets/search.svg";
import building from "../assets/building.svg";
import location from "../assets/map-pin.svg";

type Metric = { value: number | string; label: string; asset?: string }; //defines an array of metric objects

type Props = {
  metrics?: Metric[];
};

function Metrics_Summary({
  metrics = [
    { value: 5, label: "Companies", asset: users },
    { value: 5, label: "Reviews", asset: award },
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

  type Company = {
    id: string;
    name: string;
    industry: string;
    avgScore: number; // float average rating (e.g. 4.2)
    reviewsCount: number; // integer number of reviews
    location: string;
    employeesRange:
      | ">10"
      | "10-50"
      | "50-100"
      | "100-500"
      | "500-1000"
      | "1000-5000"
      | "5000-10000"
      | "10000+";
  };

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

  const dummyCompanies: Company[] = [
    {
      id: "c1",
      name: "TechCorp Inc.",
      industry: "Technology",
      avgScore: 4.2,
      reviewsCount: 127,
      location: "San Francisco, CA",
      employeesRange: "1000-5000",
    },
    {
      id: "c2",
      name: "DataFlow Solutions",
      industry: "Software",
      avgScore: 3.8,
      reviewsCount: 89,
      location: "Austin, TX",
      employeesRange: "100-500",
    },
    {
      id: "c3",
      name: "CloudTech Systems",
      industry: "Cloud Computing",
      avgScore: 4.0,
      reviewsCount: 203,
      location: "Seattle, WA",
      employeesRange: "500-1000",
    },
    {
      id: "c4",
      name: "StartupX",
      industry: "Fintech",
      avgScore: 3.5,
      reviewsCount: 49,
      location: "New York, NY",
      employeesRange: "10-50",
    },
    {
      id: "c5",
      name: "Megacorp Enterprises",
      industry: "Consulting",
      avgScore: 3.9,
      reviewsCount: 312,
      location: "Chicago, IL",
      employeesRange: "10000+",
    },
  ];

  const [activeTab, setActiveTab] = useState<"companies" | "reviews">(
    "companies"
  );

  return (
    <div className="container pt-4 px-8">
      <div className="row row-cols-1 row-cols-md-4 mb-4">
        {metrics.slice(0, 4).map(
          (
            metric,
            idx //takes each element (key) of an array and returns an array for it specifically
          ) => (
            <div className="col" key={metric.label ?? idx}>
              {" "}
              {/*Uses metric.label as key if defined; otherwise falls back to idx*/}{" "}
              {/*uses label as key, if no label uses index*/}
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
          )
        )}
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
              All Types
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
      {/* Tab Buttons for companies and reviews */}
      <div className="tabs">
        <div
          role="tablist"
          aria-label="Company Review Tabs"
          className="d-flex justify-content-start muted border-2 bg-body-secondary rounded gap-2 mb-4"
          style={{ width: "fit-content" }}
        >
          <button
            role="tab"
            aria-selected={activeTab === "companies"}
            aria-controls="panel-1"
            id="tab-1"
            tabIndex={0}
            className={`btn btn-sm ${
              activeTab === "companies"
                ? "bg-white text-dark"
                : "bg-transparent"
            }`}
            onClick={() => setActiveTab("companies")}
            style={{ width: "fit-content" }}
          >
            Companies ({dummyCompanies.length})
          </button>
          <button
            role="tab"
            aria-selected={activeTab === "reviews"}
            aria-controls="panel-2"
            id="tab-2"
            tabIndex={-1}
            className={`btn btn-sm ${
              activeTab === "reviews" ? "bg-white text-dark" : "bg-transparent"
            }`}
            onClick={() => setActiveTab("reviews")}
            style={{ width: "fit-content" }}
          >
            Reviews
          </button>
        </div>
        {/*panel for companies*/}
        <div
          id="panel-1"
          role="tabpanel"
          aria-labelledby="tab-1"
          tabIndex={0}
          hidden={activeTab !== "companies"}
        >
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
            {dummyCompanies.map((company) => (
              <div className="col" key={company.id}>
                <div className="card mb-3" style={{ maxWidth: 540 }}>
                  <div
                    className="card-header bg-white mb-3"
                    style={{ borderBottom: "none" }}
                  >
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <div className="d-flex align-items-center">
                        <div
                          className="me-3 rounded bg-body-secondary d-flex align-items-center justify-content-center"
                          style={{ width: 40, height: 40 }}
                        >
                          <img
                            src={building}
                            alt="Building"
                            style={{
                              height: "1.5em",
                              width: "auto",
                              verticalAlign: "middle",
                            }}
                          />
                        </div>
                        <div>
                          <h6 className="card-title mb-0">{company.name}</h6>
                          <div className="card-text">
                            <h6>
                              <span className="badge bg-body-secondary text-dark">
                                {company.industry}
                              </span>
                            </h6>
                          </div>
                        </div>
                      </div>

                      <div className="text-end">
                        <div className="fw-bold">
                          {company.avgScore.toFixed(1)}
                        </div>
                        <div className="text-muted small">
                          {company.reviewsCount} reviews
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-content px-4 pt-0 [&:last-child]:pb-6 mb-3">
                    <div className="d-flex align-items-center gap-4 small text-muted">
                      <div className="d-flex align-items-center gap-1">
                        <img
                          src={location}
                          alt="Location"
                          style={{
                            filter: "grayscale(1000%)",
                            height: "1em",
                            width: "auto",
                            verticalAlign: "middle",
                          }}
                        />
                        <span className="ms-1 small">{company.location}</span>
                      </div>
                      <div className="d-flex align-items-center g-1">
                        <img
                          src={users}
                          alt="Users"
                          style={{
                            filter: "grayscale(1000%)",
                            height: "1em",
                            width: "auto",
                            verticalAlign: "middle",
                          }}
                        />
                        <span className="ms-1 small">
                          {company.employeesRange} employees
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/*panel for reviews*/}
        <div
          id="panel-2"
          role="tabpanel"
          aria-labelledby="tab-2"
          tabIndex={0}
          hidden={activeTab !== "reviews"}
        >
          <div>
            <div className="card w-auto gap-6 mb-4">
              <div className="align-items-center px-2 gap-2">
                <div
                  className="card-header pt-4 pb-3 bg-white"
                  style={{ borderBottom: "none" }}
                >
                  <div className="row row-cols-2 align-items-start g-2 mb-4">
                    <div className="row">
                      <h6 className="mb-0 pt-1">Position</h6>
                      <small className="mn-0 text-muted">
                        at (company name)
                      </small>
                    </div>
                    {/*add avgScore here*/}
                    <div className="col text-end">
                      <small>avgRating</small>
                    </div>
                  </div>
                  <div className="row row-cols-1 align-items-center gap-2">
                    <div className="col">
                      <div className="badge">
                        <span className="badge round border text-bg-light bg-white me-2">
                          Type
                        </span>
                        <span className="badge rounded border text-bg-light bg-white me-2">
                          Difficulty
                        </span>
                        {/*turns green with cirlced checkmark if "offer", red with circled x if "rejection"*/}
                        <span className="badge rounded border text-bg-light bg-white">
                          Result
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-content px-4 [&:last-child]:pb-6">
                  <div className="row row-cols-2 row-cols-md-4 mb-4">
                    {/*add score under each category*/}
                    
                      <div>
                        <p className="small">Experience</p>
                      </div>
                      <div>
                        <p className="small">Communication</p>
                      </div>
                      <div>
                        <p className="small">Process</p>
                      </div>
                      <div>
                        <p className="small">Difficulty</p>
                      </div>
                    
                  </div>
                  <div className="d-flex flex-column">
                    <div>
                      <h6 className="fw-medium mb-0">Review</h6>
                      <p className="text-muted small">
                        Review text goes here...
                      </p>
                    </div>
                    <div>
                      <h6 className="fw-medium mb-0 text-success">Pros</h6>
                      <p className="text-muted small">Pros go here...</p>
                    </div>
                    <div>
                      <h6 className="fw-medium mb-0 text-danger">Cons</h6>
                      <p className="text-muted small">Cons go here...</p>
                    </div>
                    <div>
                      <h6 className="fw-medium mb-0 text-primary">Advice</h6>
                      <p className="text-muted small">Advice goes here...</p>
                    </div>
                  </div>
                  <div className="d-flex flex-wrap align-items-center gap-3 pt-3 mb-4 border-top small text-muted">
                    <div className="d-flex align-items-center gap-1">
                      Reviewer
                    </div>

                    <div className="d-flex align-items-center gap-1">date</div>

                    <div className="d-flex align-items-center gap-1">time</div>
                    <div className="text-success">💰 salary range</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Metrics_Summary;
