import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Row, Col } from "react-bootstrap";
import { FaAngleDown } from "react-icons/fa";
import Trendings from "./trendings";
import { Container } from "./styles";
import TopRated from "./topRated";
import Arrival from "./arrival";
import Genre from "./genre";

function TabComponent() {
  const [state, setState] = useState({
    tabIndex: 0,
    displayIcon: 0
  });

  const { tabIndex, displayIcon } = state;
  return (
    <Container>
      <Tabs
        className="tabs"
        selectedIndex={tabIndex}
        onSelect={tabIndex => setState({ ...state, tabIndex })}
      >
        <div className="tab-flex">
          <div>
            <TabList className="tab-nav-contain">
              <Tab className={`item ${tabIndex === 0 ? "active" : null}`}>
                Trending
              </Tab>
              <Tab className={`item ${tabIndex === 1 ? "active" : null}`}>
                Top Rated
              </Tab>
              <Tab className={`item ${tabIndex === 2 ? "active" : null}`}>
                New Arrivals
              </Tab>
              <Tab
                className={`item dropdown ${tabIndex === 3 ? "active" : null}`}
              >
                Genre <FaAngleDown className="icon" />
              </Tab>
            </TabList>
          </div>
          <div
            className="active-icon"
            selectedindex={displayIcon}
            onSelect={displayIcon => setState({ ...state, displayIcon })}
          >
            <svg
              width="15px"
              className={`grid-display ${
                displayIcon === 0 ? "grid-option" : null
              }`}
              height="15px"
              viewBox="0 0 39 39"
              version="1.1"
            >
              <g
                id="TheMovieBox"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="Homepage"
                  transform="translate(-2595.000000, -1419.000000)"
                  stroke="#FF0079"
                  stroke-width="2"
                >
                  <g
                    id="Tab-Bar"
                    transform="translate(171.000000, 1413.000000)"
                  >
                    <g
                      id="Group-5"
                      transform="translate(2424.000000, 6.000000)"
                    >
                      <rect
                        id="Rectangle-8"
                        x="22"
                        y="1"
                        width="16"
                        height="16"
                        rx="2"
                      ></rect>
                      <rect
                        id="Rectangle-8"
                        x="1"
                        y="1"
                        width="16"
                        height="16"
                        rx="2"
                      ></rect>
                      <rect
                        id="Rectangle-8"
                        x="22"
                        y="22"
                        width="16"
                        height="16"
                        rx="2"
                      ></rect>
                      <rect
                        id="Rectangle-8"
                        x="1"
                        y="22"
                        width="16"
                        height="16"
                        rx="2"
                      ></rect>
                    </g>
                  </g>
                </g>
              </g>
            </svg>

            <svg
              width="15px"
              height="15px"
              viewBox="0 0 42 39"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xlink="http://www.w3.org/1999/xlink"
            >
              <g
                id="TheMovieBox"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="Homepage"
                  transform="translate(-2664.000000, -1419.000000)"
                  stroke="#BABBC3"
                  stroke-width="2"
                >
                  <g
                    id="Tab-Bar"
                    transform="translate(171.000000, 1413.000000)"
                  >
                    <g
                      id="Group-6"
                      transform="translate(2493.000000, 6.000000)"
                    >
                      <path
                        d="M2,29 C1.44771525,29 1,29.4477153 1,30 L1,37 C1,37.5522847 1.44771525,38 2,38 L40,38 C40.5522847,38 41,37.5522847 41,37 L41,30 C41,29.4477153 40.5522847,29 40,29 L2,29 Z"
                        id="Rectangle-7"
                      ></path>
                      <path
                        d="M2,1 C1.44771525,1 1,1.44771525 1,2 L1,9 C1,9.55228475 1.44771525,10 2,10 L40,10 C40.5522847,10 41,9.55228475 41,9 L41,2 C41,1.44771525 40.5522847,1 40,1 L2,1 Z"
                        id="Rectangle-7"
                      ></path>
                      <path
                        d="M2,15 C1.44771525,15 1,15.4477153 1,16 L1,23 C1,23.5522847 1.44771525,24 2,24 L30,24 C30.5522847,24 31,23.5522847 31,23 L31,16 C31,15.4477153 30.5522847,15 30,15 L2,15 Z"
                        id="Rectangle-7"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div style={{ height: '50px' }}></div>
        <TabPanel className={tabIndex === 0 ? "animate" : null}>
          <Trendings />
        </TabPanel>
        <TabPanel className={tabIndex === 1 ? "animate" : null}>
          <TopRated />
        </TabPanel>
        <TabPanel className={tabIndex === 2 ? "animate" : null}>
          <Arrival />
        </TabPanel>
        <TabPanel className={tabIndex === 3 ? "animate" : null}>
          <Genre />
        </TabPanel>
      </Tabs>
    </Container>
  );
}

export default TabComponent;
