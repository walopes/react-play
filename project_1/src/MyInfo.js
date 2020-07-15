import React from "react"

import Footer from './Footer'

function MyInfo()
{
    return (
        <div>
            <nav>
                <h1>Willian A. Lopes</h1>
                <p>Hi, I'm learning React! xD</p>
                <ol>
                    {/* This is my top three vacation places: */}
                    <li>Egipt</li>
                    <li>Russia</li>
                    <li>Peru</li>
                </ol>
                <a href="http://www.google.com">Google</a>
            </nav>
            <main>
                <p>This is where the content will go</p>
            </main>
            <Footer />
        </div>
    )
}


export default MyInfo;
