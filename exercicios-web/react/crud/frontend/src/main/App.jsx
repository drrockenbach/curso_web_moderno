import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import Logo from '../components/template/Logo'
import Home from '../components/home/Home'
import Nav from '../components/template/Nav'
import Footer from '../components/template/Footer'

export default props =>
<div className="app">
    <Logo></Logo>
    <Nav></Nav>
    <Home/>
    <Footer></Footer>
</div>