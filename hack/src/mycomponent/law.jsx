import Header from "./header/header";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Typography } from "@mui/material";
import { Button } from "react-bootstrap";
import DropList from "./drplist"
import axios from "axios";
export default function Law() {
  
  const [index, setIndex] = React.useState(0);
  const [data, setData] = React.useState('');
  const [text, setText] = React.useState('');
  let res="";
  async function onSubmit(e) {
    e.preventDefault();
    res= await axios.post("http://127.0.0.1:5000/legalhelp",{email:text})
    setData(res.data)
    setIndex(1);
    

  }
   function handleChange(){
    console.log(res.data,1)
    console.log(data)
    //res= axios.post("http://127.0.0.1:5000/legalhelp",{email:text}).then(return <></>)
    return<>
    <DropList data={data}/>
    </>
  
  }
  return <>
    <Header />
    {index === 0 ? <>
      <Typography variant="subtitle1" style={{ margin: "5rem 0 0 8rem" }}>
        <h1 className="text-4xl font-bold  text-blue-600 my-4">ChatBot</h1>
        <p style={{ width: "280px", height: "50px" }}>Simple Legal Help .Enter your case file and get a summary and previous relevant  court cases</p>
      </Typography>
      <div className="flex" style={{ margin: "2rem 0 0 8rem" }} >
        <form onSubmit={onSubmit} className="w-1/2  items-center justify-center mt-10 "  >

          <TextField className="w-1/2 "
            id="outlined-multiline-static"
            label="Write your Query...."
            multiline
            rows={10}
            value={text}
            onChange={(e) => { setText(e.target.value) }}
            defaultValue="Legal document"
          />
          <br />
          <Button
            id="subbtn"
            variant="primary"
            type="submit"
            style={{ margin: "1rem 0 0 0rem" }}
          >
            Submit
          </Button>
        </form>
      </div></> : <>
     {
      handleChange()
     }

    </>}

  </>
}