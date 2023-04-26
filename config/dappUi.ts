// This configuration file keeps all UI constants and settings
// Specific to the minter dapp use case, these aren't important when you want to build something custom
// Added in one place for convenience

// Your Dapp hostname example: https://www.mydapp.com it should come from env vars
export const dappHostname = process.env.NEXT_PUBLIC_DAPP_HOST;

// HTML metata and og tags, default values for MetaHead.tsx component
export const defaultMetaTags = {
  title: 'My Weed ร้าน ขาย กัญชา.',
  description:
    'My Weed is a cannabis shop in Phuket offering a wide variety of locally-sourced and organic products, including flowers, edibles, and accessories.',
  shortname: 'My Weed',
  image: `${dappHostname}/social.png`,
};

export const bakery = [
  {
    name: 'Brownie - 30G',
    price: '250',
    pageLink: '/space-cake-brownie',
  },
];
