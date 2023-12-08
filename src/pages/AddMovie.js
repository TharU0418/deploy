import React, {useState} from 'react'
import {Container, Form, Row } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function AddMovie() {

  const history = useNavigate();

  const[letter, setLetter] = useState('')
  const[name, setName] = useState('')
  const[year, setYear] = useState('')
  const[production, setProduction] = useState('')
  const[category, setCategory] = useState('')
  const[poster, setPoster] = useState('')
  const[description, setDescrip] = useState('')
  const[wstatus, setWStatus] = useState('')
  const[myrank, setMyrank] = useState('')

  async function submit(e){
    e.preventDefault();
    console.log('submit')

    try{
      await axios.post("http://localhost:8000/AddMovie", {
        letter,name,year,production,category,poster,description,wstatus,myrank
      })
      .then(res=>{
        if(res.data == "exit"){
          alert("This Movie already Exit.")
        }else if(res.data == "notexist"){
          history("/home", {state:{id:name}})
        }
      })
      .catch(e=>{
        alert("wrong details")
        console.log(e)
      })
    }catch(e){
      console.log(e);
    }
  }

  return (
    <div className='addmovie-container'>
      
      {/* <Form
        style={{
          backgroundColor:'#CC99FF',
          padding:'10px',
          width:'60%',
        }}
      >

        <Form.Group
          style={{
            border:'none',
            marginBottom:'16px'
          }}
        >
          <Form.Control type='text' placeholder='Movie Letter'
            style={{
              textAlign:'center',
              fontSize:'16px',
              width:'20%',
              margin:'0',
              justifyContent:'center',
            }}  onchange = {(e) => setLetter(e.target.value)}
          />
        </Form.Group>

        <Form.Group
          style={{
            border:'none',
            marginBottom:'16px',
          }}
        >
          <Form.Control type='text' placeholder='Movie Name' 
          style={{
            textAlign:'center',
            fontSize:'16px'
          }} onchange = {(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group
          style={{
            border:'none',
            marginBottom:'16px'
          }}
        >
          <Form.Control type='text' placeholder='Movie Year'
            style={{
              textAlign:'center',
              fontSize:'16px'
            }}onchange = {(e) => setYear(e.target.value)}
          />  
        </Form.Group>

        <Form.Group
          style={{
            border:'none',
            marginBottom:'16px'
          }}
        >
          <Form.Control type='text' placeholder='Movie Production'
            style={{
              textAlign:'center',
              fontSize:'16px'
            }}  onchange = {(e) => setProduction(e.target.value)}
          />
        </Form.Group>

        <Form.Group
          style={{
            border:'none',
            marginBottom:'16px'
          }}
        >
          <Form.Control type='text' placeholder='Movie Category'
            style={{
              textAlign:'center',
              fontSize:'16px'
            }}  onchange = {(e) => setCategory(e.target.value)}
          />
        </Form.Group>

        <Form.Group
          style={{
            border:'none',
            marginBottom:'16px'
          }}
        >
          <Form.Control type='text' placeholder='Movie Poster'
            style={{
              textAlign:'center',
              fontSize:'16px'
            }}  onchange = {(e) => setPoster(e.target.value)}
          />
        </Form.Group>

        <Form.Group
          style={{
            border:'none',
            marginBottom:'16px'
          }}
        >
          <Form.Control type='text' placeholder='Movie Description'
            style={{
              textAlign:'center',
              fontSize:'16px'
            }}  onchange = {(e) => setDescrip(e.target.value)}
          />
        </Form.Group>

        <Form.Group
          style={{
            border:'none',
            marginBottom:'16px'
          }}
        >
          <Form.Control type='text' placeholder='Movie WatchS'
            style={{
              textAlign:'center',
              fontSize:'16px'
            }}  onchange = {(e) => setWStatus(e.target.value)}
          />
        </Form.Group>

        <Form.Group
          style={{
            border:'none',
            marginBottom:'16px'
          }}
        >
          <Form.Control type='text' placeholder='Movie My Rank'
            style={{
              textAlign:'center',
              fontSize:'16px'
            }}  onchange = {(e) => setMyrank(e.target.value)}
          />
        </Form.Group>

        <Button
          style={{
            backgroundColor:'red',
            color:'white',
            border:'none',
            borderRadius:'20px',
            padding:'10px',
            marginRight:'20px'
          }}
        >Clear</Button>

        <Button
          style={{
            backgroundColor:'green',
            color:'white',
            border:'none',
            borderRadius:'14px',
            padding:'10px',
            width:'10%'
          }} onClick={submit}
        >Add</Button>

      </Form> */}

      <form>

    <Box
      component="form"
      sx={{
        '& > :not(style)' : {m:1, width: '25ch'},
      }}
      noValidate
      autoComplete='off'
      style={{marginLeft:'400px', justifyContent:'center'}}
    >

      <div><TextField label="Letter" variant='filled' color="success" focused style={{width:'400px',fontSize:'30px'}} onChange={(e) => setLetter(e.target.value)}/></div>

      <div><TextField label="Name" variant='filled' color="success" focused style={{width:'400px',fontSize:'30px'}} onChange={(e) => setName(e.target.value)}/></div>

      <div><TextField label="Year" variant='filled' color="success" focused  style={{width:'400px',fontSize:'30px'}} onChange={(e) => setYear(e.target.value)}/></div>

      <div><TextField label="Production" variant='filled' color="success" focused style={{width:'400px',fontSize:'30px'}} onChange={(e) => setProduction(e.target.value)}/></div>

      <div><TextField label="Category" variant='filled' color="success" focused style={{width:'400px',fontSize:'30px'}} onChange={(e) => setCategory(e.target.value)}/></div>

      <div><TextField label="Poster" variant='filled' color="success" focused style={{width:'400px',fontSize:'30px'}} onChange={(e) => setPoster(e.target.value)}/></div>

      <div><TextField label="Description" variant='filled' color="success" style={{width:'400px',fontSize:'30px'}} focused onChange={(e) => setPoster(e.target.value)}/></div>

      <div><TextField label="Watch Status" variant='filled' color="success" style={{width:'400px',fontSize:'30px'}} focused onChange={(e) => setWStatus(e.target.value)}/></div>

      <div><TextField label="My Rank" variant='filled' color="success" style={{width:'400px',fontSize:'30px'}} focused onChange={(e) => setMyrank(e.target.value)}/></div>


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

export default AddMovie