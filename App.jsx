import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import WebDesign from "./pages/WebDesign"
import AppDesign from "./pages/AppDesign"
import GraphicDesign from "./pages/GraphicDesign"
import About from "./pages/About.jsx"
import Locations from "./pages/Locations"
import Contact from "./pages/Contact"

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="webdesign" element={<WebDesign />} />
                    <Route path="appdesign" element={<AppDesign />} />
                    <Route path="graphicdesign" element={<GraphicDesign />} />
                    <Route path="about" element={<About />} />
                    <Route path="locations" element={<Locations />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}