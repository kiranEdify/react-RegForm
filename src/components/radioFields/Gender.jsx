import { Controller } from "react-hook-form";

import {
  RadioGroup,
  Radio,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormHelperText,
  Button,
} from "@mui/material";

const Gender = ({ control, errors }) => {
  return (
    <>
      <FormControl error={errors.gender ? true : false}>
        <FormLabel>Gender</FormLabel>
        <Controller
          name="gender"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <RadioGroup {...field}>
              <FormControlLabel control={<Radio />} label="Male" value="male" />
              <FormControlLabel
                control={<Radio />}
                label="Female"
                value="female"
              />
              <FormControlLabel
                control={<Radio />}
                label="Other"
                value="other"
              />
            </RadioGroup>
          )}
        />
        <FormHelperText>
          {errors.gender ? errors.gender.message : ""}
        </FormHelperText>
      </FormControl>
    </>
  );
};

export default Gender;
