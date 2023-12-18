import { Box, Divider, Stack, Typography } from '@mui/material'
import { FC } from 'react'
import { DonationItem } from './ActivityItem/DonationItem'
import { SearchResultItem } from '../../types/SearchForm'
import {
  Donation,
  DonationActivity,
  Filing,
  FilingActivity,
  Spending,
  SpendingActivity,
} from '../../types/Activity'
import { SpendingItem } from './ActivityItem/SpendingItem'
import { FilingItem } from './ActivityItem/FilingItem'

interface SearchActivitesProps {
  results: SearchResultItem[]
}
export const SearchActivities: FC<SearchActivitesProps> = ({ results }) => {
  return (
    <Stack spacing={1}>
      <Box>
        <Typography variant="h6">
          {results.length} activity items for this search
        </Typography>
        <Divider />
      </Box>
      {results.map((result, index) =>
        result.type.name === 'Donation' ? (
          <DonationItem
            key={`donation-${result.id}`}
            item={(result as DonationActivity).donation}
          />
        ) : result.type.name === 'Spending' ? (
          <SpendingItem
            key={`spending-${result.id}`}
            item={(result as SpendingActivity).spending}
          />
        ) : result.type.name === 'Filing' ? (
          <FilingItem
            key={`filing-${result.id}`}
            item={(result as FilingActivity).filing}
          />
        ) : null
      )}
    </Stack>
  )
}
