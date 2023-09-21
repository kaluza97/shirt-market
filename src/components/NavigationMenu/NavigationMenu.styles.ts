import { Colors, FontSizes, ZIndexes } from '@/styles/variables';
import styled from '@emotion/styled';
import { SxProps } from '@mui/material';

export const NavigationMenuHeight = '5rem';
export const NavigationMenuPadding = '1rem';

export const NavigationTopSpacer = styled.div`
  width: 100%;
  z-index: ${ZIndexes.background};
  padding: ${NavigationMenuPadding};
  height: ${NavigationMenuHeight};
`;

export const QuantityContainer = styled.div`
  position: absolute;
  min-width: 1.2rem;
  margin-left: 1.7rem;
  margin-top: 1rem;
  padding: 0.4rem;
  background-color: ${Colors.primary};
  color: ${Colors.white};
  border-radius: 100%;
  font-size: ${FontSizes.extraSmall};
`;

export const NavigationContainer = styled.div`
  position: fixed;
  background-color: ${Colors.white};
  width: 100%;
  z-index: ${ZIndexes.menu};
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${NavigationMenuPadding};
  height: ${NavigationMenuHeight};
`;

export const IconContainer = styled.div`
  margin-top: 0.5rem;
  margin-right: 2rem;
`;

export const menuIcon: SxProps = {
  width: '2.5rem',
  height: '2.5rem',
  color: Colors.primaryDark,
  marginRight: '0.5rem',
};

export const menuItem: SxProps = {
  minWidth: '15rem',
};

export const cartMenuItem: SxProps = {
  marginRight: '1rem',
};
