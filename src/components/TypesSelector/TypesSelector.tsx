import { Checkbox, FormControlLabel } from '@mui/material'
import { FC } from 'react'

export interface ITypeOption {
  id: number
  name: string
}

export interface ITypesSelectorProps {
  value: number[]
  onChange: (value: number[]) => void
  options: ITypeOption[]
}
export const TypesSelector: FC<ITypesSelectorProps> = ({
  value,
  onChange,
  options,
}) => {
  const onOptionChange = (option: ITypeOption) => () => {
    const newValue = value.slice()

    if (newValue.includes(option.id)) {
      newValue.splice(newValue.indexOf(option.id), 1)
    } else {
      newValue.push(option.id)
    }

    onChange(newValue)
  }

  return (
    <>
      {options.map((type) => (
        <FormControlLabel
          key={`type-${type.id}`}
          control={
            <Checkbox
              checked={value.includes(type.id)}
              onChange={onOptionChange(type)}
            />
          }
          label={type.name}
        />
      ))}
    </>
  )
}
