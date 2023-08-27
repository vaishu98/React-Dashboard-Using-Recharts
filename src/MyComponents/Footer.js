import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function Footer() {
    let footerStyle = {
        position: "relative",
        left: "0",
        bottom: "0",
        right: "0"
    }
    return (
        <MDBFooter className='text-center' color='white' bgColor='dark' style={footerStyle}>
            <MDBContainer className='p-4'>
                <section className='mb-4'>
                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <MDBIcon fab icon='facebook-f' />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <MDBIcon fab icon='twitter' />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <MDBIcon fab icon='google' />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <MDBIcon fab icon='instagram' />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <MDBIcon fab icon='linkedin-in' />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <MDBIcon fab icon='github' />
                    </MDBBtn>
                </section>

                <section className=''>
                    <form action=''>
                        <MDBRow className='d-flex justify-content-center'>
                            <MDBCol size="auto">
                                <p className='pt-2'>
                                    <strong>Sign up to get alerts and daily reports</strong>
                                </p>
                            </MDBCol>

                            <MDBCol md='5' start>
                                <MDBInput contrast type='email' label='Email address' className='mb-4' />
                            </MDBCol>

                            <MDBCol size="auto">
                                <MDBBtn outline color='light' type='submit' className='mb-4'>
                                    Subscribe
                                </MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </form>
                </section>

                <section className='mb-4'>
                    <p>
                        This Dashboard contains graphs of live data. Any disparity in the values must be immediately
                        reported to the concerned authorities. All data is confidential and cannot be shared with
                        anyone outside the department. Access to this dashboard is restricted.
                        NOTE: All the below links are fake.
                    </p>
                </section>

                <section className=''>
                    <MDBRow>
                        <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase'>Skills</h5>

                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <a href='#!' className='text-white'>
                                        React
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Angular
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        HTML/CSS
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        MaterialUI
                                    </a>
                                </li>
                            </ul>
                        </MDBCol>

                        <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase'>References</h5>

                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Bootstrap
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        GraphQL
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Javascript
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Typescript
                                    </a>
                                </li>
                            </ul>
                        </MDBCol>

                        <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase'>Mentions</h5>

                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Google
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Stackoverflow
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Official Documentation
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Youtube
                                    </a>
                                </li>
                            </ul>
                        </MDBCol>

                        <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase'>Links</h5>

                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <a className='text-white' href='https://google.com/'>
                                        Search Google
                                    </a>
                                </li>
                                <li>
                                    <a className='text-white' href='https://linkedin.com/'>
                                        LinkedIn homepage
                                    </a>
                                </li>
                                <li>
                                    <a className='text-white' href='https://youtube.com/'>
                                        Surf Youtube
                                    </a>
                                </li>
                                <li>
                                    <a className='text-white' href='https://github.com/'>
                                        Github profile
                                    </a>
                                </li>
                            </ul>
                        </MDBCol>
                    </MDBRow>
                </section>
            </MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2020 Copyright:
                <a className='text-white' href='localhost:3000'>
                    Dashboard
                </a>
            </div>
        </MDBFooter>
    )
}
