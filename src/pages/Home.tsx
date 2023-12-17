import React from 'react'
import { Card, CardContent, Grid, Stack, Typography } from '@mui/material'
import { ActivitySearch } from '../components/ActivitySearch/ActivitySearch'

export const Home: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent sx={{ p: 0 }}>
            <Typography sx={{ p: 2 }}>SEARCH CAMPAIGN FINANCE</Typography>
            <Stack>
              <ActivitySearch />
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={8}>
        Content
      </Grid>
    </Grid>
  )
}
