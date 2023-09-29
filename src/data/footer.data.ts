type FooterLink = {
  href: string;
  text: string;
  src: string;
};

type FooterItem = {
  header: string;
  links?: Array<string>;
  socialLinks?: Array<FooterLink>;
};

export const footerData: Array<FooterItem> = [
  {
    header: 'About us',
    links: ['Our Story', 'Our Mission', 'Why Choose Us', 'Meet the Team'],
  },
  {
    header: 'Contact Us',
    links: ['Contact Information', 'Send Us a Message'],
  },
  {
    header: 'Help',
    links: [
      'Order Status',
      'Shipping and Delivery',
      'Returns',
      'Payment Options',
      'FAQ',
    ],
  },
  {
    header: 'Website created by Piotr Kałużny',
    socialLinks: [
      {
        href: 'https://twitter.com/PiotrKauny2',
        text: 'Twitter',
        src: '/assets/twitterLogo.png',
      },
      {
        href: 'https://github.com/kaluza97',
        text: 'Github',
        src: '/assets/githubLogo.png',
      },
      {
        href: 'https://www.linkedin.com/in/piotr-kaluzny-066183177/',
        text: 'LinkedIn',
        src: '/assets/linkedinLogo.png',
      },
      {
        href: 'https://www.facebook.com/kaluza97/',
        text: 'Facebook',
        src: '/assets/facebookLogo.png',
      },
      {
        href: 'https://www.instagram.com/piotr_kaluzny1/',
        text: 'Instagram',
        src: '/assets/instagramLogo.png',
      },
    ],
  },
];
