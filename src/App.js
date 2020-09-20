import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import styles from "./styles";
import "./App.scss";

import Card from "./components/shared-components/Card";
import Button from "./components/shared-components/Button";
import RulerHeading from "./components/shared-components/RulerHeading";
import ItemImage from "./components/shared-components/ItemImage";
import Loader from "./components/shared-components/Loader";
import enConfig from "enConfig";

import service from "./components/service";
import { LAUNCH_YEAR, LAUNCH_FILTERS_STORAGE_NAME } from "./components/config";
import utils from "./components/utils";

const useStyles = createUseStyles(styles);

function App() {
  const classes = useStyles();
  const [data, setData] = useState([]);

  // Get initial filter status from local storage
  let initialFilters = localStorage.getItem(LAUNCH_FILTERS_STORAGE_NAME);
  initialFilters = initialFilters ? { ...JSON.parse(initialFilters) } : {};

  const [filters, setFilters] = useState({ ...initialFilters });
  const [showLoader, setShowLoader] = useState(false);
  const launchYears = utils.range(LAUNCH_YEAR.min, LAUNCH_YEAR.max, 2);

  useEffect(() => {
    // Act as "componentDidMount" Lifecycle method
    document.title = "SpaceX Launch Program";
    setShowLoader(true);
    service.getLaunchesWhenPageLoads().then((response) => {
      setShowLoader(false);
      if (response.data && response.data.length > 0) {
        setData(response.data);
      }
    });
  }, []);

  return (
    <React.Fragment>
      <Loader show={showLoader} />
      <main className="container">
        <h1>{enConfig.launchProgramsTitle}</h1>
        <section className={classes.mainContent}>
          {/* FILTERS */}
          <aside className="mt-10">
            <Card>
              <h3>{enConfig.filtersTitle}</h3>
              {/* YEAR FILTERS */}
              <section className="filter-controls mb-10">
                <RulerHeading text={enConfig.yearFiltersTitle} className="mb-10" />
                {launchYears.map((yearSet, yearSetIndex) => {
                  return (
                    <div className={classes.btnRow} role="row" key={yearSetIndex}>
                      {yearSet.map((year) => {
                        const isButtonActive = "launch_year" in filters && filters["launch_year"] === year ? true : false;
                        return (
                          <Button
                            key={year}
                            isactive={isButtonActive}
                            onClick={(evt) => {
                              evt.preventDefault();
                              const launchYear = !isButtonActive ? parseInt(evt.target.textContent, 10) : undefined;
                              setFilters({ ...filters, launch_year: launchYear });
                              setShowLoader(true);
                              service.getLaunches(launchYear, filters.launch_success, filters.land_success).then((response) => {
                                setShowLoader(false);
                                setData([...response.data]);
                              });
                            }}
                          >
                            {year}
                          </Button>
                        );
                      })}
                    </div>
                  );
                })}
              </section>

              {/* LAUNCH SUCCESS FILTERS */}
              <section className="filter-controls mb-10">
                <RulerHeading text={enConfig.launchStatusFiltersTitle} className="mb-10" />
                <div className={classes.btnRow} role="row">
                  {["True", "False"].map((status, index) => {
                    const isButtonActive = "launch_success" in filters && filters["launch_success"] === status.toLowerCase() ? true : false;
                    return (
                      <Button
                        key={`launch_success_${index}`}
                        isactive={isButtonActive}
                        onClick={(evt) => {
                          evt.preventDefault();
                          const value = evt.target.textContent;
                          const isButtonActive = "launch_success" in filters && filters["launch_success"] === value.toLowerCase() ? true : false;
                          const launchSuccess = !isButtonActive ? value.toLowerCase() : undefined;
                          setFilters({ ...filters, launch_success: launchSuccess });
                          setShowLoader(true);
                          service.getLaunches(filters.launch_year, launchSuccess, filters.land_success).then((response) => {
                            setShowLoader(false);
                            setData([...response.data]);
                          });
                        }}
                      >
                        {status}
                      </Button>
                    );
                  })}
                </div>
              </section>

              {/* LAND SUCCESS FILTERS */}
              <section className="filter-controls mb-10">
                <RulerHeading text={enConfig.landingStatusFiltersTitle} className="mb-10" />
                <div className={classes.btnRow} role="row">
                  {["True", "False"].map((status, index) => {
                    const isButtonActive = "land_success" in filters && filters["land_success"] === status.toLowerCase() ? true : false;
                    return (
                      <Button
                        key={`land_success_${index}`}
                        isactive={isButtonActive}
                        onClick={(evt) => {
                          evt.preventDefault();
                          const value = evt.target.textContent;
                          const isButtonActive = "land_success" in filters && filters["land_success"] === value.toLowerCase() ? true : false;
                          const landSuccess = !isButtonActive ? value.toLowerCase() : undefined;
                          setFilters({ ...filters, land_success: landSuccess });
                          setShowLoader(true);
                          service.getLaunches(filters.launch_year, filters.launch_success, landSuccess).then((response) => {
                            setShowLoader(false);
                            setData([...response.data]);
                          });
                        }}
                      >
                        {status}
                      </Button>
                    );
                  })}
                </div>
              </section>
            </Card>
          </aside>
          {/* PROGRAMS LIST */}
          <section className="row">
            {data.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <div className="col">
                    <Card>
                      <ItemImage src={item.links.mission_patch_small} alt={`${item.mission_name} #${item.flight_number} Image`} />
                      <section className={classes.itemDescription}>
                        <h4>
                          {item.mission_name} #<span>{item.flight_number}</span>
                        </h4>
                        <div className={classes.itemRow}>
                          <label>{enConfig.missionIdLabel}</label>
                          {item.mission_id.length === 0 ? (
                            enConfig.noMissionIdFoundMessage
                          ) : (
                            <ul>
                              {item.mission_id.map((id) => {
                                return <li key={id}>{id}</li>;
                              })}
                            </ul>
                          )}
                        </div>
                        <div className={classes.itemRow}>
                          <label>{enConfig.launchYearLabel}</label>
                          <span>{item.launch_year}</span>
                        </div>
                        <div className={classes.itemRow}>
                          <label>{enConfig.successfulLaunchLabel}</label>
                          <span>{item.launch_success ? "True" : "False"}</span>
                        </div>
                        <div className={classes.itemRow}>
                          <label>{enConfig.successfulLandingLabel}</label>
                          <span>{item.rocket.first_stage.cores[0].land_success ? "True" : "False"}</span>
                        </div>
                      </section>
                    </Card>
                  </div>
                </React.Fragment>
              );
            })}
          </section>
        </section>
      </main>
      <footer className={classes.footer}>
        <h4>Developed by: Yatin Gupta</h4>
      </footer>
    </React.Fragment>
  );
}

export default App;
