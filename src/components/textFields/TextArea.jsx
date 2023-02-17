import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

const Fname = ({ control, errors }) => {
  return (
    <Controller
      name="textArea"
      defaultValue=""
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          fullWidth
          multiline
          rows={4}
          //   onChange={e=>console.log(e.target.value)}
          variant="filled"
          label="Why do you want this course?"
          error={errors.textArea ? true : false}
          helperText={errors.textArea ? errors.textArea.message : ""}
        />
      )}
    />
  );
};

export default Fname;
