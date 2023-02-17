import { Controller } from "react-hook-form";

import { TextField, MenuItem } from "@mui/material";

const Program = ({ control, errors }) => {
  return (
    <>
      <Controller
        name="program"
        defaultValue={[]}
        control={control}
        render={({ field }) => (
          <TextField
            fullWidth
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
    </>
  );
};

export default Program;
