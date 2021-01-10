import Head from 'next/head';

export default function Home() {
  return (
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
        </div>
        <div className="right-section">
          <div className="right-section__nav-bar nav-bar">
            <a href="#" className="nav-bar__item active">
              About
            </a>
            <a href="#" className="nav-bar__item">
              Work
            </a>
            <a href="#" className="nav-bar__item">
              Blog
            </a>
          </div>
          <div className="right-section__profile profile">
            <img src="/assets/profile.png"></img>
            <div className="profile__name">Jorge Pasco</div>
            <div className="profile__title">Software Engineer</div>
          </div>
          <div className="right_section__footer footer">
            <img src="/assets/logos/linkedin.svg" alt="LinkedIn Logo" />
            <img src="/assets/logos/github.svg" alt="Github Logo" />
          </div>
        </div>
      </div>
    </>
  );
}
