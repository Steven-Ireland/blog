import React from "react";
import withPageLayout from '../shared/withPageLayout';

import {Mail, Linkedin} from 'react-feather';

import "../style/index.css";

const Contact = ({ data }) => {
  return (
    <section className="Contact">
      <a href="mailto:steven.ireland+sitecontact@protonmail.com">
        <Mail /> Email
      </a>
      <a href="https://www.linkedin.com/in/steven-ireland-6b545774/">
        <Linkedin /> Linkedin
      </a>
    </section>
  );
};

export default withPageLayout(Contact);
