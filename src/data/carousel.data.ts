type CarouselItem = {
  name: string;
  description: string;
  link?: string;
};

export const carouselData: Array<CarouselItem> = [
  {
    name: 'New collection',
    description: 'Check out the latest offer with fashionable t-shirts!',
    link: '/collections/new',
  },
  {
    name: 'Shopping discount with code',
    description:
      'Special promotion! With the code HAPPYUSER you will get a 10% rabat!',
  },
];
