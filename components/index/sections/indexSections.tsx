import { MutableRefObject } from 'react';
import Link from 'next/link';

import { Icon } from 'semantic-ui-react';
import { LeftSectionFigures, RightSectionFigures } from '../SectionFigures';
import MenuOverlay from '../../common/MenuOverlay';
import Card from '../../common/Card';
import ContactModal from '../ContactModal';

type HeroProps = {
  mainContentRef: MutableRefObject<any>;
  styles: any;
};

type MainContentProps = {
  mainContentRef: MutableRefObject<any>;
  projects: Array<any>;
  styles: any;
};

export const Hero = ({ mainContentRef, styles }: HeroProps) => {
  const handleDownIndicatorClick = () => {
    mainContentRef.current.scrollIntoView(true);
  };

  return (
    <div className={styles['hero']}>
      <div className={styles["menu-overlay-container"]}>
        <MenuOverlay />
      </div>
      <Icon
        name="angle down"
        className={`${styles['down-indicator']} bounce`}
        onClick={handleDownIndicatorClick}
      />
      <div className={styles['left-section']}>
        <div
          className={`${styles['left-section__tagline']} ${styles['fadein-animation-left']}`}
        >
          I strive to create unique digital products, through{' '}
          <span className={styles['main-yellow']}>creativity</span> and{' '}
          <span className={styles['main-red']}>engineering</span>.
        </div>
        <LeftSectionFigures />
      </div>
      <div className={styles['right-section']}>
        <div className={`${styles['nav-bar']} fadein-animation-top`}>
          <a
            href="#main-content"
            className={`${styles['nav-bar__item']} ${styles['active']}`}
          >
            About
          </a>
          <a
            href="https://github.com/JorgePasco1/project-tree"
            className={styles['nav-bar__item']}
            target="_blank"
          >
            Work
          </a>
          <Link href="/blog">
            <a className={styles['nav-bar__item']}>Blog</a>
          </Link>
        </div>
        <div
          className={`${styles['profile']} fadein-animation-top}`}
        >
          <img src="/assets/profile.png"></img>
          <div className={styles['profile__name']}>Jorge Pasco</div>
          <div className={styles['profile__title']}>Software Engineer</div>
        </div>
        <div
          className={`${styles['right_section__footer']} ${styles['footer']} fadein-animation-top}`}
        >
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

export const MainContent = ({
  mainContentRef,
  projects,
  styles,
}: MainContentProps) => {
  return (
    <main id="main-content" ref={mainContentRef} className={styles['main']}>
      <section className={styles['introduction']}>
        <h1>Hello World!</h1>
        <p>
          I’m Jorge Pasco, a software engineer based in Peru 🇵🇪. I currently
          work at Makrwatch, where I focus on backend services to help the
          company keep up with its exponential growth. I have experience as a
          front-end developer, and the technologies I love and use the most are
          Python🐍/Flask and JavaScript/React ⚛️. I'm also a Data
          Science/Machine Learning enthusiast, currently working on improving my
          skills 💪.
        </p>
        <p>
          I'm self-taught and passionate about learning new technologies and
          solving problems. You can take a look a{' '}
          <a href="/assets/JorgePasco_Resume.pdf">my resume</a> 🙌. Reach out to
          me by filling out{' '}
          <ContactModal
            triggerButton={
              <button className='unstyled-button'>this form</button>
            }
          />
          , or email me at jorgepascosoto@gmail.com 📩
        </p>
      </section>

      <section className={styles['projects']}>
        <h2>Latest Projects</h2>

        <div className={styles['cards']}>
          {projects.map((project) => (
            <Card
              key={project.name}
              title={project.name}
              description={project.description}
              link={project.html_url}
              imageLink={project.imageLink}
              className={styles['card']}
            />
          ))}
          <a
            href="https://github.com/JorgePasco1/project-tree"
            className={styles['cards__see_all']}
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
