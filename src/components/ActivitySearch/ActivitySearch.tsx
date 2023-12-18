import { FC, useMemo } from 'react'
import { SearchAccordion } from '../SearchAccordion/SearchAccordion'
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Input,
  Slider,
  Stack,
  Typography,
} from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import subDays from 'date-fns/subDays'
import subYears from 'date-fns/subYears'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import { RangeSelector } from '../RangeSelector/RangeSelector'
import { TypesSelector } from '../TypesSelector/TypesSelector'

const ACTIVITY_TYPES = [
  {
    id: 1,
    name: 'Donations',
  },
  {
    id: 2,
    name: 'Spending',
  },
  {
    id: 3,
    name: 'Filing',
  },
]

interface IFormInputs {
  activityStart: Date
  activityEnd: Date
  activityTypes: number[]
  activityAmounts: number[]
}

export const ActivitySearch: FC = () => {
  const { handleSubmit, control, reset, register } = useForm<IFormInputs>({
    defaultValues: {
      activityTypes: ACTIVITY_TYPES.map((type) => type.id),
      activityAmounts: [0, 500000],
      activityStart: subYears(new Date(), 2),
      activityEnd: new Date(),
    },
  })
  const searchLastOptions = useMemo(
    () => [
      {
        label: '1 Day',
        activityStart: subDays(new Date(), 1),
        activityEnd: new Date(),
      },
      {
        label: '7 Days',
        activityStart: subDays(new Date(), 7),
        activityEnd: new Date(),
      },
      {
        label: '30 Days',
        activityStart: subDays(new Date(), 30),
        activityEnd: new Date(),
      },
    ],
    []
  )
  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data)

  return (
    <SearchAccordion title="Activity">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <FormControl>
            <FormLabel>Activity Dates</FormLabel>
            {/* <Input size="small" /> */}
            <Stack spacing={2}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Controller
                  name="activityStart"
                  control={control}
                  render={({ field }) => <DatePicker {...field} />}
                />
                <Typography>to</Typography>
                <Controller
                  name="activityEnd"
                  control={control}
                  render={({ field }) => <DatePicker {...field} />}
                />
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
              >
                <Typography>Search Last:</Typography>
                {searchLastOptions.map((option) => (
                  <Button
                    size="small"
                    variant="text"
                    key={`search-last-${option.label}`}
                  >
                    {option.label}
                  </Button>
                ))}
              </Stack>
            </Stack>
          </FormControl>
          <Divider />
          <FormControl>
            <FormLabel>Activity Types</FormLabel>
            <FormGroup row>
              <Controller
                control={control}
                name={'activityTypes'}
                render={({ field }) => (
                  <TypesSelector {...field} options={ACTIVITY_TYPES} />
                )}
              />
            </FormGroup>
          </FormControl>
          <FormControl>
            <FormLabel>Dollar Amounts</FormLabel>
            <Controller
              control={control}
              name="activityAmounts"
              render={({ field, formState }) => (
                <RangeSelector {...field} min={0} max={500000} />
              )}
            />
          </FormControl>
          <Button type="submit" variant="contained" size="large">
            Search
          </Button>
        </Stack>
      </form>
    </SearchAccordion>
  )
}
