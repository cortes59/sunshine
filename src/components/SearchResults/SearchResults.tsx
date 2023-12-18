import { Stack, Typography } from '@mui/material'
import { FC } from 'react'
import { NumericFormat } from 'react-number-format'
import {
  donationsActivitySummaryMock,
  spendingActivitySummaryMock,
} from './data'
import { SearchSummary } from './SearchSummary'
import { SearchChart } from './SearchChart'
import { SearchActivities } from './SearchActivites'

const NumberFormatter = ({ value }: { value: number }) => {
  return (
    <NumericFormat value={value} displayType="text" thousandSeparator="," />
  )
}

export const SearchResults: FC = () => {
  return (
    <Stack spacing={3}>
      <SearchSummary />
      <SearchChart />
      <SearchActivities />
    </Stack>
  )
}
