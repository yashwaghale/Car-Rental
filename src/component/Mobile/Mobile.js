import React from 'react';
import './Mobile.css';
import google1 from '../../images/google1.png'
import apple1 from '../../images/apple1.png'

function App() {
    return (
        <>
            <div className='App-container row'>
                <div className='app-info colmd-12'>
                    <h1>Download our app to get most out of it</h1>
                    <p>Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. 
                        Incommode so intention defective at convinced. Led income months itself and houses you.
                    </p>
                    <div className='row mobile-img'>
                        <img src={google1} alt='app-store' className='play-store col-lg-6 col-md-6 col-sm-6'/>
                        <img src={apple1} alt='app-store' className='apple-store col-lg-6 col-md-6 col-sm-6'/>
                    </div>

                </div>

            </div>
        </>
    )
}

export default App
