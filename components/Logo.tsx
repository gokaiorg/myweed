import NextLink from 'next/link';
import { Box } from '@chakra-ui/react';
import Image from 'next/image';

export const Logo = () => {
  return (
    <NextLink href="/">
      <Box display="flex" alignItems="center">
        <Image
          src="/logo-my-weed.png"
          width={720}
          height={160}
          alt="My Weed - Premium organic cannabis flowers"
          title="My Weed - Premium organic cannabis flowers"
          layout="responsive"
        />
      </Box>
    </NextLink>
  );
};
