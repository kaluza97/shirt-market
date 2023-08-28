import { FC } from 'react';
import { Paper, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { carouselData } from '@/data/carousel.data';
import {
  LinkStyled,
  carouselContent,
  carouselDescriptionText,
  carouselNameText,
} from '@/components/Carousel/Carousel.styles';

export const SliderCarousel: FC = () => {
  return (
    <Carousel IndicatorIcon={null}>
      {carouselData.map(({ name, description, link }) => (
        <Paper key={name} sx={carouselContent}>
          <Typography sx={carouselNameText}>{name}</Typography>
          <Typography sx={carouselDescriptionText}>{description}</Typography>
          {link && <LinkStyled href="/about">Check offer!</LinkStyled>}
        </Paper>
      ))}
    </Carousel>
  );
};
