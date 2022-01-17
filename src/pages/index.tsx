import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
        {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div> */}
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      // title={`Hello from ${siteConfig.title}`}
      // description="Description will go into a meta tag in <head />"
      >
      <HomepageHeader />
      <main>
        <br></br>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center',}}><h1>Look out for these icons!</h1></div>
        <HomepageFeatures />
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center',}}><h1>Get started</h1></div><br></br>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/standard/syllabus/y11">
            Standard
          </Link>&nbsp;&nbsp;&nbsp;
          <Link
            className="button button--secondary button--lg"
            to="/advanced">
            Advanced
          </Link>&nbsp;&nbsp;&nbsp;
          <Link
            className="button button--secondary button--lg"
            to="/extension1">
            Extension 1
          </Link>&nbsp;&nbsp;&nbsp;
          <Link
            className="button button--secondary button--lg"
            to="/extension2">
            Extension 2
          </Link>
        </div>
        <br></br>
      </main>
    </Layout>
  );
}
