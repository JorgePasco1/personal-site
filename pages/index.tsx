import Head from 'next/head';
import { useRef } from 'react';

import { ProjectInfo, GetStaticPropsReturn } from '../utils/types';
import { Hero, MainContent } from '../components/index/sections/indexSections';

import { getRecentProjects } from '../utils/gitHubAdapter';
import { getImageLink } from '../utils/s3Adapter';
import styles from './index.module.scss';

const Home: React.FC<{ projects: ProjectInfo[] }> = ({ projects }) => {
  const mainContentRef = useRef(null);

  return (
    <>
      <Head>
        <title>Jorge Pasco</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Hero mainContentRef={mainContentRef} styles={styles} />
      <MainContent
        mainContentRef={mainContentRef}
        projects={projects}
        styles={styles}
      />
    </>
  );
};

export const getStaticProps = async (): Promise<GetStaticPropsReturn> => {
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
};

export default Home;
