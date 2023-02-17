import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { checkBoxSchema } from "../../validations/schema";

import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from "@mui/material";

const FormCheckBoxField = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(checkBoxSchema),
  });

  return (
    <form onSubmit={handleSubmit((d) => console.log(d))}>
      <FormControl error={errors.country ? true : false}>
        <FormLabel>country</FormLabel>

        <FormGroup row>
          <Controller
            control={control}
            name="country"
            defaultValue={[]}
            render={({ field }) => (
              <>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="India"
                      checked={field.value.includes("India")}
                      onChange={(e, checked) => {
                        checked
                          ? field.onChange([...field.value, e.target.value])
                          : field.onChange(
                              field.value.filter(
                                (value) => value !== e.target.value
                              )
                            );
                      }}
                    />
                  }
                  label="India"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      value="other"
                      checked={field.value.includes("other")}
                      onChange={(e, checked) => {
                        checked
                          ? // field.onChange(value) sets the value for the library inside the field.value
                            field.onChange([...field.value, e.target.value])
                          : field.onChange(
                              field.value.filter(
                                (value) => value !== e.target.value
                              )
                            );
                      }}
                    />
                  }
                  label="other"
                />
              </>
            )}
          />
        </FormGroup>

        <FormHelperText>
          {errors.country ? errors.country.message : ""}
        </FormHelperText>
      </FormControl>
      <br />
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );
};

export default FormCheckBoxField;
