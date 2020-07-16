import React from "react"

import Footer from './Footer'
import Header from './Header'
import MainContent from './MainContent'

function MyInfo()
{
    return (
        <div>
            <Header />
            <MainContent />
            {/* Only apply className to react components, and not with react elements */}
            <main>
                <p className="teste">This is where the content will go</p>
            </main>
            <Footer />
        </div>
    )
}


export default MyInfo;
