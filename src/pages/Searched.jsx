import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FcGoogle } from 'react-icons/fc'
import { SiImdb } from 'react-icons/si';
import Loading from './Loading';


function Searched({ status, setStatus, filtered, setFiltered }) {

    let params = useParams();
    const [searched, setSearched] = useState([]);
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(0);
    const [isOpen, setIsOpen] = useState(null);
    const [loading, setLoading] = useState(false);

    const filterHandler = () => {
        switch (status) {
            case 'movie':
                setFiltered(searched.filter((item) => item.isMovie === true));
                break;
            case 'series':
                setFiltered(searched.filter((item) => item.isMovie === false));
                break;
            default:
                setFiltered(searched);
                break;
        }
    }

    const next = (e) => {
        e.preventDefault();
        setPage(page + 1);
    }

    const prev = (e) => {
        e.preventDefault();
        setPage(page - 1);
    }

    const toggle = (i) => {
        if (isOpen === i) {
            return setIsOpen(null);
        }

        setIsOpen(i)
    }


    const getSearched = async (name) => {

        setLoading(true)
        const data = await fetch(`http://www.omdbapi.com/?s=${name}&page=${page}&type=&apikey=66bce4b2`);
        const movies = await data.json();
        setLoading(false);
        setSearched(movies.Search);

        const last = await movies.totalResults / 10;
        setLastPage(Math.ceil(last));

    };

    const assign = () => {
        searched && searched.map((item) => {
            item.isMovie = (item.Type === 'movie' ? true : false)
        })
    }

    useEffect(() => {
        setPage(1);
    }, [params.search])

    useEffect(() => {
        setStatus('all')
        getSearched(params.search);
    }, [params.search, page])

    useEffect(() => {
        assign();
        filterHandler();
    }, [status, searched])


    return (
        <>
            <p style={{
                textAlign: 'center',
                color: 'antiquewhite',
                margin: '1rem',
            }}>Showing results for: {params.search}</p>

            {loading && <Loading />}

            <Grid>
                <AnimatePresence>
                    {filtered ? filtered.map((item, i) => {
                        return (
                            <Card as={motion.div}
                                animate={{ opacity: 1 }}
                                initial={{ opacity: 0 }}
                                exit={{ opacity: 0 }}
                                layout
                                onClick={() => toggle(i)}
                                key={item.imdbID}
                            >


                                <Cdiv layout className={isOpen === i ? 'ab' : ''}>
                                    <img className='loading' src={item.Poster} alt="poster not available" />
                                    <h4>{item.Title}</h4>
                                    <div className={isOpen === i ? 'content show' : 'content'}>
                                        <p>Type : {item.Type}</p>
                                        <p>Year : {item.Year}</p>
                                        <p>IMDB-id : {item.imdbID}</p>
                                        <div>
                                            <a
                                                href={`https://www.imdb.com/title/${item.imdbID}/`}
                                                target='_blank'
                                            >
                                                <button className='imdb'>Watch Trailer On <SiImdb style={{ marginLeft: '5px', fontSize: '1.5rem' }} /></button>
                                            </a>
                                            <a
                                                href={`https://www.google.com/search?q=${item.Title}&rlz=1C1CHBF_enIN1055IN1055&oq=${item.Title}`}
                                                target='_blank'>
                                                <button className='google'>View More On <FcGoogle style={{ marginLeft: '5px', fontSize: '1.5rem' }} /></button>
                                            </a>
                                        </div>
                                    </div>
                                </Cdiv>


                            </Card>
                        )
                    })
                        : <p><h2>No Result Found</h2></p>
                    }
                </AnimatePresence>
            </Grid >

            <Div>
                <button className={`${page === 1 ? 'blocked' : ''}`} onClick={prev}>Previous</button>
                <Span>Page :{page} of {lastPage}</Span>
                <button className={`${page === lastPage ? 'blocked' : ''}`} onClick={next}>Next</button>
            </Div >
        </>

    )
}


const Grid = styled.div`
    display: grid;
    align-item: center;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(5rem, 17rem));
    position: relative;
    
    h2{
        width: 100%;
        text-align: center;
        margin: 50% auto;
        color: antiquewhite;
    }
    `
const Card = styled.div`
min-height: 18rem;
position: relative;
margin:10px;
padding:0;
height:auto;


}
`
const Cdiv = styled.div`
z-index: 2;
min-height:100%;
width:100%;
padding: 5px;
display: flex;
backdrop-filter: blur(2px);
background: rgba(225,225,225,0.3);
box-shadow: 0px 10px 15px rgb(0, 0, 0, 0.5);
flex-direction: column;
justify-content: space-between;
align-items: center;
border-radius: .5rem;
transition: ease .5s;



img{
    width: 100%;
    height:50vh;
    margin:0;
    border-radius: .5rem;
    object-fit: cover;
}
a{
    text-decoration: none;
}
h4{
    text-align: center;
    padding: 1rem 1rem 0;
}
button{
    color: white;
    border: none;
    padding: 1rem;
    letter-spacing: 2px;
    border-radius: 2rem;
    align-self: center;
    display: flex;
    align-items: center;

    
}
`

const Div = styled.div`
    display: flex;
    justify-content: center;

button{
    padding: 0.5rem;
    font-size: 1rem;
    margin: 1rem;
    border-radius: 1rem;
    backdrop-filter: blur(2px);
    background: rgba(225,225,225,0.5);
    color: white;
    border: none;

    :hover{
        box-shadow: 0px 5px 10px rgb(0, 0, 0, 0.5);
        background: rgba(225,225,225,0.8);
        color: white;
        opacity: 1 !important;
        transition: ease 0.5s;
    }
}
`

const Span = styled.span`
    padding: 0.5rem;
    font-size: 1rem;
    margin: 1rem 0;
`

export default Searched