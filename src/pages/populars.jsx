import React from 'react';
import '@splidejs/react-splide/css';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Populars = () => {

    const popularMovies = ['Top Gun: Maverick', 'The Batman', 'Encanto', 'Brahmastra Part One: Shiva', 'Jurassic World: Dominion ', 'K.G.F', 'Uncharted', 'Morbius'];
    const popularSeries = ['Euphoria', 'House of the Dragon', 'Moon Knight', 'The Watcher', 'Inventing Anna', 'Dahmer', 'The Boys', 'All of Us Are Dead'];
    const popularAnime = ['Dragon Ball', 'Pokémon', 'Naruto', 'One Piece', 'Demon Slayer: Kimetsu no Yaiba', 'Fullmetal Alchemist: Brotherhood', 'Death Note', 'My Hero Academia']
    const navigate = useNavigate()


    const go = (e) => {
        navigate('/searched/' + e.target.value);
    }

    return (
        <>
            <h1 style={{
                margin: '2rem',
                textAlign: 'center',
                textDecoration: 'underline',
                color: 'white',
                cursor: 'context-menu'
            }}>Popular Searches</h1>

            <Container>
                <div><h2 style={{
                    margin: '2rem',
                    textAlign: 'center',
                    textDecoration: 'underline',
                    color: 'whitesmoke',
                    cursor: 'context-menu',
                }}>Movies</h2>
                    {
                        popularMovies.map((name) => {
                            return (
                                <Div key={name}>
                                    <Input onClick={go} value={name} readOnly id={name} />
                                </Div>
                            )

                        })
                    }</div>

                <div><h2 style={{
                    margin: '2rem',
                    textAlign: 'center',
                    textDecoration: 'underline',
                    color: 'whitesmoke',
                    cursor: 'context-menu',
                }}>Anime</h2>
                    {
                        popularAnime.map((name) => {
                            return (
                                <Div key={name}>
                                    <Input onClick={go} value={name} readOnly id={name} />
                                </Div>
                            )

                        })
                    }</div>

                <div><h2 style={{
                    margin: '2rem',
                    textAlign: 'center',
                    textDecoration: 'underline',
                    color: 'whitesmoke',
                    cursor: 'context-menu',
                }}>Series</h2>
                    {
                        popularSeries.map((name) => {
                            return (
                                <Div key={name}>
                                    <Input onClick={go} value={name} readOnly id={name} />
                                </Div>
                            )

                        })
                    }</div>
            </Container>
        </>
    )
}

const Container = styled.div`
    display:flex;
    width:100%;
    justify-content: space-around;
    flex-wrap: wrap;

    div{
        // flex-basis: 30%;
        // margin: 0 2rem;
        width:30%;
        min-width: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
    }
`


const Input = styled.input`

width:100%;
border: none;
padding: 1rem;
font-size: 1rem;
font-weight: 600;
border-bottom: 1px solid ;
border-radius: .5rem;
text-align: center;
cursor:pointer;
text-transform: capitalize;
background: transparent;
color:inherit;


`

const Div = styled.section`
color: antiquewhite;
border-radius: .5rem;
width: 100%;

:hover{

    backdrop-filter: blur(2px);
    background: rgba(225,225,225,0.1);
    box-shadow: 0px 10px 15px rgb(0, 0, 0);
    color: white;
    transition: ease .5s;
    box-shadow: 0px 10px 10px rgb(0, 0, 0, 0.5);
}
`
export default Populars