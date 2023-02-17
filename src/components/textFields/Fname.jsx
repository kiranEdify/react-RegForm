import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

const Fname = ({ control, errors }) => {
  return (
    <Controller
      name="fname"
      defaultValue=""
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          fullWidth
          //   onChange={e=>console.log(e.target.value)}
          variant="filled"
          label="First Name"
          error={errors.fname ? true : false}
          helperText={errors.fname ? errors.fname.message : ""}
        />
      )}
    />
  );
};

export default Fname;
