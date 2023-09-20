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
  accordion,
} from '@/components/Products/Products.styles';
import { boldText, normalTextBlack } from '@/styles/global.styles';

export const ProductDetailAccordion: FC = () => (
  <AccordionContainer>
    <Typography sx={normalTextBlack}>{productDetailPreText}</Typography>
    {productDetailDescription.map(({ title, description }) => (
      <Accordion key={title} sx={accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={title}
          id={title}
        >
          <Typography sx={boldText}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={normalTextBlack}>{description}</Typography>
        </AccordionDetails>
      </Accordion>
    ))}
    <Typography sx={normalTextBlack}>{productDetailPostText}</Typography>
  </AccordionContainer>
);
