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
import { useAppSelector } from '../../app/hooks'

const NumberFormatter = ({ value }: { value: number }) => {
  return (
    <NumericFormat value={value} displayType="text" thousandSeparator="," />
  )
}

export const SearchResults: FC = () => {
  const { searchResults } = useAppSelector((state) => state.search)

  return (
    <Stack spacing={3}>
      <SearchSummary
        donationsActivitySummary={searchResults.donationsActivitySummary}
        spendingsActivitySummary={searchResults.spendingActivitySummary}
      />
      <SearchChart />
      <SearchActivities results={searchResults.results} />
    </Stack>
  )
}
