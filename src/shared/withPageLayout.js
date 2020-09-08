import React from "react"
import Banner from './Banner';

const withPageLayout = (Component) => {
  return (props) => (
     <div className="Page">
      <Banner />
      <Component {...props} />
    </div>
  );
}

export default withPageLayout;