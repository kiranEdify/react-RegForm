import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

const Email = ({ control, errors }) => {
  return (
    <Controller
      name="email"
      defaultValue=""
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          fullWidth
          //   onChange={e=>console.log(e.target.value)}
          variant="filled"
          type="email"
          label="Email"
          error={errors.email ? true : false}
          helperText={errors.email ? errors.email.message : ""}
        />
      )}
    />
  );
};

export default Email;
