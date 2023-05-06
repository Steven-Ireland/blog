import React from "react";
import { graphql, Link } from "gatsby";
import withPageLayout from '../shared/withPageLayout';

import "../style/index.css";

const PostPreview = ({frontmatter, excerpt}) => (
  <div className = "PostPreviewContainer">
    <Link to={frontmatter.slug}>
      <li className = "PostPreview">
        <div className="Header">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
        </div>
        <p>{excerpt}</p>
      </li>
    </Link>
  </div>
);

const Home = ({ data }) => {
  return (
    <section className="PostListing">
      {data.allMarkdownRemark.edges.map(({node}) => (
        <PostPreview {...node} />
      ))}
    </section>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          frontmatter {
            title
            date
            slug
          }
          excerpt
        }
      }
    }
  }
`;

export default withPageLayout(Home);
