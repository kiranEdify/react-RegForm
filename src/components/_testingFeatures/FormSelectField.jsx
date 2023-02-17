import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { selectSchema } from "../validations/schema";

import { TextField, Button, MenuItem } from "@mui/material";

const FormSelectField = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(selectSchema),
  });
  return (
    <form onSubmit={handleSubmit((d) => console.log(d))}>
      <Controller
        name="program"
        defaultValue={[]}
        control={control}
        render={({ field }) => (
          <TextField
            label="Select Program"
            select
            value={field.value}
            error={errors.program ? true : false}
            helperText={errors.program ? errors.program.message : ""}
            onChange={(e) => field.onChange(e.target.value)}
            SelectProps={{ multiple: true, ...field }}

            // error
          >
            <MenuItem value="UG">UG</MenuItem>
            <MenuItem value="PG">PG</MenuItem>
          </TextField>
        )}
      />
      <br />
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );
};

export default FormSelectField;
