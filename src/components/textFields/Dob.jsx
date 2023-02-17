import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

const Dob = ({ control, errors }) => {
  return (
    <Controller
      name="dob"
      defaultValue=""
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          fullWidth
          type="date"
          //   onChange={e=>console.log(e.target.value)}
          variant="filled"
          label="Date of Birth"
          InputLabelProps={{
            shrink: true,
          }}
          error={errors.fname ? true : false}
          helperText={errors.fname ? errors.fname.message : ""}
        />
      )}
    />
  );
};

export default Dob;
