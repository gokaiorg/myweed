import { Box, Text } from '@chakra-ui/react';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectCoverflow } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import Link from 'next/link';
import { SocialMediaIcons } from '../components/SocialMediaIcons';

export const HomeSlider = () => {
  SwiperCore.use([Autoplay]);
  return (
    <Box position="relative" w="100%" h={{ base: '600px' }}>
      <Image
        src="/my-weed-cannabis-shop.png"
        alt="ok"
        fill
        style={{ objectFit: 'cover' }}
      />
      <Box
        position="absolute"
        zIndex="1"
        top="0"
        bottom={0}
        left={0}
        right={0}
        margin="auto"
        textAlign="center"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        fontWeight="black"
        color="white"
        fontFamily="Arial"
        px={10}
        bgColor="ghostVerse.dark.ultralight"
        backdropFilter="blur(3px)"
      >
        <Text
          as="h1"
          fontSize={{ base: '3xl', md: '6xl' }}
          marginBottom={4}
          fontFamily="Arial"
        >
          Premium organic cannabis flowers
        </Text>
        <Text as="p" fontSize={{ base: '2xl', md: '4xl' }}>
          Shop with us today and discover the difference that truly organic
          cannabis can make.
        </Text>
        <Text
          display="inline-flex"
          color="white"
          borderColor="white"
          p={6}
          mt={10}
          mx="auto"
          fontFamily="Arial"
        >
          <SocialMediaIcons />
        </Text>
      </Box>
    </Box>
  );
};
