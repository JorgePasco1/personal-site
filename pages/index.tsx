import Head from 'next/head';
import { Icon } from 'semantic-ui-react';

import GeomFigure from '../components/GeomFigure';

const Home = () => (
  <>
    <Head>
      <title>Jorge Pasco</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="hero">
      <div className="left-section">
        <div className="left-section__tagline">
          I strive to create unique digital products, through{' '}
          <span className="main-yellow">creativity</span> and{' '}
          <span className="main-red">engineering</span>.
        </div>
        <Icon name="angle down" className="down-indicator bounce" size="huge" />
        <GeomFigure type="circle" size="1rem" color="red"/>
        <GeomFigure type="square" size="2rem" color="yellow" rotation="45deg"/>
        <GeomFigure type="triangle" size="5rem" color="yellow" rotation="90deg"/>
      </div>
      <div className="right-section">
        <div className="right-section__nav-bar nav-bar">
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
        <div className="right-section__profile profile">
          <img src="/assets/profile.png"></img>
          <div className="profile__name">Jorge Pasco</div>
          <div className="profile__title">Software Engineer</div>
        </div>
        <div className="right_section__footer footer">
          <a href="https://www.linkedin.com/in/jorgepasco1/" target="_blank">
            <img src="/assets/logos/linkedin.svg" alt="LinkedIn Logo" />
          </a>
          <a href="https://www.github.com/jorgepasco1" target="_blank">
            <img src="/assets/logos/github.svg" alt="Github Logo" />
          </a>
        </div>
      </div>
    </div>
  </>
);

export default Home;
