import { MutableRefObject } from 'react';

import { Icon } from 'semantic-ui-react';
import {
  LeftSectionFigures,
  RightSectionFigures,
} from '../components/index/SectionFigures';
import MenuOverlay from '../components/index/MenuOverlay';
import Card from '../components/index/Card';
import ContactModal from '../components/index/ContactModal';

type HeroProps = {
  mainContentRef: MutableRefObject<any>;
};

type MainContentProps = {
  mainContentRef: MutableRefObject<any>;
  projects: Array<any>;
};

export const Hero = ({ mainContentRef }: HeroProps) => {
  const handleDownIndicatorClick = () => {
    mainContentRef.current.scrollIntoView(true);
  };

  return (
    <div className="hero">
      <MenuOverlay />
      <Icon
        name="angle down"
        className="down-indicator bounce"
        onClick={handleDownIndicatorClick}
      />
      <div className="left-section">
        <div className="left-section__tagline fadein-animation-left">
          I strive to create unique digital products, through{' '}
          <span className="main-yellow">creativity</span> and{' '}
          <span className="main-red">engineering</span>.
        </div>
        <LeftSectionFigures />
      </div>
      <div className="right-section">
        <div className="right-section__nav-bar nav-bar fadein-animation-top">
          <a href="#main-content" className="nav-bar__item active">
            About
          </a>
          <a
            href="https://github.com/JorgePasco1/project-tree"
            className="nav-bar__item"
            target="_blank"
          >
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
        <RightSectionFigures />
      </div>
    </div>
  );
};

export const MainContent = ({ mainContentRef, projects }: MainContentProps) => {
  return (
    <main id="main-content" ref={mainContentRef}>
      <section className="introduction">
        <h1>Hello World!</h1>
        <p>
          I’m Jorge Pasco, a software engineer based in Peru 🇵🇪. I currently
          work at Makrwatch, where I focus on backend services to help the
          company keep up with its exponential growth. I have experience as a
          front-end developer, and the technologies I love and use the most are
          Python🐍/Flask and JavaScript/React ⚛️. I'm also a Data
          Science/Machine Learning enthusiast, currently working on improving
          my skills 💪.
        </p>
        <p>
          I'm self-taught and passionate about learning new technologies and
          solving problems. You can take a look a{' '}
          <a href="/assets/JorgePasco_Resume.pdf">my resume</a> 🙌. Reach out to
          me by filling out{' '}
          <ContactModal
            triggerButton={
              <button className="unstyled-button">this form</button>
            }
          />
          , or email me at jorgepascosoto@gmail.com 📩
        </p>
      </section>

      <section className="projects">
        <h2>Latest Projects</h2>

        <div className="cards">
          {projects.map((project) => (
            <Card
              key={project.name}
              title={project.name}
              description={project.description}
              link={project.html_url}
              imageLink={project.imageLink}
              className="card"
            />
          ))}
          <a
            href="https://github.com/JorgePasco1/project-tree"
            className="cards__see_all"
          >
            See all 👉
          </a>
        </div>
      </section>
      <footer>
        <div>Coded with ❤️ by Jorge Pasco</div>
        <a href="https://www.linkedin.com/in/jorgepasco1/" target="_blank">
          <img src="/assets/logos/linkedin.svg" alt="LinkedIn Logo" />
        </a>
        <a href="https://www.github.com/jorgepasco1" target="_blank">
          <img src="/assets/logos/github.svg" alt="Github Logo" />
        </a>
      </footer>
    </main>
  );
};
