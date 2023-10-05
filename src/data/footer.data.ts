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
        src: 'https://firebasestorage.googleapis.com/v0/b/shirt-market-8ba7b.appspot.com/o/twitterLogo.png?alt=media&token=854eff23-34ee-461b-af66-7e730ac06789',
      },
      {
        href: 'https://github.com/kaluza97',
        text: 'Github',
        src: 'https://firebasestorage.googleapis.com/v0/b/shirt-market-8ba7b.appspot.com/o/githubLogo.png?alt=media&token=bd4a9008-68c3-4477-a75c-78aebf20f471',
      },
      {
        href: 'https://www.linkedin.com/in/piotr-kaluzny-066183177/',
        text: 'LinkedIn',
        src: 'https://firebasestorage.googleapis.com/v0/b/shirt-market-8ba7b.appspot.com/o/linkedinLogo.png?alt=media&token=590a85c4-e1aa-4efe-9884-9e72b367b0a1',
      },
      {
        href: 'https://www.facebook.com/kaluza97/',
        text: 'Facebook',
        src: 'https://firebasestorage.googleapis.com/v0/b/shirt-market-8ba7b.appspot.com/o/facebookLogo.png?alt=media&token=d055c458-ae3b-4923-83d5-969f2250bbdf',
      },
      {
        href: 'https://www.instagram.com/piotr_kaluzny1/',
        text: 'Instagram',
        src: 'https://firebasestorage.googleapis.com/v0/b/shirt-market-8ba7b.appspot.com/o/instagramLogo.png?alt=media&token=d1e3d7c7-bfce-4369-aa42-a62525e6922e',
      },
    ],
  },
];
