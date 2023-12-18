import {
  CandidatePAC,
  CandidatePACOffice,
  Donation,
  DonationsActivitySummary,
  Donor,
  Filing,
  Spending,
  SpendingActivitySummary,
  Type,
  Vendor,
} from '../../types/Activity'

export const donationsActivitySummaryMock: DonationsActivitySummary = {
  donorsCount: 70509,
  amountCandidates: 35976570,
  amountPACs: 26979138,
  candidatesCount: 1386,
  pacsCount: 296,
}

export const spendingActivitySummaryMock: SpendingActivitySummary = {
  candidatesCount: 1386,
  pacsCount: 296,
  amountCandidates: 33584191,
  amountPACs: 22958658,
  vendorsCount: 19365,
}

export const vendorsMock: Vendor[] = [
  {
    id: 1,
    name: 'John Crowder',
  },
  {
    id: 2,
    name: ' Alex Caval for Idaho State Senate',
  },
]

export const officeMock: CandidatePACOffice[] = [
  {
    id: 1,
    name: 'State Senator',
  },
  {
    id: 2,
    name: 'Office 2',
  },
]
export const candidateType: Type = { id: 1, name: 'candidate' }
export const pacType: Type = { id: 2, name: 'pac' }
export const donationType: Type = { id: 3, name: 'Cash' }
export const spendingType: Type = { id: 4, name: 'Cash' }
export const filingTypeLoan: Type = { id: 5, name: 'Loan' }
export const filingTypeCash: Type = { id: 6, name: 'Cash' }
export const activityTypeDonation: Type = { id: 6, name: 'Donation' }

export const candidatePACMock: CandidatePAC[] = [
  {
    id: 1,
    name: 'Dawn Morrell',
    office: officeMock[0],
    type: candidateType,
  },
  {
    id: 1,
    name: 'Kootenai County Republican Central Committee',
    office: officeMock[1],
    type: pacType,
  },
]

const donorMock: Donor[] = [
  {
    id: 1,
    name: 'Idaho Freedom Caucus PAC',
  },
  {
    id: 2,
    name: 'Stefan Gleason',
  },
]

export const donationsMock: Donation[] = [
  {
    id: 1,
    amount: 1000,
    candidate_pac: candidatePACMock[0],
    type: donationType,
    date: new Date(),
    donor: donorMock[0],
  },
  {
    id: 2,
    amount: 200,
    candidate_pac: candidatePACMock[1],
    type: donationType,
    date: new Date(),
    donor: donorMock[1],
  },
]

export const spendingMock: Spending[] = [
  {
    id: 1,
    amount: 1000,
    candidate_pac: candidatePACMock[0],
    code: '123',
    date: new Date(),
    type: spendingType,
    vendor: vendorsMock[0],
  },
  {
    id: 2,
    amount: 1000,
    candidate_pac: candidatePACMock[1],
    code: '123',
    date: new Date(),
    type: spendingType,
    vendor: vendorsMock[1],
  },
]

export const filingMock: Filing[] = [
  {
    id: 1,
    type: filingTypeCash,
    candidate_pac: candidatePACMock[0],
    cash: 1000,
    date: new Date(),
    document_url: 'https://google.com',
    document_title: 'Timed Contribution Report',
    activities: [
      {
        id: 1,
        type: activityTypeDonation,
        donation: donationsMock[0],
        date: new Date(),
      },
    ],
  },
  {
    id: 2,
    type: filingTypeLoan,
    candidate_pac: candidatePACMock[2],
    loan: 1000,
    date: new Date(),
    document_url: 'https://google.com',
    document_title: '2023 December-Annual Report',
    activities: [],
  },
]
