import { Input, Slider, Stack, Typography } from '@mui/material'
import { FC } from 'react'

interface IRangeSelectorProps {
  value: number[]
  defaultValue?: number[]
  onChange: (value: number[]) => void
  min: number
  max: number
}

export const RangeSelector: FC<IRangeSelectorProps> = ({
  value,
  onChange,
  min,
  max,
}) => {
  const onInputChange = (index: number) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const intValue = parseInt(e.target.value)
    if (intValue < min || intValue > max) {
      return null
    }
    const newValue = value.slice()
    newValue[index] = intValue
    onChange(newValue)
  }

  return (
    <Stack spacing={1}>
      <Slider
        min={min}
        max={max}
        valueLabelDisplay="auto"
        onChange={(_, val) => onChange(val as number[])}
        value={value}
      />
      <Stack direction="row" alignItems="center" spacing={2}>
        <Input
          type="number"
          startAdornment={'$'}
          value={value[0]}
          onChange={onInputChange(0)}
        />
        <Typography>to</Typography>
        <Input
          type="number"
          startAdornment={'$'}
          value={value[1]}
          onChange={onInputChange(1)}
        />
      </Stack>
    </Stack>
  )
}
