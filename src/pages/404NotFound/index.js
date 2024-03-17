import React from 'react'
import './index.css'

function NotFound() {
    return (
        <section className="loginSection section404">
            <div className="contentWrap">
                <div className="sectHeader textCenter fontSmall">
                    <h1 className='h1'>404</h1>
                    <h2 className='h2'>Something is wrong</h2>
                    <p>The page you are looking for was moved, removed, renamed or may have never existed!</p>
                    <button 
                        type="button" 
                        className="btn btnPrimary btnLarge"
                        onClick={() => {
                            window.location.replace("/dashboard")
                        }}
                    >
                        <i className="icn fa-sharp fa-regular fa-arrow-left"></i>
                        Back to Dashboard
                    </button>
                </div>
            </div>
        </section>
    )
}

export default NotFound