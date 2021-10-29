import React from 'react'
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    myDiv: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        marginLeft: '0.5rem',
        marginTop: '0.5rem',
        width: '3.8cm',
        height: '3.8cm',
        border: '2px solid black',
        alignItems: 'center',
    },
    numberDiv: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '1.5cm',
        height: '1.5cm',
        border: '3px solid grey',
        borderRadius: '10px',
    },
    btn: {
        marginTop: '2rem !important',
        width: '5rem',
        [`@media print`]: {
            display: 'none !important',
        },
    },

}));

const Coupons = () => {
    const classes = useStyles();
    const ticketNumbers = 24;

    return (
        <div className={classes.root}>
            <Grid>
                <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                    <Grid item xs={16}>
                        <Grid container justifyContent="center" spacing={.5}>
                            {[...Array(ticketNumbers)].map((value, i) => (
                                <Grid key={value} item>
                                    <div key={value} className={classes.myDiv}>
                                        <h4>Coupon Number</h4>
                                        <div className={classes.numberDiv}>
                                            <h1>{i + 1}</h1>
                                        </div>
                                    </div>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Button className={classes.btn} variant="contained" onClick={() => { window.print() }}>Print</Button>
        </div>
    )
}

export default Coupons;

