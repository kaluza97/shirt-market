import styled from '@emotion/styled';
import { Colors, FontFamily, FontSizes, FontWeights } from '@/styles/variables';
import { SxProps } from '@mui/material';

export const CartItemsContainer = styled.div`
display: flex;
padding: 2rem;
box-shadow: 0 0.4rem 0.4rem -0.2rem ${Colors.shadow},
`

export const DescriptionContainer = styled.div`
display: flex;
flex-direction: column;
margin: 0 2rem;
`
export const EmptyCartContainer = styled(DescriptionContainer)`
align-items: center;
justify-content: center;
`

export const ButtonContainer = styled(DescriptionContainer)`
flex-direction: space-evently;
`

export const cartButton: SxProps = {
    fontFamily: FontFamily.sans,
    fontSize: FontSizes.extraSmall,
    fontWeight: FontWeights.bold,
    color: Colors.white,
    minWidth: '15rem'
};

export const descriptionText: SxProps = {
    fontSize: FontSizes.small,
    fontFamily: FontFamily.sans,
    color: Colors.blackLight,
};

export const headerText: SxProps = {
    fontSize: FontSizes.large,
    fontFamily: FontFamily.sans,
    color: Colors.blackLight,
    textAlign: 'center',
    margin: '2rem'
};