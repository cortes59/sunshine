import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { FC, ReactNode } from 'react'

interface SearchAccordionProps {
  title: string
  children: ReactNode | ReactNode[]
}

export const SearchAccordion: FC<SearchAccordionProps> = ({
  title,
  children,
}) => {
  return (
    <Accordion sx={{ boxShadow: 'none', border: 'none' }} defaultExpanded>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{ backgroundColor: '#EFEFEF' }}
      >
        <Typography sx={{ fontWeight: 'bold' }}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  )
}
