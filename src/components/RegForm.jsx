import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDataSchema } from "../validations/schema";

import Fname from "./textFields/Fname";
import Lname from "./textFields/Lname";
import Email from "./textFields/Email";
import Password from "./textFields/Password";
import Dob from "./textFields/Dob";
import Gender from "./radioFields/Gender";
import Country from "./checkboxFields/Country";
import Program from "./textFields/Program";
import TextArea from "./textFields/TextArea";

import { Button, Box, Paper, Grid } from "@mui/material";

const RegForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(useDataSchema),
  });
  const props = { control, errors };
  //   console.log({...props})
  return (
    <>
      <Paper
        sx={{
          // backgroundColor:'green',
          width: "500px",
          margin: "10px auto",
          padding: "20px",
        }}
        elevation={3}
      >
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <Fname {...props} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Lname {...props} />
            </Grid>
            <Grid item xs={12}>
              <Email {...props} />
            </Grid>
            <Grid item xs={12}>
              <Password {...props} />
            </Grid>
            <Grid item xs={12}>
              <Dob {...props} />
            </Grid>
            <Grid item xs={12}>
              <Gender {...props} />
            </Grid>
            <Grid item xs={12}>
              <Country {...props} />
            </Grid>
            <Grid item xs={12}>
              <Program {...props} />
            </Grid>
            <Grid item xs={12}>
              <TextArea {...props} />
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ justifyContent: "center", display: "flex" }}>
                <Button type="submit" variant="contained">
                  Submit
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </>
  );
};

export default RegForm;
