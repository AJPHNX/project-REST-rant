const React = require('react')
const Def = require('./default')

function error404() {
    return(
        <Def>
            <main>
                <h1>404</h1>
                <p>OOoops, sorry we can't find this page!</p>
                <img src ="/images/DancingBaby.gif" alt ="Taco Board"></img>
                <p>Photo by Nostalgia...and Michael Girard and Robert Lurye</p>
            </main>
        </Def>
    )
}

module.exports = error404