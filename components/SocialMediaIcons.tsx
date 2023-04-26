import { SocialIcon } from 'react-social-icons';
import { Box } from '@chakra-ui/react';

export const SocialMediaIcons = () => {
  return (
    <Box display="flex" alignItems="center" gap={3}>
      <Box bgColor="black" borderRadius="100%">
        <SocialIcon
          url="https://www.facebook.com/profile.php?id=100084502602383"
          bgColor="#C0DC37"
          style={{ width: 60, height: 60 }}
        />
      </Box>
      <Box bgColor="black" borderRadius="100%">
        <SocialIcon
          url="https://api.whatsapp.com/send?phone=%2B66885954313&app=facebook&entry_point=page_cta&fbclid=IwAR1T4Xdr6MuhzECOBuaDR2f3j9tsh-E7t7VntKxnhulKYtJdv2loMEcUabk"
          bgColor="#C0DC37"
          style={{ width: 60, height: 60 }}
        />
      </Box>
    </Box>
  );
};
