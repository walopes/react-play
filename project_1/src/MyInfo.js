import React from "react"

import Footer from './Footer'
import Header from './Header'
import MainContent from './MainContent'

function MyInfo()
{
    const name = "Will";
    const surname = "Lopes";
    const date = new Date();
    const hours = date.getHours();
    return (
        <div>
            <Header />
            <MainContent />
            {/* Only apply className to react components, and not with react elements */}
            <main>
                <h1>Hello there, {name + " " + surname}</h1>
    <p className="teste">Hour now is: {hours} </p>
            </main>
            <Footer />
        </div>
    )
}


export default MyInfo;
