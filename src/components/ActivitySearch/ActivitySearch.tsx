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
import { ISearchFormInputs } from '../../types/SearchForm'
import { ACTIVITY_TYPES } from '../SearchResults/data'
import { useAppDispatch } from '../../app/hooks'
import { submitSearch } from '../../features/search/searchSlice'
interface SearchLastOption {
  label: string
  activityStart: Date
  activityEnd: Date
}

export const ActivitySearch: FC = () => {
  const { handleSubmit, control, setValue } = useForm<ISearchFormInputs>({
    defaultValues: {
      activityTypes: ACTIVITY_TYPES.map((type) => type.id),
      activityAmounts: [0, 500000],
      activityStart: subYears(new Date(), 2),
      activityEnd: new Date(),
    },
  })
  const dispatch = useAppDispatch()

  const searchLastOptions: SearchLastOption[] = useMemo(
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
      {
        label: 'All',
        activityStart: subYears(new Date(), 2),
        activityEnd: new Date(),
      },
    ],
    []
  )

  const onSubmit: SubmitHandler<ISearchFormInputs> = (data) =>
    dispatch(submitSearch(data))

  const onSearchLastOptionClick = (option: SearchLastOption) => {
    setValue('activityStart', option.activityStart)
    setValue('activityEnd', option.activityEnd)
  }

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
                    onClick={() => onSearchLastOptionClick(option)}
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
                  <TypesSelector
                    value={field.value}
                    onChange={field.onChange}
                    options={ACTIVITY_TYPES}
                  />
                )}
              />
            </FormGroup>
          </FormControl>
          <FormControl>
            <FormLabel>Dollar Amounts</FormLabel>
            <Controller
              control={control}
              name="activityAmounts"
              render={({ field }) => (
                <RangeSelector
                  value={field.value}
                  onChange={field.onChange}
                  min={0}
                  max={500000}
                />
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
