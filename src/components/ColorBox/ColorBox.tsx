import { Box } from '@mui/material'
import { FC } from 'react'

interface ColorBoxProps {
  color: string
}
export const ColorBox: FC<ColorBoxProps> = ({ color }) => {
  return (
    <Box
      sx={{
        display: 'inline-block',
        backgroundColor: color,
        width: 8,
        height: 8,
        maxWidth: 8,
        maxHeight: 8,
      }}
    />
  )
}
