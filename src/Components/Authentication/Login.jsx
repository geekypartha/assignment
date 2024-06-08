import React from 'react'
import { useNavigate } from "react-router-dom";
import {  Button, Grid, Snackbar, TextField } from "@mui/material";

const Login = () => {
    const navigate = useNavigate();
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="mt-52">
          <h2 className="text-3xl pb-10"></h2>
          <div className="w-[25vw] bg-gray-100 px-10 rounded-md py-10">
            <h1 className="pb-10">Login</h1>
            <form >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="email"
                    name="email"
                    label="Email"
                    fullWidth
                    autoComplete="email Address"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="password"
                    name="password"
                    label="Password"
                    fullWidth
                    autoComplete="password"
                    
                  />
                </Grid>
                <Grid className="flex justify-center" item xs={12}>
                  <Button
                    variant="outlined"
                    fullWidth
                    type="submit"
                    sx={{
                      px: "2rem",
                      color: "white",
                      overflow: "hidden",
                      py: ".8rem",

                      bgcolor: "black",
                      ":hover": {
                        bgcolor: "#fff",
                        color: "black",
                        boxShadow: "none",
                        border: "1px solid currentColor",
                      },
                    }}
                  >
                    <div className="flex items-center font-jost-medium gap-2 justify-center">
                      Login
                    </div>
                  </Button>
                </Grid>
              </Grid>
            </form>
            <div className="flex items-center justify-center pt-10 gap-2">
              <h2>Don't have an account?</h2>
              <a href="/signup">SignUp</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login