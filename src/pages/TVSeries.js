import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchTvBar from "../components/SearchTvBar";

function TVSeries(){

    const[data, setData] = useState([])

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {

        try{
            const response = await axios.get("http://localhost:8000/AddTvSeries")
            console.log(response.data)
            setData(response.data)
        }catch(error){
            console.log(error)
        }
    };

    return(
        <div className="Movie-Page">
<Row style={{
      marginTop: '40px',
      margin:'0',
      textAlign: 'center',
      justifyContent:'center',
    }}>
            <SearchTvBar/>
            </Row>
            <Container style={{
                display:'flex',
                flexDirection:'column',
                rowGap:'10px',
                justifyContent:'center'
            }}>
                <Row>
                    {data.map(item => (
                        <div className="movie-palet">
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
                                    <Link to={''}>
                                     <i class="bi bi-pen" style={{marginLeft:'40px', backgroundColor:'white', borderRadius:'5px', padding:'5px'}}></i>
                                    </Link>
                                </div>
                            </div>
                            
                        </div>
                    ))}
                </Row>
            </Container>


            <div className="add">
                <Link to='/AddTvSeries'>
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
export default TVSeries;