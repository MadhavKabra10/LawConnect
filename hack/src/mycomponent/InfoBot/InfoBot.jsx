import React from 'react';
import Header from "../header/header";
import TextField from '@mui/material/TextField';
import { Typography } from "@mui/material";
import Button from '@mui/material/Button'; // Using MUI Button for consistency
import DropList from "./drplist";
import axios from "axios";

export default function Law() {
    const [index, setIndex] = React.useState(0);
    const [data, setData] = React.useState('');
    const [text, setText] = React.useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://law-connect-5.onrender.com/legalhelp", { email: text });
            setData(response.data);
            setIndex(1);
        } catch (error) {
            console.error("Failed to fetch data:", error);
            // Handle error appropriately
        }
    };

    const handleChange = () => {
        return <DropList data={data} />;
    };

    return (
        <>
            <Header />
            {index === 0 ? (
                <div style={{ margin: "4rem 0 0 3rem" }}>
                    <Typography variant="h4" component="h1" style={{ fontWeight: 'bold', color: '#1976d2',marginLeft:"43vw", marginBottom: '1rem' }}>
                        ChatBot
                    </Typography>
                    <Typography variant="subtitle1" style={{ marginLeft:"25vw", marginBottom: '1rem' }}>
                        Simple Legal Help. Enter your case file and get a summary and previous relevant court cases.
                    </Typography>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
                        <form onSubmit={onSubmit} style={{ width: '50%' }}>
                            <TextField
                                fullWidth
                                multiline
                                rows={10}
                                label="Write your Query..."
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                variant="outlined"
                                style={{ marginBottom: '1rem' }}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                fullWidth
                            >
                                Submit
                            </Button>
                        </form>
                    </div>
                </div>
            ) : (
                handleChange()
            )}
        </>
    );
}
