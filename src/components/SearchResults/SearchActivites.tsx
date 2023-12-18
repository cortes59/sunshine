import { Box, Divider, Stack, Typography } from '@mui/material'
import { FC } from 'react'
import { FilingItem } from './ActivityItem/FilingItem'
import { donationsMock, filingMock } from './data'
import { DonationItem } from './ActivityItem/DonationItem'

export const SearchActivities: FC = () => {
  return (
    <Stack spacing={1}>
      <Box>
        <Typography variant="h6">
          361,377 activity items for this search
        </Typography>
        <Divider />
      </Box>
      <FilingItem item={filingMock[0]} />
      <DonationItem item={donationsMock[0]} />
    </Stack>
  )
}
