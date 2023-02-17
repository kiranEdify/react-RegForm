import { useState } from "react";
import { Controller } from "react-hook-form";
import { TextField, IconButton, InputAdornment } from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Password = ({ control, errors }) => {
  const [showPassword, setShowPassword] = useState(false);

  const showPasswordHandler = () => {
    setShowPassword((show) => !show);
  };
  return (
    <Controller
      name="password"
      defaultValue=""
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          fullWidth
          //   onChange={e=>console.log(e.target.value)}
          variant="filled"
          label="password"
          type={showPassword ? "text" : "password"}
          error={errors.password ? true : false}
          helperText={errors.password ? errors.password.message : ""}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={showPasswordHandler}>
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
};

export default Password;
