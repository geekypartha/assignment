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
          <div className="w-[25vw] shadow-2xl bg-white px-10 rounded-md py-10">
            <h1 className="pb-10 font-jost-medium text-blue-600">
              Login to Health-Lab
            </h1>
            <form>
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

                      bgcolor: "#2563ED",
                      ":hover": {
                        bgcolor: "#fff",
                        color: "black",
                        boxShadow: "none",
                        border: "1px solid blue",
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
              <h2 className="font-jost-medium">Don't have an account?</h2>
              <Button
                onClick={() => navigate("/register")}
                sx={{
                  color: "black",
                  fontFamily: "jost-medium",
                  bgcolor: "transparent",
                  ":hover": {
                    bgcolor: "transparent",
                    color: "blue",
                    boxShadow: "none",
                  },
                }}
              >
                Sign up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login