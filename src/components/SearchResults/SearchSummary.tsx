import { FC } from 'react'
import { Stack, Typography } from '@mui/material'
import { NumericFormat } from 'react-number-format'
import {
  donationsActivitySummaryMock,
  spendingActivitySummaryMock,
} from './data'
import { NumberFormatter } from '../NumberFormatter/NumberFormatter'


export const SearchSummary: FC = () => {
  return (
    <Stack spacing={1}>
      <Typography variant="caption">In This Search...</Typography>
      <Typography>
        <Typography sx={{ fontWeight: 'bold' }} component="span">
          <NumberFormatter value={donationsActivitySummaryMock.donorsCount} />{' '}
          Donors
        </Typography>{' '}
        gave{' '}
        <Typography
          sx={{ color: 'green', fontWeight: 'bold' }}
          component="span"
        >
          $
          <NumberFormatter
            value={
              donationsActivitySummaryMock.amountCandidates +
              donationsActivitySummaryMock.amountPACs
            }
          />
        </Typography>{' '}
        to{' '}
        <Typography sx={{ fontWeight: 'bold' }} component="span">
          <NumberFormatter
            value={donationsActivitySummaryMock.candidatesCount}
          />{' '}
          Candidates
        </Typography>{' '}
        and{' '}
        <Typography sx={{ fontWeight: 'bold' }} component="span">
          <NumberFormatter value={donationsActivitySummaryMock.pacsCount} />{' '}
          PACs.
        </Typography>
      </Typography>
      <Typography>
        <Typography sx={{ fontWeight: 'bold' }} component="span">
          <NumberFormatter
            value={spendingActivitySummaryMock.candidatesCount}
          />{' '}
          Candidates
        </Typography>{' '}
        and{' '}
        <Typography sx={{ fontWeight: 'bold' }} component="span">
          <NumberFormatter value={spendingActivitySummaryMock.pacsCount} /> PACs
        </Typography>{' '}
        spent{' '}
        <Typography sx={{ fontWeight: 'bold', color: 'red' }} component="span">
          $
          <NumberFormatter
            value={
              spendingActivitySummaryMock.amountCandidates +
              spendingActivitySummaryMock.amountPACs
            }
          />
        </Typography>{' '}
        on{' '}
        <Typography sx={{ fontWeight: 'bold' }} component="span">
          <NumberFormatter value={spendingActivitySummaryMock.vendorsCount} />{' '}
          Vendors.
        </Typography>
      </Typography>
    </Stack>
  )
}
