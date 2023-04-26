import { Text } from '@chakra-ui/react';
import { FC } from 'react';

interface HomeSectionTitleProps {
  title: string;
}

export const HomeSectionTitle: FC<HomeSectionTitleProps> = ({ title }) => {
  return (
    <Text
      as="h1"
      fontSize={{ base: '2xl', md: '3xl' }}
      fontFamily="Arial"
      display="flex"
      flexDirection="row"
      alignItems="center"
      marginRight={1}
      marginBottom={4}
    >
      {title}
    </Text>
  );
};
