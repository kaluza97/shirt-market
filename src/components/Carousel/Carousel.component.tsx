import { FC } from 'react';
import { Paper, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { carouselData } from '@/data/carousel.data';
import {
  LinkStyled,
  carousel,
  carouselContent,
  carouselDescriptionText,
  carouselNameText,
} from '@/components/Carousel/Carousel.styles';
import { PagePaths } from '@/constants/pages';

export const SliderCarousel: FC = () => (
  <Carousel IndicatorIcon={null} sx={carousel}>
    {carouselData.map(({ name, description, link }) => (
      <Paper key={name} sx={carouselContent}>
        <Typography sx={carouselNameText}>{name}</Typography>
        <Typography sx={carouselDescriptionText}>{description}</Typography>
        {link && (
          <LinkStyled href={PagePaths.ABOUT_PAGE}>Check offer!</LinkStyled>
        )}
      </Paper>
    ))}
  </Carousel>
);
