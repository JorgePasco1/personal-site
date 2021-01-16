import Head from 'next/head';
import { Icon } from 'semantic-ui-react';
import {
  LeftSectionFigures,
  RightSectionFigures,
} from '../components/SectionFigures';
import Card from '../components/Card';

import { getRecentProjects } from '../utils/gitHubAdapter';
import { getImageLink } from '../utils/s3Adapter';

const Home = ({ projects }) => {
  const project = projects[0]
  console.log(project)
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
      <main>
        <section className="introduction">
          <h1>Hello World!</h1>
          <p>
            I’m Jorge Pasco, a software engineer based in Peru 🇵🇪. I currently
            work at Makrwatch, where I focus on backend services to help the
            company keep up with its exponential growth. I have experience as a
            front-end developer, and the technologies I love and use the most
            are Python🐍/Flask and JavaScript/React ⚛️.
          </p>
          <p>
            I'm self-taught and passionate about learning new technologies and
            solving problems. You can take a look a my resume 🙌. Reach out to
            me by filling out this form, or email me at jorgepascosoto@gmail.com
            📩
          </p>
        </section>

        <section className="projects">
          <h2>Latest Projects</h2>

          <Card title={project.name} description={project.description} link={project.html_url} imageLink={project.imageLink} width="30rem"/>
        </section>
      </main>
    </>
  );
};

export async function getStaticProps() {
  let projects = await getRecentProjects();
  projects = await Promise.all(
    projects.map(async (project) => {
      const imageLink = await getImageLink(project.name);
      return {
        ...project,
        imageLink,
      };
    })
  );

  return { props: { projects } };
}

export default Home;
