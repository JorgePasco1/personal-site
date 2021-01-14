import Head from 'next/head';
import { Icon } from 'semantic-ui-react';
import {
  LeftSectionFigures,
  RightSectionFigures,
} from '../components/SectionFigures';

const Home = () => {
  return (
    <>
      <Head>
        <title>Jorge Pasco</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="hero">
        <div className="left-section">
          <div className="left-section__tagline fadein-animation-left">
            I strive to create unique digital products, through{' '}
            <span className="main-yellow">creativity</span> and{' '}
            <span className="main-red">engineering</span>.
          </div>
          <Icon
            name="angle down"
            className="down-indicator bounce"
            size="huge"
          />
          <LeftSectionFigures />
        </div>
        <div className="right-section">
          <RightSectionFigures />
          <div className="right-section__nav-bar nav-bar fadein-animation-top">
            <a href="/" className="nav-bar__item active">
              About
            </a>
            <a href="/work" className="nav-bar__item">
              Work
            </a>
            <a href="/blog" className="nav-bar__item">
              Blog
            </a>
          </div>
          <div className="right-section__profile profile fadein-animation-top">
            <img src="/assets/profile.png"></img>
            <div className="profile__name">Jorge Pasco</div>
            <div className="profile__title">Software Engineer</div>
          </div>
          <div className="right_section__footer footer fadein-animation-top">
            <a href="https://www.linkedin.com/in/jorgepasco1/" target="_blank">
              <img src="/assets/logos/linkedin.svg" alt="LinkedIn Logo" />
            </a>
            <a href="https://www.github.com/jorgepasco1" target="_blank">
              <img src="/assets/logos/github.svg" alt="Github Logo" />
            </a>
          </div>
        </div>
      </div>
      <div className="section2">
        Section 2
      </div>
    </>
  );
};

export default Home;
