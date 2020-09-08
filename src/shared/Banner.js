import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";

const Banner = ({ data }) => (
  <StaticQuery query={query} render={(data) => (
    <section className="Banner">
      <h1>
        <Link to="/">{data.site.siteMetadata.title}</Link>
      </h1>
      <h2>
        <Link to="/contact">Contact</Link>
      </h2>
      <h2>
        <a href="https://www.linkedin.com/in/steven-ireland-6b545774/">Linkedin</a>
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
