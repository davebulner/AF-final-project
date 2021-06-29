import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Form, Table, Row, Col } from 'react-bootstrap';
import { listConDetails, deleteConDetails, createConDetails } from '../../../action/conferenceAction'
import Loader from '../../../components/Loader/loader.js'
import Message from '../../../components/Message/message.js'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './listitems1';
import { Link } from "react-router-dom";
import { CONFERENCE_DETAILS_CREATE_RESET } from '../../../constants/conferenceConstants'



// function Copyright() {
//       return (
//             <Typography variant="body2" color="textSecondary" align="center">
//                   {'Copyright © '}
//                   <Link color="inherit" href="">
//                         Madusanka Gajadeera
//                   </Link>{' '}
//                   {new Date().getFullYear()}
//                   {'.'}
//             </Typography>
//       );
// }

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
      root: {
            display: 'flex',
      },
      toolbar: {
            paddingRight: 24, // keep right padding when drawer closed
      },
      toolbarIcon: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: '0 8px',
            ...theme.mixins.toolbar,
      },
      appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.leavingScreen,
            }),
      },
      appBarShift: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.enteringScreen,
            }),
      },
      menuButton: {
            marginRight: 36,
      },
      menuButtonHidden: {
            display: 'none',
      },
      title: {
            flexGrow: 1,
      },
      drawerPaper: {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.enteringScreen,
            }),
      },
      drawerPaperClose: {
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up('sm')]: {
                  width: theme.spacing(9),
            },
      },
      appBarSpacer: theme.mixins.toolbar,
      content: {
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
      },
      container: {
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(4),
      },
      paper: {
            padding: theme.spacing(2),
            display: 'flex',
            overflow: 'auto',
            flexDirection: 'column',
      },
      fixedHeight: {
            height: 240,
      },
}));


export default function Dashboard({ history }) {
      const classes = useStyles();
      const [open, setOpen] = React.useState(true);
      const handleDrawerOpen = () => {
            setOpen(true);
      };
      const handleDrawerClose = () => {
            setOpen(false);
      };
      const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

      const dispatch = useDispatch()

      const listCon = useSelector(state => state.listCon)
      const { loading, error, conferencedetails } = listCon

      // const userLogin = useSelector((state) => state.userLogin)
      // const { userInfo } = userLogin

      const deleteCon = useSelector((state) => state.deleteCon)
      const { success: successDelete } = deleteCon

      const createConferenceDetails = useSelector((state) => state.createConferenceDetails)
      const { loading: loadingCreate, error: errorCreate, success: successCreate, conferencedetails: addConDetails } = createConferenceDetails


      useEffect(() => {

            dispatch(listConDetails())

            dispatch({ type: CONFERENCE_DETAILS_CREATE_RESET })

            if (successCreate) {
                  history.push(`/con/${addConDetails._id}`)
            }

      }, [dispatch, successDelete, successCreate, addConDetails])

      const deleteHandler = (id) => {
            if (window.confirm('Are you sure')) [
                  dispatch(deleteConDetails(id))
            ]
      }

      const createConHandler = () => {
            dispatch(createConDetails())
      }

      return (
            <div className={classes.root}>
                  <CssBaseline />
                  <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                        <Toolbar className={classes.toolbar}>
                              <IconButton
                                    edge="start"
                                    color="inherit"
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={handleDrawerOpen}
                                    className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                              >
                                    <MenuIcon />
                              </IconButton>
                              <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                                    Editor Dashboard
                              </Typography>
                              <IconButton color="inherit">
                                    <Badge badgeContent={4} color="secondary">
                                          <NotificationsIcon />
                                    </Badge>
                              </IconButton>
                        </Toolbar>
                  </AppBar>
                  <Drawer
                        variant="permanent"
                        classes={{
                              paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                        }}
                        open={open}
                  >
                        <div className={classes.toolbarIcon}>
                              <IconButton onClick={handleDrawerClose}>
                                    <ChevronLeftIcon />
                              </IconButton>
                        </div>
                        <Divider />
                        <List>{mainListItems}</List>
                        <Divider />
                        <List>{secondaryListItems}</List>

                  </Drawer>
                  <main className={classes.content}>
                        <div className={classes.appBarSpacer} />
                        <Container maxWidth="lg" className={classes.container}>
                              <Row className='align-items-center'>

                                    <Col className='text-right'>
                                          <Button className='my-3' onClick={createConHandler}>
                                                <i className='fas fa-plus'>Create Conference Details</i>
                                          </Button>
                                    </Col>
                              </Row>
                              <h1>All conference Details</h1>
                              {loadingCreate && <Loader />}
                              {errorCreate && <Message variant='danger'>{errorCreate} </Message>}
                              {loading ? (<Loader />) : error ? (
                                    <Message variant='danger'>{error}</Message>
                              ) : (
                                    <Table striped bordered hover responsive variant="light" className='table-sm'>
                                          <thead>
                                                <tr>
                                                      <th>ID</th>
                                                      <th>NAME</th>
                                                      <th>EMAIL</th>
                                                      <th>ADMIN</th>
                                                      <th></th>
                                                </tr>
                                          </thead>
                                          <tbody>
                                                {conferencedetails.map((con) => (
                                                      <tr key={con._id} >
                                                            <td>{con.conname}</td>
                                                            <td>{con.description}</td>
                                                            <td>{con.organizer}</td>
                                                            <td>{con.phone}</td>
                                                            <td>{con.isApproved ? (
                                                                  <i className='fas fa-check' style={{ color: 'green' }}></i>
                                                            ) : (
                                                                  <i className='fas fa-times' style={{ color: 'red' }}></i>
                                                            )}</td>
                                                            <td>
                                                                  <Link to={`/con/${con._id}`}>
                                                                        <Button variant='light' className='btn-sm'>
                                                                              <i className='fas fa-edit'></i>
                                                                        </Button>
                                                                  </Link>
                                                                  <Button
                                                                        variant='danger'
                                                                        className='btn-sm'
                                                                        onClick={() => deleteHandler(con._id)}
                                                                  ><i className='fas fa-trash'></i></Button>
                                                            </td>
                                                      </tr>
                                                ))}
                                          </tbody>
                                    </Table>
                              )}
                        </Container>
                  </main>

            </div>
      );
}