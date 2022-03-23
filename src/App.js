import React from 'react'
import { Route, Routes, Navigate } from "react-router-dom"


import { Home } from "./page/Home/Home.js"
import Explore from "./page/Explore/Explore.js"



class App extends React.Component {
    render() {
        return (
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route exact path="explore/:username" element={<Explore />} />
                </Route>
                <Route path="*" element={<Navigate to={"/"} />} />
            </Routes>
        )
    }
}


export default App
