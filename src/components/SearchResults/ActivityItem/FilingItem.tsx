import { FC, useState } from 'react'
import { Filing } from '../../../types/Activity'
import { Box, Button, Typography } from '@mui/material'
import format from 'date-fns/format'
import { ColorBox } from '../../ColorBox/ColorBox'

interface FilingItemProps {
  item: Filing
}
export const FilingItem: FC<FilingItemProps> = ({ item }) => {
  const [activityVisible, setActivityVisible] = useState(false)

  const onToggleActivityVisible = () => setActivityVisible(!activityVisible)

  return (
    <Box>
      <Box>
        <Typography component="span" variant="caption">
          <ColorBox color="black" /> {format(item.date, 'yyyy MMM dd')}
        </Typography>{' '}
        <Typography sx={{ fontWeight: 'bold' }} component="span">
          {item.candidate_pac.name}
        </Typography>{' '}
        <Typography variant="caption" sx={{ pt: '5px' }}>
          {item.candidate_pac.office.name}
        </Typography>{' '}
        <Typography component="span">filed a</Typography>{' '}
        <Typography
          sx={{ fontWeight: 'bold', color: 'black', textDecoration: 'none' }}
          component="a"
          href={item.document_url}
          target="_blank"
        >
          {item.document_title}
        </Typography>
      </Box>
      <Box>
        {/* Ensure we have the same spacing before the show-activity */}
        <Typography component="span" variant="caption" visibility="hidden">
          {format(item.date, 'yyyy MMM dd')}
        </Typography>{' '}
        <Box
          component="span"
          sx={{ display: 'inline-block', marginLeft: '0.3em' }}
        >
          <span
            style={{
              display: 'inline-block',
              width: 10,
              height: '0.9em',
              borderLeft: '1px solid #bbb',
              borderBottom: '1px solid #bbb',
              marginRight: 5,
              marginTop: -3,
            }}
          />
          <Button
            variant="text"
            sx={{
              p: 0,
              textDecoration: 'underline',
              fontSize: 12,
              color: '#767676',
              textTransform: 'capitalize',
            }}
            size="small"
            onClick={onToggleActivityVisible}
          >
            {activityVisible ? 'Hide ' : 'Show '} Activity
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
