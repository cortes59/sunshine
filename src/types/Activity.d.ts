interface ActivitySummary {
  amountCandidates: number
  amountPACs: number
  candidatesCount: number
  pacsCount: number
}

export interface DonationsActivitySummary extends ActivitySummary {
  donorsCount: number
}

export interface SpendingActivitySummary extends ActivitySummary {
  vendorsCount: number
}

export interface Type {
  id: number
  name: string
}

export interface CandidatePACOffice {
  id: number
  name: string
}

export interface CandidatePAC {
  id: number
  type: Type
  office: CandidatePACOffice
  name: string
}

export interface Donor {
  id: number
  name: string
}

export interface Donation {
  id: number
  type: Type
  donor: Donor
  candidate_pac: CandidatePAC
  amount: number
  date: Date
}

export interface Vendor {
  id: number
  name: string
}

export interface Spending {
  id: number
  type: Type
  vendor: Vendor
  candidate_pac: CandidatePAC
  code: string
  amount: number
  date: Date
}

export interface Activity {
  id: number
  type: Type
  date: Date
  spending?: Spending
  donation?: Donation
}

export interface Filing {
  id: number
  type: Type
  candidate_pac: CandidatePAC
  cash?: number
  loan?: number
  document_url: string
  document_title: string
  date: Date
  activities: Activity[]
}
