import { FC } from 'react';
import { Paper, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { carouselData } from '@/data/carousel.data';
import { carousel, paper } from '@/components/Carousel/Carousel.styles';
import { PagePaths } from '@/constants/pages';
import {
  LinkTextWhite,
  headerTextWhite,
  normalTextWhite,
} from '@/styles/global.styles';

export const SliderCarousel: FC = () => (
  <Carousel IndicatorIcon={null} sx={carousel}>
    {carouselData.map(({ name, description, link }) => (
      <Paper key={name} sx={paper}>
        <Typography sx={headerTextWhite}>{name}</Typography>
        <Typography sx={normalTextWhite}>{description}</Typography>
        {link && (
          <LinkTextWhite href={`${PagePaths.BROWSE_PAGE}/sale`}>
            Check offer!
          </LinkTextWhite>
        )}
      </Paper>
    ))}
  </Carousel>
);
