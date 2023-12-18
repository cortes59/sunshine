import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {
  ActivitySummary,
  Donation,
  DonationsActivitySummary,
  Filing,
  Spending,
  SpendingActivity,
  SpendingActivitySummary,
} from '../../types/Activity'
import {
  ACTIVITY_TYPES,
  donationType,
  donationsActivitySummaryMock,
  donationsMock,
  filingMock,
  filingType,
  spendingActivitySummaryMock,
  spendingMock,
  spendingType,
} from '../../components/SearchResults/data'
import { ISearchFormInputs, SearchResults } from '../../types/SearchForm'

export interface SearchState {
  searchResults: SearchResults
}

const donationActivities = donationsMock.map((donation, index) => ({
  id: index + 1,
  type: donationType,
  date: new Date(),
  donation,
}))
const spendingActivities = spendingMock.map((spending, index) => ({
  spending,
  id: index + 1,
  type: spendingType,
  date: new Date(),
}))
const filingActivities = filingMock.map((filing, index) => ({
  id: index + 1,
  type: filingType,
  date: new Date(),
  filing,
}))

const initialSearchResults: SearchResults = {
  results: [...donationActivities, ...spendingActivities, ...filingActivities],
  donationsActivitySummary: donationsActivitySummaryMock,
  spendingActivitySummary: spendingActivitySummaryMock,
}

const initialState: SearchState = {
  searchResults: { ...initialSearchResults },
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    submitSearch: (state, action: PayloadAction<ISearchFormInputs>) => {
      // mock search/filtering
      const { activityTypes } = action.payload
      const searchResults: SearchResults = { results: [] }
      // For now, only apply activity types
      if (activityTypes.includes(ACTIVITY_TYPES[0].id)) {
        {
          searchResults.results.push(...donationActivities)
          searchResults.donationsActivitySummary = donationsActivitySummaryMock
        }
      }
      if (activityTypes.includes(ACTIVITY_TYPES[1].id)) {
        searchResults.results.push(...spendingActivities)
        searchResults.spendingActivitySummary = spendingActivitySummaryMock
      }
      if (activityTypes.includes(ACTIVITY_TYPES[2].id)) {
        searchResults.results.push(...filingActivities)
      }
      searchResults.results.sort((a, b) => a.date.getTime() - b.date.getTime())
      state.searchResults = searchResults
    },
  },
})

export const { submitSearch } = searchSlice.actions

export default searchSlice.reducer
