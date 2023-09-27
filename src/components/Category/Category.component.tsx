import React, { FC } from 'react';
import Link from 'next/link';
import { categoryData } from '@/data/category.data';
import { Button } from '@mui/material';
import { ImageContainer, button } from '@/components/Category/Category.styles';
import Image from 'next/image';
import { PagePaths } from '@/constants/pages';

export const Category: FC = () => (
  <>
    {categoryData.map(({ name }) => (
      <Button sx={button} key={name}>
        <Link href={`${PagePaths.BROWSE_PAGE}/${name}`}>
          {name.toUpperCase()}
        </Link>
      </Button>
    ))}
    <ImageContainer>
      <Image
        src="/assets/friends.jpg"
        alt="happy friends on vacation"
        width={500}
        height={330}
        priority
      />
    </ImageContainer>
  </>
);
