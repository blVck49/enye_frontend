import './App.css';
import Row from 'react-bootstrap/Row'
import HeaderComponent from './Components/HeaderComponent';
import { useEffect, useState } from 'react';
import CardList from './Components/CardList';
import Pagination from '@material-ui/lab/Pagination';
import Dropdown from 'react-bootstrap/Dropdown'

function App() {
  const [apiResponse, setapiResponse] = useState([]);
  const [searchField, setsearchField] = useState("");
  const [offset, setoffset] = useState(0);
  const perPage = 20
  const [currentPage, setcurrentPage] = useState(0)
  const [sliceVal, setsliceVal] = useState([])
  const [pageCount, setpageCount] = useState(1)
  const [dropdownDisplay, setdropdownDisplay] = useState("Sort by Sex")
  const [dropdownDisplayItem, setdropdownDisplayItem] = useState("")
  const [dropdownDisplay2, setdropdownDisplay2] = useState("Sort by Payment Method")
  const [dropdownDisplayItem2, setdropdownDisplayItem2] = useState("")

  useEffect(() => {
    fetch('https://api.enye.tech/v1/challenge/records')
      .then(response=> response.json())
      .then(users => {setapiResponse(users.records.profiles)});
  }, [])

  const filteredRecords = apiResponse.filter(records =>{
    return records.FirstName.toLowerCase().includes(searchField.toLowerCase());
  })

  function dropdownVals(){
    if (dropdownDisplay.toLowerCase() === 'sort by sex'){
      setdropdownDisplayItem("")
    }else{
      setdropdownDisplayItem(dropdownDisplay)
    }
    if (dropdownDisplay2.toLowerCase() === 'sort by payment method'){
      setdropdownDisplayItem2("")
    }else{
      setdropdownDisplayItem2(dropdownDisplay2)
    }
    const dropdownFilter = filteredRecords.filter(records =>{
      return records.Gender.toLowerCase().includes(dropdownDisplayItem.toLowerCase());
    })

    const newDropdownFilter = dropdownFilter.filter(records =>{
      return records.PaymentMethod.toLowerCase().includes(dropdownDisplayItem2.toLowerCase());
    })

    return newDropdownFilter
  }


  useEffect(() =>{
    const data = filteredRecords;
    const slice = data.slice(offset, offset + perPage)
    setsliceVal(slice) 
    setpageCount(Math.ceil(data.length / perPage))
  },[apiResponse])
  useEffect(() =>{
    const data = dropdownVals();
    setoffset(0)
    const slice = data.slice(offset, offset + perPage)
    setsliceVal(slice) 
    setpageCount(Math.ceil(data.length / perPage))
    console.log(dropdownDisplayItem2)
  },[searchField,dropdownDisplay,dropdownDisplay2,dropdownDisplayItem,dropdownDisplayItem2])

  useEffect(() => {
    const data = dropdownVals();
      const slice = data.slice(offset, offset + perPage)
      setsliceVal(slice)
      setpageCount(Math.ceil(data.length / perPage))
  },[offset,perPage])

  function handlePageClick (event, value) {
    const selectedPage = value;
    const offset = selectedPage * perPage;
    setcurrentPage(selectedPage);
    setoffset(offset);
    }

  function dropdownItemClick(value){
    setdropdownDisplay(value);
    }
  function dropdownItemClick2(value){
    setdropdownDisplay2(value);
    }
  
  
  return (
    <div style={{width:"100%",maxWidth:"100%"}}>
          <HeaderComponent 
            inputChange={(searchField)=> setsearchField(searchField)}/>
            <Row style={{display:'flex',justifyContent:'flex-end',padding:"30px"}}>
                <Dropdown style={{paddingRight:"35px",height:"15px",backgroundColor:'transparent'}}>
                  <Dropdown.Toggle variant="secondary" id="dropdown-basic" size="sm">
                    {dropdownDisplay}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={e => dropdownItemClick("Male")}>Male</Dropdown.Item>
                    <Dropdown.Item onClick={e => dropdownItemClick("Female")}>Female</Dropdown.Item>
                    <Dropdown.Item onClick={e => dropdownItemClick("Prefer to skip")}>Prefer to skip</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown style={{paddingRight:"35px",height:"15px"}}>
                  <Dropdown.Toggle variant="secondary" id="dropdown-basic" size="sm">
                    {dropdownDisplay2}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={e => dropdownItemClick2("cc")}>Credit Card</Dropdown.Item>
                    <Dropdown.Item onClick={e => dropdownItemClick2("Paypal")}>Paypal</Dropdown.Item>
                    <Dropdown.Item onClick={e => dropdownItemClick2("check")}>Check</Dropdown.Item>
                    <Dropdown.Item onClick={e => dropdownItemClick2("money order")}>Money Order</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              
              
            </Row>
            
            <CardList records={sliceVal}/>
          <div style={{display:'flex',justifyContent:'center'}}>
              <Pagination count={pageCount - 1} onChange={handlePageClick} defaultPage={1}	size="large"/>
            </div>

    </div>
  );
}

export default App;
