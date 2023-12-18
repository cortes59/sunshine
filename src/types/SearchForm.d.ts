import { DonationActivity, FilingActivity, SpendingActivity } from './Activity'

export type SearchResultItem =
  | DonationActivity
  | SpendingActivity
  | FilingActivity

export interface SearchResults {
  results: SearchResultItem[]
  spendingActivitySummary?: SpendingActivitySummary
  donationsActivitySummary?: DonationsActivitySummary
}

export interface ISearchFormInputs {
  activityStart: Date
  activityEnd: Date
  activityTypes: number[]
  activityAmounts: number[]
}
