import React from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Table from 'react-bootstrap/Table'


const useStyles = makeStyles((theme) => ({
    popover: {
      pointerEvents: 'none',
    },
    paper: {
      padding: theme.spacing(1),
    },
  }));
  
  

 function UserCards (props) {
     const {firstname,lastname,gender,latitude,longitude,creditcardnumber,
             creditcardtype,email,domainname,phonenumber,macaddress,
             url,username,lastlogin,paymentmethod} = props
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
    setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
            return (                    
                    <div> 
                        <div>
                            <Typography
                            aria-owns={open ? 'mouse-over-popover' : undefined}
                            aria-haspopup="true"
                            onClick={handlePopoverOpen}
                            onMouseLeave={handlePopoverClose}
                            >
                                <div className= 'tc dib br3 ba b--light-gray pa3 ma2 bw2 pointer w8' style={{width:"300px"}}>                    
                                    <img alt='robots' src= {`https://robohash.org/${username}`} style={{width:"220px",height:"220px"}}/>
                                    <div>
                                        <p style={{paddingTop:'30px', fontFamily: 'Muli', fontSize: '15px', fontWeight:'bold',
                                        textAlignLast:'center', lineHeight: '12px', letterSpacing: '0.2px',color: 'black',}}>
                                            {username}
                                        </p>
                                    </div>
                                    <div style={{paddingTop: '20px', borderTop: '0.5vh solid ', padding:0 , left:0, marginTop: '10px', opacity: 0.06}}></div>
                                    <div>
                                        <p style={{paddingTop:'30px', fontFamily: 'Muli', fontSize: '20px', fontWeight:'bold',
                                          textAlignLast:'center', lineHeight: '12px', letterSpacing: '0.2px',color: 'black',}}>
                                            {firstname} {lastname}
                                        </p>
                                    </div>
                                </div>
                            </Typography>
                            <Popover
                            id="mouse-over-popover"
                            className={classes.popover}
                            classes={{
                                paper: classes.paper,
                            }}
                            open={open}
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'center',
                                horizontal: 'center',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            onClose={handlePopoverClose}
                            disableRestoreFocus
                            >
                                <h2 style={{textAlign:'center',fontFamily:'Muli',fontWeight:'bold'}}>Payment Details</h2>
                                <div style={{paddingTop: '20px', borderTop: '0.5vh solid ', padding:10 , left:0, opacity: 0.06}}></div>
                                <div>
                                <Table striped hover style={{width:"700px",padding:"30px"}}>
                                    <tbody>
                                        <tr>
                                        <td>First Name</td>
                                        <td>{firstname}</td>
                                        </tr>
                                        <tr>
                                        <td>Last Name</td>
                                        <td>{lastname}</td>
                                        </tr>
                                        <tr>
                                        <td>Gender</td>
                                        <td>{gender}</td>
                                        </tr>                                       
                                        <tr>
                                        <td>Latitude</td>
                                        <td>{latitude}</td>
                                        </tr>                                       
                                        <tr>
                                        <td>Longitude</td>
                                        <td>{longitude}</td>
                                        </tr>                                       
                                        <tr>
                                        <td>Credit Card Number</td>
                                        <td>{creditcardnumber}</td>
                                        </tr>
                                        <tr>
                                        <td>Credit Card Type</td>
                                        <td>{creditcardtype}</td>
                                        </tr>                                       
                                        <tr>
                                        <td>Email</td>
                                        <td>{email}</td>
                                        </tr>
                                        <tr>
                                        <td>Domain Name</td>
                                        <td>{domainname}</td>
                                        </tr>
                                        <tr>
                                        <td>Phone Number</td>
                                        <td>{phonenumber}</td>
                                        </tr>
                                        <tr>
                                        <td>Mac Address</td>
                                        <td>{macaddress}</td>
                                        </tr>
                                        <tr>
                                        <td>URL</td>
                                        <td>{url}</td>
                                        </tr>
                                        <tr>
                                        <td>Username</td>
                                        <td>{username}</td>
                                        </tr>
                                        <tr>
                                        <td>Last Login</td>
                                        <td>{lastlogin}</td>
                                        </tr>
                                        <tr>
                                        <td>Payment Method</td>
                                        <td>{paymentmethod}</td>
                                        </tr>
                                    </tbody>
                                    </Table>
                                </div>
                            </Popover>
                        </div>
                    </div>
                    
            )
    }

export default UserCards;
