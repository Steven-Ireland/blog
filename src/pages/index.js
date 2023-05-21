import React from "react";
import withPageLayout from '../shared/withPageLayout';

import "../style/index.css";
import { FileText, Link, Linkedin, Mail } from "react-feather";

const GITHUB_IMG_URL = 'https://avatars.githubusercontent.com/u/6981727?v=4';
const GH_IMPROVEMENTML = 'https://github.com/Steven-Ireland/ImprovementML-Brain';
const GH_KRAKENSHEET = 'https://github.com/Steven-Ireland/krakensheet.com';
const GH_BLOG = 'https://github.com/Steven-Ireland/stevenire.land';
const GH_SPAM = 'https://github.com/Steven-Ireland/spam';

const About = ({ data }) => {
  return (
    <section className="About">
      <div className="profile">
        <img src={GITHUB_IMG_URL} alt="Github avatar of me" className="profile-picture" />
        <h1>Hello There!</h1>
      </div>
      
      <p>
        I'm Steven Ireland, a lifelong Software Engineer most recently working as a Staff Engineer at Wayfair. 
      </p>
      <p>
        In my day job I define high level system architecture, facilitate tough conversations and drive organizational alignment,
        and partner closely with product managers to create, shape, and deliver new platform features.
      </p>
      <p>
        Outside of work, I hack on a slew of projects including:
      </p>
      <ul>
        <li>A tiny general-purpose load testing tool built in Go <a href={GH_SPAM}><Link size={12}/></a></li>
        <li>A Reinforcement Learning based Unity Game where fantastical creatures learn to walk <a href={GH_IMPROVEMENTML}><Link size={12}/></a></li>
        <li>A Next-Generation character sheet application for tabletop games built with React, Redux, and Node.js <a href={GH_KRAKENSHEET}><Link size={12}/></a></li>
        <li>A yet-unreleased GraphQL-first Content Management Platform, with Next.js and Apollo Server</li>
        <li>And this website you're reading right now! <a href={GH_BLOG}><Link size={12}/></a></li>
      </ul>
      <p>
        If you're working on an interesting, tough, or ambiguous problem and need some help, feel free to reach out and 
        say hello. 
      </p>

      <section className="Contact">
        <a href="mailto:steven.ireland+sitecontact@protonmail.com">
          <Mail /> Email
        </a>
        <a href="https://www.linkedin.com/in/steven-ireland-6b545774/">
          <Linkedin /> Linkedin
        </a>
        <a href="/resume.pdf">
          <FileText /> Resumé
        </a>
      </section>
    </section>
  );
};

export default withPageLayout(About);
