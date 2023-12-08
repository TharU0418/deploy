import React, { useEffect, useState } from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap';  
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';
import SearchBar from '../components/SearchBar';

import IconButton from '@mui/material/IconButton';
import ArrowBack from '@mui/icons-material/ArrowBack';
import ArrowForward from '@mui/icons-material/ArrowForward';

function Movie() {

  const[data, setData] = useState([])

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try{
      const response = await axios.get('http://localhost:8000/AddMovie');
      console.log(response.data)
      setData(response.data);
    }catch(error){
      console.log(error);
    }
  };

  // update

  const [selectedId, setSelectedId] = useState(null);

  function handleButtonClick (item){
    setSelectedId(item.id);
    window.scrollTo({
      top:0,
      behavior:"smooth"
    });
  }



  //

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const goToNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1)
  }

  const goToPreviousPage = () => {
    setCurrentPage(prevPage => prevPage - 1)
  }

  return (
    <div className='Movie-Page'>


    <Row style={{
      marginTop: '40px',
      margin:'0',
      textAlign: 'center',
      justifyContent:'center',
    }}>
      <SearchBar />
      </Row>
      <Container style={{
        display:'flex',
        flexDirection:'row',
        rowGap:'10px',
        justifyContent:'center'
      }}>

        <Row>
       
      
      {data
      .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
      .map(item => (
        <div className='movie-palet'>
          <div className='top-side'>
            <div key={item.id}>{item.name}</div>
            <div key={item.id}>{item.year}</div>
          </div>
          <div className='middle-side'>
            <div className='poster'>
              <img src={item.poster}/>
            </div>
            <div className='description'>
              <div key={item.id}>Movie Category : {item.category}</div>
              <div key={item.id}>Movie Production :{item.production}</div>
              <div key={item.id}>Movie Description :{item.description}</div>
              <div key={item.id}>Movie Rank :{item.myrank}</div>
              <Link to={`/UpdatePage?id=${item._id}`} onClick={handleButtonClick}>
              <i class="bi bi-pen" style={{marginLeft:'40px', backgroundColor:'white', borderRadius:'5px', padding:'5px'}}></i>
              </Link>
            </div>
        </div>  
        </div>
      ))} 
      <div className='arraow-button-container'>
      
      <IconButton aria-label="delete" disabled={currentPage === 1} onClick={goToPreviousPage} color="primary">
        <ArrowBack />
      </IconButton>
        <span>{currentPage}</span>
        <IconButton aria-label="delete" disabled={currentPage === totalPages} onClick={goToNextPage} color="primary">
        <ArrowForward />
      </IconButton>
        
        
      
      </div>

</Row>

      </Container>






{/* <div key={item.name}><img src={data.poster}/></div>
        <div key={item.name}>{data.year}</div> */}
        


{/* {data.map(item => (
        <div key={item.name}>{item.name}</div>
      ))} */}

        {/* if({location.state.id} == 'Fast X'){
            <div className='movie-palet'>
            <div className='image'>
              <h4>{location.state.id}</h4>
                <img src="https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810" style={{width:'100%',height:'88%'}}/>
            </div>
          </div>
        } */}
            
           

            <div className='add'>
              <Link to="/AddMovie">
              <Button
                style={{
                  backgroundColor:'black',
                  border:'none',
                  padding:'10px',
                }}
              >
                <i class="bi bi-plus-circle-fill" style={{fontSize:'38px'}}></i>
                </Button>
                </Link>
            </div>
        

    </div>
  )
}

export default Movie