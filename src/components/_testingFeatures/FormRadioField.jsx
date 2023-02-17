import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { radioSchema } from "../validations/schema";
import {
  RadioGroup,
  Radio,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormHelperText,
  Button,
} from "@mui/material";

const FormRadioField = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(radioSchema),
  });

  return (
    <form onSubmit={handleSubmit((d) => console.log(d))}>
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
      <br />
      <Button type="submit" variant="contained">
        Submit
      </Button>
      <br />
      <br />
    </form>
  );
};

export default FormRadioField;
