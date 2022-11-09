import { Abc, ArrowRightAlt, Face2, Handshake, Pets, Stroller } from '@mui/icons-material'
import { Box, Card, Typography } from '@mui/material'
import React from 'react'


const CompleteRegister = () => {
  return (
    <>

        <Box sx={{ height: '100vh', width: '100%', display: 'flex', alignItems: "center", justifyContent: 'center' }}>
            <Box sx={{ padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: "center" }}>
                <Typography  sx={{ mb: 2 }} variant='body1'>What type of care do you currently need?</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Card variant='outlined' sx={{ mr: 1, ml: 1, padding: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                        <Abc sx={{ mb: 1 }}></Abc>
                        <Typography sx={{ mb: 1 }} variant='body2'>BabySitter</Typography>
                        <ArrowRightAlt></ArrowRightAlt>
                    </Card>
                    <Card variant='outlined' sx={{ mr: 1, ml: 1, padding: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                        <Stroller sx={{ mb: 1 }}></Stroller>
                        <Typography sx={{ mb: 1 }} variant='body2'>Nanny</Typography>
                        <ArrowRightAlt></ArrowRightAlt>
                    </Card>
                    <Card variant='outlined' sx={{ mr: 1, ml: 1, padding: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                        <Pets sx={{ mb: 1 }}></Pets>
                        <Typography sx={{ mb: 1 }} variant='body2'>Pet Care</Typography>
                        <ArrowRightAlt></ArrowRightAlt>
                    </Card>
                    <Card variant='outlined' sx={{ mr: 1, ml: 1, padding: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                        <Face2 sx={{ mb: 1 }}></Face2>
                        <Typography sx={{ mb: 1 }} variant='body2'>Companion Care</Typography>
                        <ArrowRightAlt></ArrowRightAlt>
                    </Card>
                    <Card variant='outlined' sx={{ mr: 1, ml: 1, padding: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                        <Handshake sx={{ mb: 1 }}></Handshake>
                        <Typography sx={{ mb: 1 }} variant='body2'>Special Needs Care</Typography>
                        <ArrowRightAlt></ArrowRightAlt>
                    </Card>
                </Box>
            </Box>
        </Box>
    </>
  )
}

export default CompleteRegister
