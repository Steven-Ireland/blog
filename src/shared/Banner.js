import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";

const Banner = ({ data }) => (
  <StaticQuery query={query} render={(data) => (
    <section className="Banner">
      <h1>
        <Link to="/">{data.site.siteMetadata.title}</Link>
      </h1>
      <h2>
        <Link to="/posts">Posts & Projects</Link>
      </h2>
    </section>
  )} />
);

const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default Banner;
