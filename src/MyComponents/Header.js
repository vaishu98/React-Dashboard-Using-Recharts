import React from 'react'
import PropTypes from 'prop-types'
import { Router, useLocation } from 'react-router-dom';

export default function Header(props) {
    let pat = window.location.pathname;
    return (
        <div className='stic'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className={(pat === '/?#') ? 'nav-link active' : 'nav-link'} aria-current="page" href="/?#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className={(pat === '/?#about') ? 'nav-link active' : 'nav-link'} href="/?#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className={(pat === '/?#contact') ? 'nav-link active' : 'nav-link'} href="/?#contact">Contact</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

Header.props = {
    title: PropTypes.string
}