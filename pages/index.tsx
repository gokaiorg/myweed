import type { NextPage } from 'next';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import Head from 'next/head';
import { HomeSlider } from '../components/HomeSlider';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>My Weed - Premium organic cannabis flowers.</title>
        <meta
          name="description"
          content="At My Weed, our carefully cultivated and expertly curated selection of top-quality strains is designed to satisfy the most discerning cannabis connoisseurs. From earthy, robust indica strains to uplifting, energizing sativas, our flowers offer a range of effects and flavors to suit any taste."
        />
        <meta
          property="og:title"
          content="My Weed - Premium organic cannabis flowers."
        />
        <meta
          property="og:description"
          content="At My Weed, our carefully cultivated and expertly curated selection of top-quality strains is designed to satisfy the most discerning cannabis connoisseurs. From earthy, robust indica strains to uplifting, energizing sativas, our flowers offer a range of effects and flavors to suit any taste."
        />
        <meta property="og:image" content="https://myweed.in/social.png" />
        <meta property="og:image:width" content="2400" />
        <meta property="og:image:height" content="1260" />
        <meta property="og:url" content="https://myweed.in/" />
        <meta name="twitter:title" content="My Weed." />
        <meta
          name="twitter:description"
          content="At My Weed, our carefully cultivated and expertly curated selection of top-quality strains is designed to satisfy the most discerning cannabis connoisseurs. From earthy, robust indica strains to uplifting, energizing sativas, our flowers offer a range of effects and flavors to suit any taste."
        />
        <meta name="twitter:image" content="https://myweed.in/social.png" />
        <meta name="twitter:url" content="https://myweed.in/" />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        {/* <HomeSectionTitle title="My Weed ร้าน ขาย กัญชา." /> */}
        <HomeSlider />
      </MainLayout>
    </>
  );
};

export default Home;
