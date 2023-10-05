import React, { FC } from 'react';
import Link from 'next/link';
import { categoryData } from '@/data/category.data';
import { Button } from '@mui/material';
import Image from 'next/image';
import { PagePaths } from '@/constants/pages';
import { FlexContainer, button } from '@/styles/global.styles';
import {
  CategoryBox,
  ImageWrapper,
} from '@/components/Category/Category.styles';

export const Category: FC = () => (
  <FlexContainer>
    <ImageWrapper>
      <Image
        src="/assets/friends.jpg"
        alt="happy friends on vacation"
        fill
        priority
      />
    </ImageWrapper>
    {categoryData.map(({ name }) => (
      <CategoryBox key={name}>
        <Button sx={button}>
          <Link href={`${PagePaths.BROWSE_PAGE}/${name}`}>
            {name.toUpperCase()}
          </Link>
        </Button>
      </CategoryBox>
    ))}
  </FlexContainer>
);
