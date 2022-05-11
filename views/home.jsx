const React = require('react')
const Def = require('./default')

function home(){
    return(
        <Def>
            <main>
                <h1>HOME</h1>
                <img src ="/images/TacoBoard.jpg" alt ="Taco Board"></img>
                <p>Photo by Edgar Castrejon on Unsplash</p>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>

            </main>
        </Def>
    )
}

module.exports = home