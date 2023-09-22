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
        src="https://firebasestorage.googleapis.com/v0/b/shirt-market-8ba7b.appspot.com/o/friends.jpg?alt=media&token=35be86db-a6ed-46c9-b420-640537043375"
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
