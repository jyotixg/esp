// // ** React Imports
// import { useState, useEffect, useCallback } from 'react'

// // ** Next Imports
// import Link from 'next/link'

// // ** MUI Imports
// import Box from '@mui/material/Box'
// import Card from '@mui/material/Card'
// import Menu from '@mui/material/Menu'
// import Grid from '@mui/material/Grid'
// import Divider from '@mui/material/Divider'
// import { DataGrid } from '@mui/x-data-grid'
// import { styled } from '@mui/material/styles'
// import MenuItem from '@mui/material/MenuItem'
// import IconButton from '@mui/material/IconButton'
// import Typography from '@mui/material/Typography'
// import CardHeader from '@mui/material/CardHeader'
// import InputLabel from '@mui/material/InputLabel'
// import FormControl from '@mui/material/FormControl'
// import CardContent from '@mui/material/CardContent'
// import Select from '@mui/material/Select'

// // ** Icon Imports
// import Icon from 'src/@core/components/icon'

// // ** Store Imports
// import { useDispatch, useSelector } from 'react-redux'

// // ** Custom Components Imports
// import CustomChip from 'src/@core/components/mui/chip'
// import CustomAvatar from 'src/@core/components/mui/avatar'
// import CardStatisticsHorizontal from 'src/@core/components/card-statistics/card-stats-horizontal'
// import { getInitials } from 'src/@core/utils/get-initials'
// import TableHeader from 'src/pages/clients/list/TableHeader.js'
// import AddUserDrawer from 'src/pages/clients/list/AddUserDrawer.js'


// const colors = {
//     Trust1: 'info',
//     Trust2: 'success',
//     Trust3: 'warning',
//     Trust4: 'primary',
// }

// const userRoleObj = {
//     primaryMember: { icon: 'mdi:check', color: 'primary.main' },
//     notPrimaryMember: { icon: '', color: '' },
//     // editor: { icon: 'mdi:pencil-outline', color: 'info.main' },
//     // maintainer: { icon: 'mdi:chart-donut', color: 'success.main' },
//     // subscriber: { icon: 'mdi:account-outline', color: 'primary.main' }
// }

// const userStatusObj = {
//     active: 'success',
//     pending: 'warning',
//     inactive: 'secondary'
// }

// const StyledLink = styled(Link)(({ theme }) => ({
//     fontWeight: 600,
//     fontSize: '1rem',
//     cursor: 'pointer',
//     textDecoration: 'none',
//     color: theme.palette.text.secondary,
//     '&:hover': {
//         color: theme.palette.primary.main
//     }
// }))

// const rows = [
//     {
//         id: 1,
//         role: 'primaryMember',
//         billAmount: 'pending',
//         name: 'Jordan Stevenson',
//         username: 'Mewada',
//         email: 'susanna.Lind57@gmail.com',
//         avatar: '/images/avatars/1.png',
//         fullName: 'Dhawal',
//         assignedTo: ["Trust1"],
//     },
//     {
//         id: 2,
//         role: 'primaryMember',
//         billAmount: 'active',
//         name: 'Robert Crawford',
//         username: '@rcrawford1d',
//         avatar: '/images/avatars/3.png',
//         email: 'estelle.Bailey10@gmail.com',
//         fullName: 'Dhawal',
//         assignedTo: ["Trust1", "Trust2", "Trust3"],
//     },
//     {
//         id: 3,
//         role: 'notPrimaryMember',
//         billAmount: 'inactive',
//         name: 'Lydia Reese',
//         username: '@lreese3b',
//         email: 'milo86@hotmail.com',
//         avatar: '/images/avatars/2.png',
//         fullName: 'Dhawal',
//         assignedTo: ["Trust1", "Trust3"],
//     },
//     {
//         id: 4,
//         role: 'primaryMember',
//         billAmount: 'pending',
//         name: 'Richard Sims',
//         username: '@rsims6f',
//         email: 'lonnie35@hotmail.com',
//         avatar: '/images/avatars/5.png',
//         fullName: 'Dhawal',
//         assignedTo: ["Trust1", "Trust2", "Trust3"],
//     },
//     {
//         id: 5,
//         billAmount: 'active',
//         role: 'notPrimaryMember',
//         name: 'Lucile Young',
//         username: '@lyoung4a',
//         email: 'ahmad_Collins@yahoo.com',
//         avatar: '/images/avatars/4.png',
//         fullName: 'Dhawal',
//         assignedTo: ["Trust1", "Trust2"],
//     },
//     {
//         id: 6,
//         role: 'primaryMember',
//         billAmount: 'pending',
//         name: 'Francis Frank',
//         username: '@ffrank7e',
//         avatar: '/images/avatars/7.png',
//         email: 'tillman.Gleason68@hotmail.com',
//         fullName: 'Dhawal',
//         assignedTo: ["Trust1"],
//     },
//     {
//         id: 7,
//         role: 'notPrimaryMember',
//         billAmount: 'inactive',
//         name: 'Phoebe Patterson',
//         email: 'otho21@gmail.com',
//         username: '@ppatterson2g',
//         avatar: '/images/avatars/8.png',
//         fullName: 'Dhawal',
//         assignedTo: ["Trust1", "Trust2"],
//     },
//     {
//         id: 8,
//         role: 'primaryMember',
//         billAmount: 'pending',
//         name: 'Jordan Stevenson',
//         username: '@jstevenson5c',
//         email: 'susanna.Lind57@gmail.com',
//         avatar: '/images/avatars/1.png',
//         fullName: 'Dhawal',
//         assignedTo: ["Trust1"],
//     },
//     {
//         id: 9,
//         role: 'primaryMember',
//         billAmount: 'active',
//         name: 'Robert Crawford',
//         username: '@rcrawford1d',
//         avatar: '/images/avatars/3.png',
//         email: 'estelle.Bailey10@gmail.com',
//         fullName: 'Dhawal',
//         assignedTo: ["Trust1", "Trust2", "Trust3"],
//     },
//     {
//         id: 10,
//         role: 'notPrimaryMember',
//         billAmount: 'inactive',
//         name: 'Lydia Reese',
//         username: '@lreese3b',
//         email: 'milo86@hotmail.com',
//         avatar: '/images/avatars/2.png',
//         fullName: 'Dhawal',
//         assignedTo: ["Trust1", "Trust2", "Trust3"],
//     },
//     {
//         id: 12,
//         role: 'primaryMember',
//         billAmount: 'pending',
//         name: 'Jordan Stevenson',
//         username: 'Mewada',
//         email: 'susanna.Lind57@gmail.com',
//         avatar: '/images/avatars/1.png',
//         fullName: 'Dhawal',
//         assignedTo: ["Trust1"],
//     },
//     {
//         id: 12,
//         role: 'primaryMember',
//         billAmount: 'active',
//         name: 'Robert Crawford',
//         username: '@rcrawford1d',
//         avatar: '/images/avatars/3.png',
//         email: 'estelle.Bailey10@gmail.com',
//         fullName: 'Dhawal',
//         assignedTo: ["Trust1", "Trust2", "Trust3"],
//     },
//     {
//         id: 13,
//         role: 'notPrimaryMember',
//         billAmount: 'inactive',
//         name: 'Lydia Reese',
//         username: '@lreese3b',
//         email: 'milo86@hotmail.com',
//         avatar: '/images/avatars/2.png',
//         fullName: 'Dhawal',
//         assignedTo: ["Trust1", "Trust3"],
//     },
//     {
//         id: 14,
//         role: 'primaryMember',
//         billAmount: 'pending',
//         name: 'Richard Sims',
//         username: '@rsims6f',
//         email: 'lonnie35@hotmail.com',
//         avatar: '/images/avatars/5.png',
//         fullName: 'Dhawal',
//         assignedTo: ["Trust1", "Trust2", "Trust3"],
//     },
//     {
//         id: 15,
//         billAmount: 'active',
//         role: 'notPrimaryMember',
//         name: 'Lucile Young',
//         username: '@lyoung4a',
//         email: 'ahmad_Collins@yahoo.com',
//         avatar: '/images/avatars/4.png',
//         fullName: 'Dhawal',
//         assignedTo: ["Trust1", "Trust2"],
//     },
//     {
//         id: 16,
//         role: 'primaryMember',
//         billAmount: 'pending',
//         name: 'Francis Frank',
//         username: '@ffrank7e',
//         avatar: '/images/avatars/7.png',
//         email: 'tillman.Gleason68@hotmail.com',
//         fullName: 'Dhawal',
//         assignedTo: ["Trust1"],
//     },
//     {
//         id: 17,
//         role: 'notPrimaryMember',
//         billAmount: 'inactive',
//         name: 'Phoebe Patterson',
//         email: 'otho21@gmail.com',
//         username: '@ppatterson2g',
//         avatar: '/images/avatars/8.png',
//         fullName: 'Dhawal',
//         assignedTo: ["Trust1", "Trust2"],
//     },
//     {
//         id: 18,
//         role: 'primaryMember',
//         billAmount: 'pending',
//         name: 'Jordan Stevenson',
//         username: '@jstevenson5c',
//         email: 'susanna.Lind57@gmail.com',
//         avatar: '/images/avatars/1.png',
//         fullName: 'Dhawal',
//         assignedTo: ["Trust1"],
//     },
//     {
//         id: 19,
//         role: 'primaryMember',
//         billAmount: 'active',
//         name: 'Robert Crawford',
//         username: '@rcrawford1d',
//         avatar: '/images/avatars/3.png',
//         email: 'estelle.Bailey10@gmail.com',
//         fullName: 'Dhawal',
//         assignedTo: ["Trust1", "Trust2", "Trust3"],
//     },
//     {
//         id: 20,
//         role: 'notPrimaryMember',
//         billAmount: 'inactive',
//         name: 'Lydia Reese',
//         username: '@lreese3b',
//         email: 'milo86@hotmail.com',
//         avatar: '/images/avatars/2.png',
//         fullName: 'Dhawal',
//         assignedTo: ["Trust1", "Trust2", "Trust3"],
//     }
// ]


// // ** renders client column
// const renderClient = row => {
//     if (row.avatar.length) {
//         return <CustomAvatar src={row.avatar} sx={{ mr: 3, width: 34, height: 34 }} />
//     } else {
//         return (
//             <CustomAvatar
//                 skin='light'
//                 color={row.avatarColor || 'primary'}
//                 sx={{ mr: 3, width: 34, height: 34, fontSize: '1rem' }}
//             >
//                 {getInitials(row.fullName ? row.fullName : 'John Doe')}
//             </CustomAvatar>
//         )
//     }
// }

// const RowOptions = ({ id }) => {
//     // ** Hooks
//     // const dispatch = useDispatch()

//     // ** State
//     const [anchorEl, setAnchorEl] = useState(null)
//     const rowOptionsOpen = Boolean(anchorEl)

//     const handleRowOptionsClick = event => {
//         setAnchorEl(event.currentTarget)
//     }

//     const handleRowOptionsClose = () => {
//         setAnchorEl(null)
//     }

//     const handleDelete = () => {
//         // dispatch(deleteUser(id))
//         handleRowOptionsClose()
//     }

//     return (
//         <>
//             <IconButton size='small' onClick={handleRowOptionsClick}>
//                 <Icon icon='mdi:dots-vertical' />
//             </IconButton>
//             <Menu
//                 keepMounted
//                 anchorEl={anchorEl}
//                 open={rowOptionsOpen}
//                 onClose={handleRowOptionsClose}
//                 anchorOrigin={{
//                     vertical: 'bottom',
//                     horizontal: 'right'
//                 }}
//                 transformOrigin={{
//                     vertical: 'top',
//                     horizontal: 'right'
//                 }}
//                 PaperProps={{ style: { minWidth: '8rem' } }}
//             >
//                 <MenuItem
//                     component={Link}
//                     sx={{ '& svg': { mr: 2 } }}
//                     onClick={handleRowOptionsClose}
//                     href='/apps/user/view/overview/'
//                 >
//                     <Icon icon='mdi:eye-outline' fontSize={20} />
//                     View
//                 </MenuItem>
//                 <MenuItem onClick={handleRowOptionsClose} sx={{ '& svg': { mr: 2 } }}>
//                     <Icon icon='mdi:pencil-outline' fontSize={20} />
//                     Edit
//                 </MenuItem>
//                 <MenuItem onClick={handleDelete} sx={{ '& svg': { mr: 2 } }}>
//                     <Icon icon='mdi:delete-outline' fontSize={20} />
//                     Delete
//                 </MenuItem>
//             </Menu>
//         </>
//     )
// }

// const columns = [
//     {
//         flex: 0.2,
//         minWidth: 230,
//         field: 'fullName',
//         headerName: 'Clients',
//         renderCell: ({ row }) => {
//             const { fullName, username } = row

//             return (
//                 <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                     {renderClient(row)}
//                     <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
//                         <StyledLink href='/apps/user/view/overview/'>{fullName}</StyledLink>
//                         <Typography noWrap variant='caption'>
//                             {`@${username}`}
//                         </Typography>
//                     </Box>
//                 </Box>
//             )
//         }
//     },
//     {
//         flex: 0.35,
//         minWidth: 280,
//         field: 'assignedTo',
//         headerName: 'Trusts',
//         renderCell: ({ row }) => {
//             return row.assignedTo && row.assignedTo.map((assignee, index) => (
//                 <CustomChip
//                     size='small'
//                     key={index}
//                     skin='light'
//                     color={colors[assignee]}
//                     label={assignee.replace('-', ' ')}
//                     sx={{ '& .MuiChip-label': { textTransform: 'capitalize' }, '&:not(:last-of-type)': { mr: 3 } }}
//                 />
//             ))
//         }
//     },
//     {
//         flex: 0.15,
//         field: 'role',
//         minWidth: 150,
//         headerName: 'IIFL ONE',
//         renderCell: ({ row }) => {
//             return (
//                 <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { mr: 3, color: userRoleObj[row.role].color } }}>
//                     <Icon icon={userRoleObj[row.role].icon} fontSize={20} />
//                     {/* <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
//                         {row.role}
//                     </Typography> */}
//                 </Box>
//             )
//         }
//     },
//     {
//         flex: 0.1,
//         minWidth: 110,
//         field: 'billAmount',
//         headerName: 'Bill',
//         renderCell: ({ row }) => {
//             return (
//                 <CustomChip
//                     skin='light'
//                     size='small'
//                     label={row.billAmount}
//                     color={userStatusObj[row.billAmount]}
//                     sx={{ textTransform: 'capitalize', '& .MuiChip-label': { lineHeight: '18px' } }}
//                 />
//             )
//         }
//     },
//     {
//         flex: 0.1,
//         minWidth: 90,
//         sortable: false,
//         field: 'actions',
//         headerName: 'Actions',
//         renderCell: ({ row }) => <RowOptions id={row.id} />
//     }
// ]

// const index = ({ apiData }) => {
//     const [role, setRole] = useState('')
//     const [plan, setPlan] = useState('')
//     const [value, setValue] = useState('')
//     const [status, setStatus] = useState('')
//     const [pageSize, setPageSize] = useState(10)
//     const [addUserOpen, setAddUserOpen] = useState(false)

//     const handleFilter = useCallback(val => {
//         setValue(val)
//     }, [])

//     const handleRoleChange = useCallback(e => {
//         setRole(e.target.value)
//     }, [])

//     const handlePlanChange = useCallback(e => {
//         setPlan(e.target.value)
//     }, [])

//     const handleStatusChange = useCallback(e => {
//         setStatus(e.target.value)
//     }, [])
//     const toggleAddUserDrawer = () => setAddUserOpen(!addUserOpen)

//     return (
//         <Grid container spacing={6}>
//             <Grid item xs={12}>
//                 <Card>
//                     <TableHeader value={value} handleFilter={handleFilter} toggle={toggleAddUserDrawer} />
//                     <DataGrid
//                         autoHeight
//                         rows={rows}
//                         columns={columns}
//                         checkboxSelection
//                         pageSize={pageSize}
//                         disableSelectionOnClick
//                         rowsPerPageOptions={[10, 25, 50]}
//                         sx={{ '& .MuiDataGrid-columnHeaders': { borderRadius: 0 } }}
//                         onPageSizeChange={newPageSize => setPageSize(newPageSize)}
//                     />
//                 </Card>
//             </Grid>

//             <AddUserDrawer open={addUserOpen} toggle={toggleAddUserDrawer} />
//         </Grid>
//     )
// }

// export default index
