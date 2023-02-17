import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

const Lname = ({ control, errors }) => {
  return (
    <Controller
      name="lname"
      defaultValue=""
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          fullWidth
          //   onChange={e=>console.log(e.target.value)}
          variant="filled"
          label="Last Name"
          error={errors.lname ? true : false}
          helperText={errors.lname ? errors.lname.message : ""}
        />
      )}
    />
  );
};

export default Lname;
