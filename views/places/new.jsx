const React = require('react')
const Def = require('../default')

function new_form(data){
    let message = ''
    if (data.message){
        message = (
            <h4 className ="alert-danger">
                {data.message}
            </h4>
            
        )
    }
    return(
        <Def>
            <main className="col text-center">
                <h1>Add a New Place</h1>
                {message}
                <form  method="POST" action="/places">
                <div className="row ">
                    <div className ="form-goup col-sm-6">
                        <label htmlFor ="name">Place Name</label>
                        <input 
                            className ="form-control" 
                            id ="name" 
                            name="name" 
                            required/>
                    </div>
                    <div className ="form-goup col-sm-6">
                        <label htmlFor ="pic">Place Picture</label>
                        <input 
                            className ="form-control"  
                            type = "url" 
                            id ="pic" 
                            name="pic" />
                    </div>
                    <div className ="form-goup col-sm-6">
                        <label htmlFor ="city">Place City</label>
                        <input 
                            className ="form-control"  
                            id ="city" 
                            name="city" />
                    </div>
                    <div className ="form-goup col-sm-6">
                        <label htmlFor ="state">Place State</label>
                        <input 
                            className ="form-control"  
                            id ="state" 
                            name="state" />
                    </div>
                </div>
                    <div className ="form-goup">
                        <label htmlFor ="cuisine">Place Cuisine</label>
                        <input 
                            className ="form-control" 
                            id ="cuisine" 
                            name="cuisine" 
                            required/>
                    </div>
                    <div className="form-group">
                        <label for="founded">Founded Year</label>
                        <input 
                            type="number"
                            className="form-control" 
                            id="founded" 
                            name="founded" 
                            value={new Date().getFullYear()}/>
                    </div>

                    <input 
                        className ="btn btn-primary" 
                        type = "submit" 
                        value = "Add Places"/>
                </form>
            </main>
        </Def>
    )
}

module.exports = new_form