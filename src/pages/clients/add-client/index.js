// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import StepperAlternativeLabel from 'src/pages/forms/form-wizard/StepperAlternativeLabel'
import StepperLinearWithValidation from 'src/pages/forms/form-wizard/StepperLinearWithValidation.js'

const FormWizard = () => {
    return (
        <Grid container spacing={6}>
            <Grid item xs={12}>
                <Typography variant='h6' mt={1} >Add Client</Typography>
            </Grid>
            <Grid item xs={12}>
                <StepperLinearWithValidation />
                {/* <StepperAlternativeLabel /> */}

            </Grid>
        </Grid>
    )
}

export default FormWizard
