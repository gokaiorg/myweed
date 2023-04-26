import { NextPage } from 'next';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import xml2js from 'xml2js';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import Link from 'next/link';
import { Box } from '@chakra-ui/react';

const SitemapPage: NextPage = () => {
  const [sitemapLinks, setSitemapLinks] = useState<string[]>([]);

  useEffect(() => {
    const fetchSitemap = async () => {
      try {
        const res = await fetch('/sitemap-0.xml');
        const xmlData = await res.text();
        const jsonData = await xml2js.parseStringPromise(xmlData);
        const links = jsonData.urlset.url.map((url: any) => url.loc[0]);
        setSitemapLinks(links);
      } catch (err) {
        console.error(err);
      }
    };
    fetchSitemap();
  }, []);

  return (
    <>
      <Head>
        <title>My Weed - Sitemap.</title>
        <meta
          name="description"
          content="Looking for a quick and easy way to navigate the My Weed website? Check out our sitemap page, where you can find links to all of our main pages and subsections. From our cannabis products to our membership program and more, our sitemap makes it easy to find what you're looking for. Browse through our website with ease and discover all that My Weed has to offer."
        />
        <meta property="og:title" content="My Weed - Sitemap." />
        <meta
          property="og:description"
          content="Looking for a quick and easy way to navigate the My Weed website? Check out our sitemap page, where you can find links to all of our main pages and subsections. From our cannabis products to our membership program and more, our sitemap makes it easy to find what you're looking for. Browse through our website with ease and discover all that My Weed has to offer."
        />
        <meta property="og:image" content="https://myweed.in/social.png" />
        <meta property="og:image:width" content="2400" />
        <meta property="og:image:height" content="1260" />
        <meta property="og:url" content="https://myweed.in/sitemap" />
        <meta name="twitter:title" content="My Weed - Sitemap." />
        <meta
          name="twitter:description"
          content="Looking for a quick and easy way to navigate the My Weed website? Check out our sitemap page, where you can find links to all of our main pages and subsections. From our cannabis products to our membership program and more, our sitemap makes it easy to find what you're looking for. Browse through our website with ease and discover all that My Weed has to offer."
        />
        <meta name="twitter:image" content="https://myweed.in/social.png" />
        <meta name="twitter:url" content="https://myweed.in/sitemap" />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <HomeSectionTitle title="Sitemap - All links you need!" />
        {sitemapLinks.map((link) => (
          <Box key={link} color="ghostVerse.green.base">
            <Link href={link} title={link} passHref>
              {link}
            </Link>
          </Box>
        ))}
      </MainLayout>
    </>
  );
};

export default SitemapPage;
