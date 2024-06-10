import React from 'react'
import MobileNavbar from '../MobileNavbar/MobileNavbar';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import { Button, Grid, TextField } from '@mui/material';



const SignUpMobile = () => {
    const navigate = useNavigate();
  return (
    <>
      <MobileNavbar />
      <div>
        {/* text area */}
        <div className="h-[10rem] w-full bg-gray-100">
          <div className="flex pt-5 pl-5">
            <ArrowBackIosIcon
              onClick={() => navigate("/hero")}
              className="text-gray-400"
            />
          </div>
          <div className="flex flex-col text-left pl-5 pt-10">
            <h1 className="font-poppins-medium font-bold">SIGN UP</h1>
            <h2 className="font-twitterchirp text-gray-500">
              Register Now for Free
            </h2>
          </div>
        </div>
        {/* SignUp Form */}
        <div className="mt-10 items-center justify-center">
          <div className="w-full px-10">
            <form action="">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="name"
                    name="name"
                    label="Name"
                    fullWidth
                    autoComplete="name"
                  />
                </Grid>
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
                    fullWidth
                    type="submit"
                    sx={{
                      mt: "2rem",
                      px: "2rem",
                      color: "white",
                      py: "1rem",
                      bgcolor: "#3B82F6",
                    }}
                  >
                    <div className="flex items-center font-jost-medium gap-2 justify-center">
                      Register
                    </div>
                  </Button>
                </Grid>
              </Grid>
            </form>
            <div className="flex items-center justify-center pt-3 gap-1">
              <h2 className="font-twitterchirp text-gray-500">
               Already have an account?
              </h2>
              <Button
                onClick={() => navigate("/login")}
                sx={{
                  color: "",
                  fontFamily: "poppins-medium",
                  bgcolor: "transparent",
                }}
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpMobile