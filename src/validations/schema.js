import * as yup from "yup";

export const textSchema = yup.object().shape({
  name: yup.string().required("name required*"),
  email: yup.string().email("Not valid email").required("Dont have an email?"),
  password: yup
    .string()
    .test(
      "password-regx",
      ({ value: pwd }) => {
        let spChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        let num = /[0-9]/;
        let capital = /[A-Z]/;

        const msg = [
          "Special Characters",
          "Numbers",
          "Capitals",
          "Min 8 characters",
        ];

        return `${spChars.test(pwd) ? "" : msg[0]},${
          num.test(pwd) ? "" : msg[1]
        },${capital.test(pwd) ? "" : msg[2]},${pwd.length >= 8 ? "" : msg[3]}`;
      },
      (value) => {
        const pattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return pattern.test(value);
      }
    )
    .required("Password required*"),
});

export const radioSchema = yup
  .object()
  .shape({ gender: yup.string().required("Gender required*") });

export const checkBoxSchema = yup.object().shape({
  country: yup.array().min(1, "Country required*"),
});

export const selectSchema = yup.object().shape({
  program: yup.array(),
});

export const useDataSchema = yup.object().shape({
  fname: yup.string().required("First name is required*"),
  lname: yup.string().required("Last name is required*"),
  email: yup.string().email().required("Email required*"),
  password: yup
    .string()
    .test(
      "password-regx",
      ({ value: pwd }) => {
        let spChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        let num = /[0-9]/;
        let capital = /[A-Z]/;

        const msg = [
          "Special Characters",
          "Numbers",
          "Capitals",
          "Min 8 characters",
        ];

        return `${spChars.test(pwd) ? "" : msg[0]},${
          num.test(pwd) ? "" : msg[1]
        },${capital.test(pwd) ? "" : msg[2]},${pwd.length >= 8 ? "" : msg[3]}`;
      },
      (value) => {
        const pattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return pattern.test(value);
      }
    )
    .required("Password required*"),
  dob: yup.date().required(),
  gender: yup.string().required("Gender required*"),
  country: yup.array().min(1, "Country required*"),
  program: yup.array(),
  textArea: yup.string(),
});
