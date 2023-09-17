import { PagePaths } from '@/constants/pages';

type BannerItem = {
  src: string;
  alt: string;
  path: string;
};

export const bannerData: Array<BannerItem> = [
  {
    src: '/assets/forMen.jpg',
    alt: 'Men in white outfit',
    path: `${PagePaths.BROWSE_PAGE}/men`,
  },
  {
    src: '/assets/forWoman.jpg',
    alt: 'Woman in orange outfit',
    path: `${PagePaths.BROWSE_PAGE}/woman`,
  },
  {
    src: '/assets/summerSale.jpg',
    alt: 'Men in summer outfit',
    path: `${PagePaths.BROWSE_PAGE}/sale`,
  },
];
