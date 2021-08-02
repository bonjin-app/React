import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import { FormControl, Button, InputLabel, FormHelperText, Input, OutlinedInput, Card, CardContent, InputAdornment } from '@material-ui/core';

// components
import PageTitle from '../../../../components/PageTitle/PageTitle';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
}));

const CodeBankRegister = () => {
    const classes = useStyles();

    return (
        <>
            <PageTitle title="은행 코드 등록 페이지" button={
                <Link
                    to="/app/code/bank/register"
                >
                    <Button color="primary" variant="contained">등록</Button>
                </Link>
            } />
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        은행 코드 정보
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="type"
                                name="type"
                                label="Type"
                                fullWidth
                                autoComplete="type"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="code"
                                name="code"
                                label="Code"
                                fullWidth
                                autoComplete="code"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="name"
                                name="name"
                                label="Name"
                                fullWidth
                                autoComplete="name"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="normal"
                                name="normal"
                                label="Normal"
                                fullWidth
                                autoComplete="normal"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="transfer"
                                name="transfer"
                                label="Transfer"
                                fullWidth
                                autoComplete="transfer"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="loanAuto"
                                name="loanAuto"
                                label="LoanAuto"
                                fullWidth
                                autoComplete="loanAuto"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="imageUrl"
                                name="imageUrl"
                                label="ImageUrl"
                                fullWidth
                                autoComplete="imageUrl"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="country"
                                name="country"
                                label="Country"
                                fullWidth
                                autoComplete="shipping country"
                            />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}

export default CodeBankRegister
