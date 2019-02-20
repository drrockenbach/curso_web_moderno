import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import Logo from '../components/template/Logo'
import Home from '../components/home/Home'
import Nav from '../components/template/Nav'
import Footer from '../components/template/Footer'
import { HashRouter, BrowserRouter } from 'react-router-dom'
import Routes from './Routes'

/* BrowserRouter - Pode ter que configurar alguma coisa em produção */

export default props =>

    <BrowserRouter>
        <div className="app">
            <Logo></Logo>
            <Nav></Nav>
            <Routes />
            <Footer></Footer>
        </div>
    </BrowserRouter>
