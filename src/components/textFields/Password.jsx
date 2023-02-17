import { useState } from "react";
import { Controller } from "react-hook-form";
import { TextField, IconButton, InputAdornment } from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

const pwdValidatorMsg = (errorMsg) => {
  const msg = ["Special Characters", "Numbers", "Capitals", "Min 8 characters"];
  const errorMsgList = errorMsg.split(",");
  return (
    <>
      {!errorMsgList.includes(msg[0]) ? (
        <>
          <CheckCircleIcon sx={{ color: "green" }} />
          {msg[0]}
        </>
      ) : (
        <>
          <CancelIcon sx={{ color: "red" }} />
          {msg[0]}
        </>
      )}
      <br />
      {!errorMsgList.includes(msg[1]) ? (
        <>
          <CheckCircleIcon sx={{ color: "green" }} />
          {msg[1]}
        </>
      ) : (
        <>
          <CancelIcon sx={{ color: "red" }} />
          {msg[1]}
        </>
      )}
      <br />
      {!errorMsgList.includes(msg[2]) ? (
        <>
          <CheckCircleIcon sx={{ color: "green" }} />
          {msg[2]}
        </>
      ) : (
        <>
          <CancelIcon sx={{ color: "red" }} />
          {msg[2]}
        </>
      )}
      <br />
      {!errorMsgList.includes(msg[3]) ? (
        <>
          <CheckCircleIcon sx={{ color: "green" }} />
          {msg[3]}
        </>
      ) : (
        <>
          <CancelIcon sx={{ color: "red" }} />
          {msg[3]}
        </>
      )}
    </>
  );
};

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
          helperText={
            errors.password ? pwdValidatorMsg(errors.password.message) : "ttt"
          }
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
