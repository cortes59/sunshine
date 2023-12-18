import { FC } from 'react'
import { Spending } from '../../../types/Activity'
import { Box, Typography } from '@mui/material'
import format from 'date-fns/format'
import { NumberFormatter } from '../../NumberFormatter/NumberFormatter'
import { ColorBox } from '../../ColorBox/ColorBox'

interface SpendingItemProps {
  item: Spending
}

export const SpendingItem: FC<SpendingItemProps> = ({ item }) => {
  return (
    <Box>
      <Box>
        <Typography component="span" variant="caption">
          <ColorBox color="red" /> {format(item.date, 'yyyy MMM dd')}
        </Typography>{' '}
        <Typography sx={{ fontWeight: 'bold' }} component="span">
          {item.candidate_pac.name}
        </Typography>{' '}
        <Typography component="span">spent</Typography>{' '}
        <Typography
          component="span"
          sx={{ fontWeight: 'bold', color: 'green' }}
        >
          $<NumberFormatter value={item.amount} />
        </Typography>{' '}
        <Typography component="span">on</Typography>{' '}
        <Typography sx={{ fontWeight: 'bold' }} component="span">
          {item.vendor.name}
        </Typography>
      </Box>
    </Box>
  )
}
