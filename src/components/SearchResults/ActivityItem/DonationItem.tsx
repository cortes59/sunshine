import { FC } from 'react'
import { Donation } from '../../../types/Activity'
import { Box, Typography } from '@mui/material'
import format from 'date-fns/format'
import { NumberFormatter } from '../../NumberFormatter/NumberFormatter'
import { ColorBox } from '../../ColorBox/ColorBox'

interface DonationItemProps {
  item: Donation
}

export const DonationItem: FC<DonationItemProps> = ({ item }) => {
  return (
    <Box>
      <Box>
        <Typography component="span" variant="caption">
          <ColorBox color="green" /> {format(item.date, 'yyyy MMM dd')}
        </Typography>{' '}
        <Typography sx={{ fontWeight: 'bold' }} component="span">
          {item.donor.name}
        </Typography>{' '}
        <Typography component="span">donated</Typography>{' '}
        <Typography
          component="span"
          sx={{ fontWeight: 'bold', color: 'green' }}
        >
          $<NumberFormatter value={item.amount} />
        </Typography>{' '}
        <Typography component="span">to</Typography>{' '}
        <Typography sx={{ fontWeight: 'bold' }} component="span">
          {item.candidate_pac.name}
        </Typography>
      </Box>
    </Box>
  )
}
