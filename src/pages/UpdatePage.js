import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import parse from "query-string"
import axios from 'axios';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function UpdatePage() {

    const locations = useLocation();
    const {id} = parse.parse(locations.search);

    const[poster, setPoster] = useState('')
    const[description, setDescrip] = useState('')
    const[wstatus, setWStatus] = useState('')
    const[myrank, setMyrank] = useState('')
const[data, setData] = useState([])
const[category, setcategory] = useState('')

 
    async function submit(e){
        e.preventDefault();

        console.log(id)

        const updatedData = {
            poster: poster || locations.poster,
            description:  description || locations.description,
            wstatus: wstatus || locations.wstatus,
            myrank: myrank || locations.myrank,
            category : category || locations.category

        };
              
        try{
            await axios.put(`http://localhost:8000/AddPage/${id}`, updatedData)
            console.log("Updated Successfully.")
        }catch(error){
            console.log(error)
        }

    }

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

  return (
    <div>
        UpdatePage
        <p>{id}</p>

        <form>

        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            style={{marginLeft:'400px', justifyContent:'center', backgroundColor:'white',width:'40%', padding:'10px', opacity:0.8}}
        >

      
        <div>
        {data
        .filter(item => item._id === id)
      .map(item => (
            <TextField
                label="Poster"
                variant="standard"
                style={{width:'400px',fontSize:'30px'}}
                color="warning"
                focused
                required
                placeholder={item.poster}
                onChange={(e) => setPoster(e.target.value)} 
            />
            ))} 
        </div>
        <div>
        {data
        .filter(item => item._id === id)
      .map(item => (
            <TextField
                label="Description"
                variant="standard"
                color="warning"
                style={{width:'400px',fontSize:'30px'}}
                focused
                required
                placeholder={item.description}
                onChange={(e) => setDescrip(e.target.value)} 
            />
            ))} 
        </div>
        <div>
        {data
        .filter(item => item._id === id)
      .map(item => (
            <TextField
                label="Category"
                variant="standard"
                color="warning"
                style={{width:'400px',fontSize:'30px'}}
                focused
                required
                placeholder={item.category}
                onChange={(e) => setcategory(e.target.value)} 
            />
            ))} 
        </div>
        <div>
        {data
        .filter(item => item._id === id)
      .map(item => (
            <TextField
                label="Watched Status"
                variant="standard"
                color="warning"
                style={{width:'400px',fontSize:'30px'}}
                placeholder={item.wstatus}
                focused
                required
                onChange={(e) => setWStatus(e.target.value)} 
            />
      ))}
        </div>
        <div>
        {data
        .filter(item => item._id === id)
      .map(item => (
            <TextField
                label="My Rank"
                variant="standard"
                color="warning"
                style={{width:'400px',fontSize:'30px'}}
                value={item.myrank}
                focused
                required
                onChange={(e) => setMyrank(e.target.value)} 
            />
      ))}
        </div>

        <div>
      <Button variant="contained" color="success" onClick={submit}>
        SUBMIT
      </Button>
      </div>
    </Box>
    </form>

    </div>
  )
}

export default UpdatePage