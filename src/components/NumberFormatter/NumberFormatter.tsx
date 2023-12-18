import { NumericFormat } from 'react-number-format'

export const NumberFormatter = ({ value }: { value: number }) => {
  return (
    <NumericFormat value={value} displayType="text" thousandSeparator="," />
  )
}
