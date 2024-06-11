import { Button, Grid } from '@mui/material'
import React from 'react'
import MailOutlineIcon from "@mui/icons-material/MailOutline";



const Footer = () => {
  return (
    <>
        <div>
            <Grid
                className="bg-black text-white text-start px-10  font-jost-light"
                container
                sx={{ bgcolor: "#222222", color: "white", py: 3 }}
            >
                <Grid className='px-36' item xs={12} sm={6} md={4}>
                <div>
                    <p className="pb-5 text-xl">Contact</p>
                </div>
                <div>
                    <button
                    className="pb-5"
                    varient="h6"
                    gutterBottom
                    >
                    GeekworkX, Down town, Guwahati
                    </button>
                </div>
                <div>
                    <button className="pb-5" varient="h6" gutterBottom>
                    +916003235412
                    </button>
                </div>
                <div>
                    <button className="pb-5" varient="h6" gutterBottom>
                        support@healthlab.com
                    </button>
                </div>
              
                </Grid>
                <Grid className='px-60' item xs={12} sm={6} md={4}>
                <p className="pb-5 text-xl">Quick Links</p>
                <div>
                    <button className="pb-5" varient="h6" gutterBottom>
                    Home
                    </button>
                </div>
                <div>
                    <button className="pb-5" varient="h6" gutterBottom>
                    About
                    </button>
                </div>
                <div>
                    <button className="pb-5" varient="h6" gutterBottom>
                    Services
                    </button>
                </div>
                <div>
                    <button className="pb-5" varient="h6" gutterBottom>
                    Careers
                    </button>
                </div>
                <div>
                    <button className="pb-5" varient="h6" gutterBottom>
                    Contact
                    </button>
                </div>
                </Grid>
                <Grid className='px-32' item xs={12} sm={6} md={4}>
                <p className="pb-5 text-xl">Services</p>
                <div>
                    <button className="pb-5" varient="h6" gutterBottom>
                    Medical
                    </button>
                </div>
                <div>
                    <button className="pb-5" varient="h6" gutterBottom>
                    Operation
                    </button>
                </div>
                <div>
                    <button className="pb-5" varient="h6" gutterBottom>
                    Laboratory
                    </button>
                </div>
                <div>
                    <button className="pb-5" varient="h6" gutterBottom>
                    ICU
                    </button>
                </div>
              
                </Grid>
               
                <Grid className="pt-10" item xs={12}>
                    <p align="center">&copy; 2024 Health-Lab. All rights reserved.</p>
                    <p align="center">Made with love by geekypartha</p>
                </Grid>
            </Grid>
        </div>
       
        
    </>
  )
}

export default Footer