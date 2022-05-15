const React = require('react')

function Def (html){
   return(
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="./css/style.css"/>
            </head>
            <body>
                <div className="content">
                    {html.children}
                    <footer className="footer">
                        <a href='https://ajphnx.github.io/Resume/'>Resume</a>
                        <a href='http://ajphnx.com/'>Portfolio</a>
                        <a href='https://www.linkedin.com/in/aj-phoenix/'>LinkedIn</a>
                    </footer>
                </div>
            </body>
            
        </html>
    )
}

module.exports = Def