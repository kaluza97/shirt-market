import { PagePaths } from '@/constants/pages';

type BannerItem = {
  src: string;
  alt: string;
  path: string;
};

export const bannerData: Array<BannerItem> = [
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/shirt-market-8ba7b.appspot.com/o/forMen.jpg?alt=media&token=c64106c2-a54c-4185-aae8-f3ee555671c3',
    alt: 'Men in white outfit',
    path: `${PagePaths.BROWSE_PAGE}/men`,
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/shirt-market-8ba7b.appspot.com/o/forWoman.jpg?alt=media&token=0b501e31-142b-4c90-9dea-cba97d5fe916',
    alt: 'Woman in orange outfit',
    path: `${PagePaths.BROWSE_PAGE}/woman`,
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/shirt-market-8ba7b.appspot.com/o/summerSale.jpg?alt=media&token=7303d797-bec3-45f5-a8ce-29127359d013',
    alt: 'Men in summer outfit',
    path: `${PagePaths.BROWSE_PAGE}/sale`,
  },
];
