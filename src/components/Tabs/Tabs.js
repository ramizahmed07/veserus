import React from "react";

import "./tabs.scss";

const Tabs = ({ tabs }) => {
  return (
    <div className="tabs">
      {tabs.map(({ title, path }) => (
        <div key={title} className="tabs__tab">
          {title}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
