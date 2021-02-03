import React from 'react';

import './Home.css';

class Home extends React.Component
{
    render() {
        return (
            <div className="Home">
                <h1>My Movies - Home</h1>
                <p>Welcome to My Movies! This app will help you keep track of any DVDs/Blu-Rays/Other kinds of Movies you own!</p>
                <p>We have storage, editing, sorting, and selection features to make your your movie choosing process is quick and easy!</p>
                <p>If you just want to poke around and see how it works, we have a public account you can use. Details below:</p>
                <p>Username: public</p>
                <p>Password: guest</p>
            </div>
        );
    }
}

export default Home;