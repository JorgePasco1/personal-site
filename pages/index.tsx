import Head from 'next/head';
import { useRef } from 'react';

import { ProjectInfo, GetStaticPropsReturn } from '../utils/types';
import { Hero, MainContent } from '../components/index/sections/indexSections';

import { getRecentProjects } from '../proxies/gitHubProxy';
import { getImageLink } from '../proxies/s3Proxy';
import styles from './index.module.scss';

const Home: React.FC<{ projects: ProjectInfo[] }> = ({ projects }) => {
  const mainContentRef = useRef(null);

  return (
    <>
      <Head>
        <title>Jorge Pasco</title>
        <meta name="description" content="Software Engineer Portfolio" />
        <meta
          name="keyword"
          content="portfolio, javascript, developer, engineer, software, backend, frontend"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Jorge Pasco | Software Engineer" />
        <meta property="og:description" content="Software Engineer Portfolio" />
        <meta property="og:url" content="https://www.jorgepasco.me" />
        <meta property="og:type" content="website" />
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

  return { props: { projects }, revalidate: 60 * 60 * 24 };
};

export default Home;
