import React from 'react';
import UserCards from './UserCards';
import Row from 'react-bootstrap/Row';

const CardList = ({records}) => {
    return (
        <Row style={{marginLeft:"90px"}}>
            {
            records.map((user, i) => {
            return(
                
                <UserCards key = {i}  
                        firstname={records[i].FirstName} 
                        lastname={records[i].LastName}
                        gender={records[i].Gender}
                        latitude={records[i].Latitude}
                        longitude={records[i].Longitude}
                        creditcardnumber={records[i].CreditCardNumber}
                        creditcardtype={records[i].CreditCardType}
                        email={records[i].Email}
                        domainname={records[i].DomainName}
                        phonenumber={records[i].PhoneNumber}
                        macaddress={records[i].MacAddress}
                        url={records[i].URL}
                        username={records[i].UserName}
                        lastlogin={records[i].LastLogin}
                        paymentmethod={records[i].PaymentMethod}
                        />
            )
        })
    }
        </Row>
    )
}

export default CardList;