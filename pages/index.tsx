import Head from 'next/head';
import { useRef } from 'react';

import { Hero, MainContent } from '../sections/indexSections';

import { getRecentProjects } from '../utils/gitHubAdapter';
import { getImageLink } from '../utils/s3Adapter';

const Home = ({ projects }) => {
  const mainContentRef = useRef(null);

  return (
    <>
      <Head>
        <title>Jorge Pasco</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Hero mainContentRef={mainContentRef} />
      <MainContent mainContentRef={mainContentRef} projects={projects} />
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
