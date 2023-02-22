// ** React Imports
import { Fragment, useRef, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Step from '@mui/material/Step'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Select from '@mui/material/Select'
import Divider from '@mui/material/Divider'
import Stepper from '@mui/material/Stepper'
import MenuItem from '@mui/material/MenuItem'
import StepLabel from '@mui/material/StepLabel'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'
import MuiPhoneInput from 'material-ui-phone-number';

// ** Third Party Imports
import * as yup from 'yup'
import toast from 'react-hot-toast'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMediaQuery } from '@mui/material'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import StepperCustomDot from './StepperCustomDot'

// ** Styled Components
import StepperWrapper from 'src/@core/styles/mui/stepper'
import MuiPhoneNumber from 'material-ui-phone-number'
import { DataGrid } from '@mui/x-data-grid'

const steps = [
  {
    title: 'Details',
    // subtitle: 'Enter Client Details'
  },
  {
    title: 'Benificiary',
    // subtitle: 'Setup Information'
  },
  {
    title: 'Assets',
    // subtitle: 'Add Social Links'
  },
  {
    title: "Lead RM"
  }
]

const columns = [
  // {
  //   flex: 0.25,
  //   field: 'name',
  //   minWidth: 200,
  //   headerName: 'User',
  //   renderCell: ({ row }) => {
  //     return (
  //       <Box sx={{ display: 'flex', alignItems: 'center' }}>
  //         {renderUserAvatar(row)}
  //         <Box sx={{ display: 'flex', flexDirection: 'column' }}>
  //           <Typography variant='subtitle2' sx={{ color: 'text.primary' }}>
  //             {row.name}
  //           </Typography>
  //           <Typography variant='caption' sx={{ lineHeight: 1.6667 }}>
  //             {row.username}
  //           </Typography>
  //         </Box>
  //       </Box>
  //     )
  //   }
  // },
  {
    flex: 0.3,
    minWidth: 250,
    field: 'id',
    headerName: 'id',
    renderCell: ({ row }) => <Typography variant='body2'>{row.id}</Typography>
  },
  {
    flex: 0.3,
    minWidth: 250,
    field: 'name',
    headerName: 'name',
    renderCell: ({ row }) => <Typography variant='body2'>{row.name}</Typography>
  },
  {
    flex: 0.3,
    minWidth: 250,
    field: 'relation',
    headerName: 'relation',
    renderCell: ({ row }) => <Typography variant='body2'>{row.relation}</Typography>
  },
  {
    flex: 0.3,
    minWidth: 250,
    field: 'age',
    headerName: 'age',
    renderCell: ({ row }) => <Typography variant='body2'>{row.age}</Typography>
  },
  // {
  //   flex: 0.1,
  //   minWidth: 90,
  //   sortable: false,
  //   field: 'actions',
  //   headerName: 'Actions',
  //   renderCell: ({ row }) => <RowOptions id={row.id} />
  // }
  // {
  //   flex: 0.2,
  //   minWidth: 130,
  //   field: 'role',
  //   headerName: 'Role',
  //   renderCell: ({ row }) => (
  //     <Box sx={{ display: 'flex', alignItems: 'center' }}>
  //       {roleObj[row.role].icon}
  //       <Typography sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>{row.role}</Typography>
  //     </Box>
  //   )
  // },
  // {
  //   flex: 0.15,
  //   minWidth: 110,
  //   field: 'status',
  //   headerName: 'Status',
  //   renderCell: ({ row }) => (
  //     <CustomChip
  //       skin='light'
  //       size='small'
  //       label={row.status}
  //       color={statusObj[row.status].color}
  //       sx={{ textTransform: 'capitalize', '& .MuiChip-label': { px: 2.5, lineHeight: 1.385 } }}
  //     />
  //   )
  // }
]

const RowOptions = ({ id }) => {
  // ** Hooks
  // const dispatch = useDispatch()

  // ** State
  const [anchorEl, setAnchorEl] = useState(null)
  const rowOptionsOpen = Boolean(anchorEl)

  const handleRowOptionsClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleRowOptionsClose = () => {
    setAnchorEl(null)
  }

  const handleDelete = () => {
    // dispatch(deleteUser(id))
    handleRowOptionsClose()
  }

  return (
    <>
      <IconButton size='small' onClick={handleRowOptionsClick}>
        <Icon icon='mdi:dots-vertical' />
      </IconButton>
      <Menu
        keepMounted
        anchorEl={anchorEl}
        open={rowOptionsOpen}
        onClose={handleRowOptionsClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        PaperProps={{ style: { minWidth: '8rem' } }}
      >
        <MenuItem
          component={Link}
          sx={{ '& svg': { mr: 2 } }}
          onClick={handleRowOptionsClose}
          href='/apps/user/view/overview/'
        >
          <Icon icon='mdi:eye-outline' fontSize={20} />
          View
        </MenuItem>
        <MenuItem onClick={handleRowOptionsClose} sx={{ '& svg': { mr: 2 } }}>
          <Icon icon='mdi:pencil-outline' fontSize={20} />
          Edit
        </MenuItem>
        <MenuItem onClick={handleDelete} sx={{ '& svg': { mr: 2 } }}>
          <Icon icon='mdi:delete-outline' fontSize={20} />
          Delete
        </MenuItem>
      </Menu>
    </>
  )
}

const defaultAccountValues = {
  email: 'jyoti@gmail.com',
  name: 'jyoti',
  contact: '',
  zip: '323232',
  country: 'IN',
  state: 'maharashtra',
  city: 'Mumbai',
  leadRM: 'RM1'
}

const defaultPersonalValues = {
  name: '',
  relation: '',
  age: '',
}

const defaultSocialValues = {
  google: '',
  twitter: '',
  facebook: '',
  linkedIn: ''
}

const accountSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required("This field is required"),
  // contact: yup.string().required(),
  // contact: yup.string().min(8),
  zip: yup.string().required(),
  country: yup.string().required(),
  state: yup.string().required(),
  city: yup.string().required(),
  leadRM: yup.string().required()
})

const personalSchema = yup.object().shape({
  name: yup.string().required(),
  relation: yup.string().required(),
  age: yup.string().required()
})

const socialSchema = yup.object().shape({
  google: yup.string().required(),
  twitter: yup.string().required(),
  facebook: yup.string().required(),
  linkedIn: yup.string().required()
})

const StepperLinearWithValidation = () => {
  // ** States
  const [activeStep, setActiveStep] = useState(0);
  const [adharCardValue, setAdharCardValue] = useState("");
  const [panCardValue, setPanCardValue] = useState("");
  const matches = useMediaQuery('(min-width:600px)')
  const aadhaarCardRef = useRef();
  const panCardRef = useRef();
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [pageSize, setPageSize] = useState(0)
  const [userdata, setUserdata] = useState([
    {
      id: 1,
      name: "jyoti",
      relation: "neha",
      age: 90
    },
    {
      id: 2,
      name: "jyoti2",
      relation: "neha2",
      age: 14
    },
    {
      id: 3,
      name: "jyoti3",
      relation: "neha",
      age: 13
    },
    {
      id: 4,
      name: "jyoti4",
      relation: "neha4",
      age: 10
    },
  ])

  const [state, setState] = useState({
    password: '',
    password2: '',
    showPassword: false,
    showPassword2: false
  })

  // ** Hooks
  const {
    reset: accountReset,
    control: accountControl,
    handleSubmit: handleAccountSubmit,
    formState: { errors: accountErrors }
  } = useForm({
    defaultValues: defaultAccountValues,
    resolver: yupResolver(accountSchema)
  })

  const {
    reset: personalReset,
    control: personalControl,
    handleSubmit: handlePersonalSubmit,
    formState: { errors: personalErrors }
  } = useForm({
    defaultValues: defaultPersonalValues,
    resolver: yupResolver(personalSchema)
  })

  const {
    reset: socialReset,
    control: socialControl,
    handleSubmit: handleSocialSubmit,
    formState: { errors: socialErrors }
  } = useForm({
    defaultValues: defaultSocialValues,
    resolver: yupResolver(socialSchema)
  })

  // Handle Stepper
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
    socialReset({ google: '', twitter: '', facebook: '', linkedIn: '' })
    accountReset({ email: '', name: '', password: '', 'confirm-password': '' })
    personalReset({ country: '', language: [], 'last-name': '', 'first-name': '' })
  }

  const onSubmit = (data, e) => {
    // console.log(data);
    // // console.log(activeStep, "activetep")
    // if (activeStep == 1) {
    //   setBeneficiaries((prev) => [...prev, data]);
    //   console.log(beneficiaries, "beneficiaries")
    // }

    console.log(data, beneficiaries, "hhhdvhvvhj")

    const buttonType = e.nativeEvent.submitter.name;
    console.log(buttonType, "buttontype");
    if (buttonType == "next") {
      setActiveStep(activeStep + 1)
      if (activeStep === steps.length - 1) {
        toast.success('Form Submitted')
      }
    }

    else if (buttonType == "add") {
      if (activeStep == 1) {
        console.log(data, "data");
        console.log(beneficiaries, "beni");
        setBeneficiaries((prev) => [...prev, data]);
        // console.log(beneficiaries, "beneficiaries");
        // reset();
        personalReset({ name: '', relation: '', age: '' })
      }
    }

  }

  const aadhardCard = () => {
    aadhaarCardRef.current.click()
  }

  const panCard = () => {
    panCardRef.current.click()
  }

  const aadhardCardHandler = (e) => {
    setAdharCardValue(e.target.files[0].name);
  }

  const panCardHandler = (e) => {
    setPanCardValue(e.target.files[0].name);
  }

  const getStepContent = step => {
    switch (step) {
      case 0:
        return (
          <form key={0} onSubmit={handleAccountSubmit(onSubmit)}>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <Controller
                    name='name'
                    control={accountControl}
                    rules={{ required: true }}
                    render={({ field: { value, onChange } }) => (
                      <TextField
                        value={value}
                        label='Name'
                        onChange={onChange}
                        placeholder='xyz'
                        error={Boolean(accountErrors.name)}
                        aria-describedby='stepper-linear-account-name'
                      />
                    )}
                  />
                  {accountErrors.name && (
                    <FormHelperText sx={{ color: 'error.main' }} id='stepper-linear-account-name'>
                      This field is required
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <Controller
                    name='email'
                    control={accountControl}
                    rules={{ required: true }}
                    render={({ field: { value, onChange } }) => (
                      <TextField
                        type='email'
                        value={value}
                        label='Email'
                        onChange={onChange}
                        error={Boolean(accountErrors.email)}
                        placeholder='xyz@gmail.com'
                        aria-describedby='stepper-linear-account-email'
                      />
                    )}
                  />
                  {accountErrors.email && (
                    <FormHelperText sx={{ color: 'error.main' }} id='stepper-linear-account-email'>
                      {accountErrors.email.message}
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <Controller
                    name="contact"
                    control={accountControl}
                    defaultValue=""
                    render={({ name, onBlur, onChange, value }) => (
                      <MuiPhoneNumber
                        name={name}
                        value={value}
                        onBlur={onBlur}
                        onChange={onChange}
                        // id="contactPhoneNumber"
                        defaultCountry={"in"}
                        label="Contact"
                        variant="outlined"
                        countryCodeEditable={false}
                        error={Boolean(accountErrors.contact)}
                      />
                    )}
                  />

                  {accountErrors.contact && (
                    <FormHelperText sx={{ color: 'error.main' }} id='stepper-linear-account-contact'>
                      This field is required
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <Controller
                    name='zip'
                    control={accountControl}
                    rules={{ required: true }}
                    render={({ field: { value, onChange } }) => (
                      <TextField
                        value={value}
                        label='Zip'
                        onChange={onChange}
                        placeholder='carterLeonard'
                        error={Boolean(accountErrors.zip)}
                        aria-describedby='stepper-linear-account-zip'
                      />
                    )}
                  />
                  {accountErrors.zip && (
                    <FormHelperText sx={{ color: 'error.main' }} id='stepper-linear-account-zip'>
                      This field is required
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel
                    id='stepper-linear-personal-country'
                    error={Boolean(accountErrors.country)}
                    htmlFor='stepper-linear-personal-country'
                  >
                    Country
                  </InputLabel>
                  <Controller
                    name='country'
                    control={accountControl}
                    rules={{ required: true }}
                    render={({ field: { value, onChange } }) => (
                      <Select
                        value={value}
                        label='Country'
                        onChange={onChange}
                        error={Boolean(accountErrors.country)}
                        labelId='stepper-linear-personal-country'
                        aria-describedby='stepper-linear-personal-country-helper'
                      >
                        <MenuItem value='IN'>IN</MenuItem>
                        <MenuItem value='USA'>USA</MenuItem>
                        <MenuItem value='UK'>UK</MenuItem>
                      </Select>
                    )}
                  />
                  {accountErrors.country && (
                    <FormHelperText sx={{ color: 'error.main' }} id='stepper-linear-personal-country-helper'>
                      This field is required
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel
                    id='stepper-linear-personal-country'
                    error={Boolean(accountErrors.state)}
                    htmlFor='stepper-linear-personal-country'
                  >
                    State
                  </InputLabel>
                  <Controller
                    name='state'
                    control={accountControl}
                    rules={{ required: true }}
                    render={({ field: { value, onChange } }) => (
                      <Select
                        value={value}
                        label='State'
                        onChange={onChange}
                        error={Boolean(accountErrors.state)}
                        labelId='stepper-linear-personal-state'
                        aria-describedby='stepper-linear-personal-state-helper'
                      >
                        <MenuItem value='maharashtra'>Maharashtra</MenuItem>
                        <MenuItem value='Goa'>Goa</MenuItem>
                        <MenuItem value='Gujarat'>Gujarat</MenuItem>
                      </Select>
                    )}
                  />
                  {accountErrors.state && (
                    <FormHelperText sx={{ color: 'error.main' }} id='stepper-linear-personal-state-helper'>
                      This field is required
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel
                    id='stepper-linear-personal-country'
                    error={Boolean(accountErrors.city)}
                    htmlFor='stepper-linear-personal-city'
                  >
                    City
                  </InputLabel>
                  <Controller
                    name='city'
                    control={accountControl}
                    rules={{ required: true }}
                    render={({ field: { value, onChange } }) => (
                      <Select
                        value={value}
                        label='City'
                        onChange={onChange}
                        error={Boolean(accountErrors.country)}
                        labelId='stepper-linear-personal-city'
                        aria-describedby='stepper-linear-personal-city-helper'
                      >
                        <MenuItem value='Mumbai'>Mumbai</MenuItem>
                        <MenuItem value='Pune'>Pune</MenuItem>
                        <MenuItem value='Nashik'>Nashik</MenuItem>
                      </Select>
                    )}
                  />
                  {accountErrors.city && (
                    <FormHelperText sx={{ color: 'error.main' }} id='stepper-linear-personal-city-helper'>
                      This field is required
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel
                    id='stepper-linear-personal-leadrm'
                    error={Boolean(accountErrors.leadRM)}
                    htmlFor='stepper-linear-personal-leadrm'
                  >
                    Lead RM
                  </InputLabel>
                  <Controller
                    name='leadRM'
                    control={accountControl}
                    rules={{ required: true }}
                    render={({ field: { value, onChange } }) => (
                      <Select
                        value={value}
                        label='Lead RM'
                        onChange={onChange}
                        error={Boolean(accountErrors.leadRM)}
                        labelId='stepper-linear-personal-leadrm'
                        aria-describedby='stepper-linear-personal-leadrm-helper'
                      >
                        <MenuItem value='RM1'>RM1</MenuItem>
                        <MenuItem value='RM2'>RM2</MenuItem>
                        <MenuItem value='RM3'>RM3</MenuItem>
                      </Select>
                    )}
                  />
                  {accountErrors.leadRM && (
                    <FormHelperText sx={{ color: 'error.main' }} id='stepper-linear-personal-leadrm-helper'>
                      This field is required
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button size='large' variant='outlined' color='secondary' disabled>
                  Back
                </Button>
                <Button size='large' name="next" type='submit' variant='contained'>
                  Next
                </Button>
              </Grid>
            </Grid>
          </form>
        )
      case 1:
        return (
          <form key={1} onSubmit={handlePersonalSubmit(onSubmit)}>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <Controller
                    name='name'
                    control={personalControl}
                    rules={{ required: true }}
                    render={({ field: { value, onChange } }) => (
                      <TextField
                        value={value}
                        label='Beneficiary Name'
                        onChange={onChange}
                        placeholder='Beneficiary Name'
                        error={Boolean(personalErrors['name'])}
                        aria-describedby='stepper-linear-personal-name'
                      />
                    )}
                  />
                  {personalErrors['name'] && (
                    <FormHelperText sx={{ color: 'error.main' }} id='stepper-linear-personal-name'>
                      This field is required
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <Controller
                    name='relation'
                    control={personalControl}
                    rules={{ required: true }}
                    render={({ field: { value, onChange } }) => (
                      <TextField
                        value={value}
                        label='Relation'
                        onChange={onChange}
                        placeholder='xyz'
                        error={Boolean(personalErrors['relation'])}
                        aria-describedby='stepper-linear-personal-relation'
                      />
                    )}
                  />
                  {personalErrors['relation'] && (
                    <FormHelperText sx={{ color: 'error.main' }} id='stepper-linear-personal-relation'>
                      This field is required
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <Controller
                    name='age'
                    control={personalControl}
                    rules={{ required: true }}
                    render={({ field: { value, onChange } }) => (
                      <TextField
                        value={value}
                        label='Age'
                        onChange={onChange}
                        placeholder='Age'
                        error={Boolean(personalErrors['age'])}
                        aria-describedby='stepper-linear-personal-age'
                      />
                    )}
                  />
                  {personalErrors['age'] && (
                    <FormHelperText sx={{ color: 'error.main' }} id='stepper-linear-personal-age'>
                      This field is required
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={12}>
                <FormControl fullWidth>
                  <Typography>KYC Details:</Typography>

                  <Box style={{ display: "flex", flexDirection: matches ? "row" : "column", gap: "30px", alignItems: "center", borderRadius: "8px", padding: "10px 0", marginTop: "" }} >
                    <Box display="flex" flex="1" alignItems="center" >
                      <Typography>Aadhaar Card:</Typography>
                      <IconButton sx={{ color: 'primary.main' }} onClick={aadhardCard}  >
                        <Icon icon='mdi:cloud-upload' />
                      </IconButton>
                      <input
                        ref={aadhaarCardRef}
                        type="file"
                        onChange={aadhardCardHandler}
                        style={{ display: "none" }}
                      />
                      <Typography>{adharCardValue && adharCardValue}</Typography>
                    </Box>

                    <Box display="flex" flex="1" alignItems="center" >
                      <Typography>PAN Card:</Typography>
                      <IconButton sx={{ color: 'primary.main' }} onClick={panCard} >
                        <Icon icon='mdi:cloud-upload' />
                      </IconButton>
                      <input
                        ref={panCardRef}
                        onChange={panCardHandler}
                        type="file"
                        style={{ display: "none" }}
                      />
                      <Typography>{panCardValue && panCardValue}</Typography>
                    </Box>
                  </Box>
                </FormControl>
              </Grid>

              {/* <Divider /> */}

              <Grid item xs={12} sx={12} gap="10px" >
                <Button
                  variant='contained'
                  type="submit"
                  name="add"
                  sx={{ display: "block", marginLeft: "auto" }}
                >
                  Add New Beneficiary
                </Button>
              </Grid>

              <Grid sx={12} xs={12} item >

                <Box mb={5} >
                  {
                    userdata.length ?
                      <DataGrid
                        autoHeight
                        rows={userdata}
                        columns={columns}
                        // checkboxSelection
                        pageSize={pageSize}
                        disableSelectionOnClick
                        getRowId={(row) => row.length + 1}
                        rowsPerPageOptions={[10, 25, 50]}
                        sx={{ '& .MuiDataGrid-columnHeaders': { borderRadius: 0 } }}
                        onPageSizeChange={newPageSize => setPageSize(newPageSize)}
                      />
                      :
                      <Typography>No Beneficiaries</Typography>
                  }
                </Box>
              </Grid>




              <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button size='large' variant='outlined' color='secondary' onClick={handleBack}>
                  Back
                </Button>

                <Button size='large' type='submit' name="next" variant='contained'>
                  Next
                </Button>
              </Grid>
            </Grid>

          </form>
        )
      case 2:
        return (
          <form key={2} onSubmit={handleSocialSubmit(onSubmit)}>
            <Grid container spacing={5}>
              {/* <Grid item xs={12}>
                <Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary' }}>
                  {steps[2].title}
                </Typography>
                <Typography variant='caption' component='p'>
                  {steps[2].subtitle}
                </Typography>
              </Grid> */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <Controller
                    name='twitter'
                    control={socialControl}
                    rules={{ required: true }}
                    render={({ field: { value, onChange } }) => (
                      <TextField
                        value={value}
                        label='Twitter'
                        onChange={onChange}
                        error={Boolean(socialErrors.twitter)}
                        placeholder='https://twitter.com/carterLeonard'
                        aria-describedby='stepper-linear-social-twitter'
                      />
                    )}
                  />
                  {socialErrors.twitter && (
                    <FormHelperText sx={{ color: 'error.main' }} id='stepper-linear-social-twitter'>
                      This field is required
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <Controller
                    name='facebook'
                    control={socialControl}
                    rules={{ required: true }}
                    render={({ field: { value, onChange } }) => (
                      <TextField
                        value={value}
                        label='Facebook'
                        onChange={onChange}
                        error={Boolean(socialErrors.facebook)}
                        placeholder='https://facebook.com/carterLeonard'
                        aria-describedby='stepper-linear-social-facebook'
                      />
                    )}
                  />
                  {socialErrors.facebook && (
                    <FormHelperText sx={{ color: 'error.main' }} id='stepper-linear-social-facebook'>
                      This field is required
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <Controller
                    name='google'
                    control={socialControl}
                    rules={{ required: true }}
                    render={({ field: { value, onChange } }) => (
                      <TextField
                        value={value}
                        label='Google+'
                        onChange={onChange}
                        error={Boolean(socialErrors.google)}
                        aria-describedby='stepper-linear-social-google'
                        placeholder='https://plus.google.com/carterLeonard'
                      />
                    )}
                  />
                  {socialErrors.google && (
                    <FormHelperText sx={{ color: 'error.main' }} id='stepper-linear-social-google'>
                      This field is required
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <Controller
                    name='linkedIn'
                    control={socialControl}
                    rules={{ required: true }}
                    render={({ field: { value, onChange } }) => (
                      <TextField
                        value={value}
                        label='LinkedIn'
                        onChange={onChange}
                        error={Boolean(socialErrors.linkedIn)}
                        placeholder='https://linkedin.com/carterLeonard'
                        aria-describedby='stepper-linear-social-linkedIn'
                      />
                    )}
                  />
                  {socialErrors.linkedIn && (
                    <FormHelperText sx={{ color: 'error.main' }} id='stepper-linear-social-linkedIn'>
                      This field is required
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button size='large' variant='outlined' color='secondary' onClick={handleBack}>
                  Back
                </Button>
                <Button size='large' type='submit' variant='contained'>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        )
      default:
        return null
    }
  }

  const renderContent = () => {
    if (activeStep === steps.length) {
      return (
        <Fragment>
          <Typography>All steps are completed!</Typography>
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end' }}>
            <Button size='large' variant='contained' onClick={handleReset}>
              Reset
            </Button>
          </Box>
        </Fragment>
      )
    } else {
      return getStepContent(activeStep)
    }
  }

  return (
    <Card>

      {/* <Divider sx={{ m: '0 !important' }} /> */}

      <CardContent>
        <StepperWrapper>
          <Stepper activeStep={activeStep}>
            {steps.map((step, index) => {
              const labelProps = {}
              if (index === activeStep) {
                labelProps.error = false
                if (
                  (accountErrors.email ||
                    accountErrors.name ||
                    accountErrors.password ||
                    accountErrors['confirm-password']) &&
                  activeStep === 0
                ) {
                  labelProps.error = true
                } else if (
                  (personalErrors.country ||
                    personalErrors.language ||
                    personalErrors['last-name'] ||
                    personalErrors['first-name']) &&
                  activeStep === 1
                ) {
                  labelProps.error = true
                } else if (
                  (socialErrors.google || socialErrors.twitter || socialErrors.facebook || socialErrors.linkedIn) &&
                  activeStep === 2
                ) {
                  labelProps.error = true
                } else {
                  labelProps.error = false
                }
              }

              return (
                <Step key={index}>
                  <StepLabel {...labelProps} StepIconComponent={StepperCustomDot}>
                    <div className='step-label'>
                      {/* <Typography className='step-number'>{`0${index + 1}`}</Typography> */}
                      <div>
                        <Typography className='step-title'>{step.title}</Typography>
                        {/* <Typography className='step-subtitle'>{step.subtitle}</Typography> */}
                      </div>
                    </div>
                  </StepLabel>
                </Step>
              )
            })}
          </Stepper>
        </StepperWrapper>
      </CardContent>

      <Divider sx={{ m: '0 !important' }} />

      <CardContent>{renderContent()}</CardContent>
    </Card>
  )
}

export default StepperLinearWithValidation
