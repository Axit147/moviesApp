import React from 'react'
import Populars from './populars'
import Searched from './Searched'
import { Route, Routes } from 'react-router-dom'

function Pages({ filtered, setFiltered, status, setStatus }) {



    return (
        <Routes>
            <Route path="/" element={<Populars />} />
            <Route path="/searched/:search" element={<Searched filtered={filtered} setFiltered={setFiltered} status={status} setStatus={setStatus} />} />
        </Routes>
    )
}

export default Pages