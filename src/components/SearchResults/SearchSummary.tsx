import { FC } from 'react'
import { Stack, Typography } from '@mui/material'
import { NumberFormatter } from '../NumberFormatter/NumberFormatter'
import { useAppSelector } from '../../app/hooks'
import {
  DonationsActivitySummary,
  SpendingActivitySummary,
} from '../../types/Activity'

interface SearchSummayProps {
  donationsActivitySummary?: DonationsActivitySummary
  spendingsActivitySummary?: SpendingActivitySummary
}

export const SearchSummary: FC<SearchSummayProps> = ({
  donationsActivitySummary,
  spendingsActivitySummary,
}) => {
  return (
    <Stack spacing={1}>
      <Typography variant="caption">In This Search...</Typography>
      {donationsActivitySummary ? (
        <Typography>
          <Typography sx={{ fontWeight: 'bold' }} component="span">
            <NumberFormatter value={donationsActivitySummary.donorsCount} />{' '}
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
                donationsActivitySummary.amountCandidates +
                donationsActivitySummary.amountPACs
              }
            />
          </Typography>{' '}
          to{' '}
          <Typography sx={{ fontWeight: 'bold' }} component="span">
            <NumberFormatter value={donationsActivitySummary.candidatesCount} />{' '}
            Candidates
          </Typography>{' '}
          and{' '}
          <Typography sx={{ fontWeight: 'bold' }} component="span">
            <NumberFormatter value={donationsActivitySummary.pacsCount} /> PACs.
          </Typography>
        </Typography>
      ) : null}

      {spendingsActivitySummary ? (
        <Typography>
          <Typography sx={{ fontWeight: 'bold' }} component="span">
            <NumberFormatter value={spendingsActivitySummary.candidatesCount} />{' '}
            Candidates
          </Typography>{' '}
          and{' '}
          <Typography sx={{ fontWeight: 'bold' }} component="span">
            <NumberFormatter value={spendingsActivitySummary.pacsCount} /> PACs
          </Typography>{' '}
          spent{' '}
          <Typography
            sx={{ fontWeight: 'bold', color: 'red' }}
            component="span"
          >
            $
            <NumberFormatter
              value={
                spendingsActivitySummary.amountCandidates +
                spendingsActivitySummary.amountPACs
              }
            />
          </Typography>{' '}
          on{' '}
          <Typography sx={{ fontWeight: 'bold' }} component="span">
            <NumberFormatter value={spendingsActivitySummary.vendorsCount} />{' '}
            Vendors.
          </Typography>
        </Typography>
      ) : null}
    </Stack>
  )
}
