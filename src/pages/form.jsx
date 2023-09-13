import React, { useState } from 'react'
import { BiSearchAlt, BiHomeAlt } from 'react-icons/bi'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'

function Form({ status, setStatus }) {

    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const getInput = (e) => {
        setInput(e.target.value);
    }

    const search = (e) => {
        e.preventDefault();
        navigate("/searched/" + input);
        // setInput('');
    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    const goHome = () => {
        navigate("/");
        setInput('')
    }


    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <BiHomeAlt className='homeBtn' onClick={goHome} />
            <Bar>
                <BiSearchAlt />
                <form>
                    <input value={input} onChange={getInput} type="text" placeholder='e.g. Titanic' id='search' />
                    <button onClick={search}>Search</button>
                </form>
            </Bar>

            <Bar>
                <Select onChange={statusHandler} name="" id="" value={status}>
                    <option value="all">All</option>
                    <option value="movie">Movie</option>
                    <option value="series">Series</option>
                </Select>
            </Bar>
        </div>
    )
}

const Bar = styled.div`
display: flex;
justify-content: center;
backdrop-filter: blur(2px);
background: rgba(225,225,225,0.3);
color: white;
align-items: center;
width: fit-content;
border-radius: 1rem;
margin: 1rem 0 0 1rem;
box-shadow: 0px 5px 10px rgb(0, 0, 0, 0.5);

:hover{
    transition: ease .5s;
    box-shadow: 0px 0px 10px rgb(0, 0, 0, 0.5);
}

form{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

input{
    background: transparent;
    border: none;
    outline: none;  
    height: 100%;
    color: white;
    margin: 0 1rem;
    font-size: 1rem;
    cursor: pointer;
    width: 100%;
}

button{
    padding: 1rem 0;
    border-radius: 1rem;
    border: none;
    background: transparent;
    color: white;
    cursor: pointer;
    font-size: 1rem;
    margin-right: 1rem;
    box-shadow: none;
}

svg{
    margin-left: 1rem;
}

button:hover{
    opacity: .8;
}

`

const Select = styled.select`

background: transparent;
border: none;
outline: none;  
height: 100%;
width:100%;
color: white;
font-size: 1rem;
cursor: pointer;
font-size:1rem;
padding:1rem 1vw;

option{

    backdrop-filter: blur(2px);
    box-shadow: 0px 10px 15px rgb(0, 0, 0);
    color: black;
    padding:1rem;
}
    
`

export default Form