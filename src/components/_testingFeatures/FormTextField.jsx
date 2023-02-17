import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Button, IconButton, InputAdornment } from "@mui/material";

import { textSchema } from "../../validations/schema";

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

const FormTextField = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(textSchema),
  });

  const [showPassword, setShowPassword] = useState(false);

  const showPasswordHandler = () => {
    setShowPassword((show) => !show);
  };
  //   return (
  //     <form onSubmit={handleSubmit(d=>console.log(d))}>
  //       <input type="text" {...register("name")} />
  //       <p>{errors.name?.message}</p>
  //       <button>submit</button>
  //     </form>
  //   );
  return (
    <form onSubmit={handleSubmit((d) => console.log(d))}>
      <Controller
        name="name"
        defaultValue=""
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            //   onChange={e=>console.log(e.target.value)}
            variant="filled"
            label="Name"
            error={errors.name ? true : false}
            helperText={errors.name ? errors.name.message : ""}
          />
        )}
      />
      <br />
      <Controller
        name="email"
        defaultValue=""
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            //   onChange={e=>console.log(e.target.value)}
            variant="filled"
            label="Email"
            error={errors.email ? true : false}
            helperText={errors.email ? errors.email.message : ""}
          />
        )}
      />
      <br />

      <Controller
        name="password"
        defaultValue=""
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            //   onChange={e=>console.log(e.target.value)}
            variant="filled"
            label="password"
            type={showPassword ? "text" : "password"}
            error={errors.password ? true : false}
            helperText={
              errors.password ? pwdValidatorMsg(errors.password.message) : ""
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
      <br />
      <Button type="submit" variant="contained">
        Submit
      </Button>
      <br />
      <br />
      <br />
    </form>
  );
};

export default FormTextField;
