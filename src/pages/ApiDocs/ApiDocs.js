import { Collapse, makeStyles, Tab, Tabs, withStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";
import RouteWithSubRoutes from "../../router/RouteWithSubRoutes";
import Plus from "../../assets/images/plus.png";
import "./apiDocs.scss";

// const MENU_DATA = [
//   { title: "Home", path: `${PATHS.API_DOCS}` },
//   {
//     title: "Payments",
//     nested: true,
//     nestedData: [
//       {
//         title: "Getting started",
//         path: `${PATHS.API_DOCS_PAYMENTS_GETTING_START}`,
//       },
//       {
//         title: "Sample integrations",
//         path: `${PATHS.API_DOCS_PAYMENTS_SAMPLE_INTEGRATIONS}`,
//       },
//       {
//         title: "After the payment",
//         path: `${PATHS.API_DOCS_PAYMENTS_AFTER_THE_PAYMENT}`,
//       },
//       {
//         title: "After payment methods",
//         path: `${PATHS.API_DOCS_PAYMENTS_ADD_PAYMENT_METHODS}`,
//       },
//       {
//         title: "More guides",
//         path: `${PATHS.API_DOCS_PAYMENTS_ADD_MORE_GUIDES}`,
//       },
//     ],
//   },
//   {
//     title: "Business Operations",
//     path: `${PATHS.API_DOCS_BUSINESS_OPERATIONS}`,
//   },

//   {
//     title: "Financial services",
//     path: `${PATHS.API_DOCS_FINANCIAL_SERVICES}`,
//   },
//   {
//     title: "Developer Tools",
//     path: `${PATHS.API_DOCS_DEVELOPER_TOOLS}`,
//   },
//   {
//     title: "Security",
//     path: `${PATHS.API_DOCS_SECURITY}`,
//   },
//   {
//     title: "Account",
//     path: `${PATHS.API_DOCS_ACCOUNT}`,
//   },
//   {
//     title: "API reference",
//     path: `${PATHS.API_DOCS_API_REFERENCE}`,
//   },
//   {
//     title: "All products",
//     path: `${PATHS.API_DOCS_ALL_PRODUCTS}`,
//   },
// ];

const ApiDocsRouter = ({ routes }) => {
  return (
    <Switch>
      {routes?.map((route) => (
        <RouteWithSubRoutes key={route.key} {...route} />
      ))}
    </Switch>
  );
};

// const useStyles = makeStyles(() => ({
//   demo2: {
//     backgroundColor: "#2e1534",
//   },
// }));

const ApiDocs = ({ routes }) => {
  const [selected, setSelected] = useState(null);
  const history = useHistory();
  const { pathname } = useLocation();
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    document.body.style.overflowY = "scroll";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      "aria-controls": `scrollable-auto-tabpanel-${index}`,
    };
  }

  const handleChange = (event, newValue) => {
    console.log("newValue", newValue);
    setValue(newValue);
  };

  const handleItemClick = (item) => {
    if (item?.routes?.length) {
      return setSelected((prev) => (prev ? null : item));
    } else {
      setSelected(null);
      history.push(item.path);
    }
  };

  console.log("routes api docs", routes);
  return (
    <>
      <div className="apiDocs">
        <div
          className={`apiDocs__left ${
            pathname.includes("payments") && "no-border"
          }`}
        >
          {routes?.map(({ key, path, routes }) => (
            <div className="apiDocs__left__itemContainer">
              <div
                onClick={() => handleItemClick({ key, path, routes })}
                className={`apiDocs__left__itemContainer__item ${
                  key === "Security" &&
                  "apiDocs__left__itemContainer__item--security"
                }`}
                key={key}
              >
                {key}
              </div>

              <Collapse
                className="apiDocs__left__itemContainer__nested"
                in={routes?.length && key === selected?.key}
                timeout="auto"
                unmountOnExit
              >
                {routes?.map(
                  (x, i) =>
                    console.log({ historyPush: x }) || (
                      <div
                        onClick={() => history.push(x.path)}
                        className={`apiDocs__left__itemContainer__nested__nestedItem ${
                          i === routes.length - 1 &&
                          "apiDocs__left__itemContainer__nested__nestedItem--last"
                        }`}
                        key={x.key}
                      >
                        {x.key}
                      </div>
                    )
                )}
              </Collapse>
            </div>
          ))}
        </div>
        <div className="apiDocs__right">
          <Switch>
            {routes?.map((route) =>
              route?.routes?.length ? (
                <ApiDocsRouter key={route.key} {...route} />
              ) : (
                <RouteWithSubRoutes key={route.key} {...route} />
              )
            )}
          </Switch>
        </div>
      </div>
      <div className="apiDocs-mobile-menu">
        <Tabs
          variant="scrollable"
          scrollButtons="off"
          aria-label="scrollable auto tabs example"
        >
          {routes?.map(({ key, path, routes }) => (
            <div className="apiDocs-mobile-menu__item">
              <NavLink
                activeClassName="apiDocs-mobile-menu__item__link--active"
                className="apiDocs-mobile-menu__item__link"
                key={key}
                to={path}
              >
                {key}
              </NavLink>
            </div>
          ))}
          {/* <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
          <Tab label="Item Four" {...a11yProps(3)} />
          <Tab label="Item Five" {...a11yProps(4)} />
          <Tab label="Item Six" {...a11yProps(5)} />
          <Tab label="Item Seven" {...a11yProps(6)} /> */}
        </Tabs>
      </div>
      <div className="apiDocsFooter">
        <div className="apiDocsFooter__copyrights">
          Copyright © 2020 veserus.com
        </div>
        <div className="apiDocsFooter__links">
          <Link to="/">Homepage</Link>
          <Link to="/">Terms and Conditions</Link>
          <Link to="/">Help me?</Link>
          <div className="apiDocsFooter__links__location">
            <img src={Plus} alt="swiss" />
            <span>Switzerland</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApiDocs;
