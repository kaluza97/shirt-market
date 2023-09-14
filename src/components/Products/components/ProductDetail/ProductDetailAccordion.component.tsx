import { FC } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  productDetailDescription,
  productDetailPostText,
  productDetailPreText,
} from '@/data/product.data';
import {
  AccordionContainer,
  descriptionBoldText,
  descriptionText,
} from '@/components/Products/Products.styles';

export const ProductDetailAccordion: FC = () => (
  <AccordionContainer>
    <Typography sx={descriptionText}>{productDetailPreText}</Typography>
    {productDetailDescription.map(({ title, description }) => (
      <Accordion key={title}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={title}
          id={title}
        >
          <Typography sx={descriptionBoldText}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={descriptionText}>{description}</Typography>
        </AccordionDetails>
      </Accordion>
    ))}
    <Typography sx={descriptionText}>{productDetailPostText}</Typography>
  </AccordionContainer>
);
