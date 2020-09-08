import React from "react";
import { graphql } from "gatsby";

import 'typeface-roboto';
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import withPageLayout from '../shared/withPageLayout';

const PostTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <section className="PostContainer">
      <div className="Post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="PostContent"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </section>
  );
};

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;

export default withPageLayout(PostTemplate);