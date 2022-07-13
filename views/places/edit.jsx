const React = require('react')
const Def = require('../default.jsx')

function edit_form (data,id) {
    return (
        <Def>
        <main className="col text-center">
          <h1>Edit Place</h1>
                <form  method="POST" action={`/places/${data.place.id}?_method=PUT`}>
                   <div className="row ">
                        <div className ="form-group col-sm-6">
                            <label htmlFor ="name">Place Name</label>
                            <input 
                                className ="form-control" 
                                id ="name" 
                                name="name" 
                                defaultValue = {data.place.name}
                                required/>
                            </div>
                        <div className ="form-group col-sm-6">
                            <label htmlFor ="pic">Place Picture</label>
                            <input 
                                className ="form-control"  
                                type = "text" //Change to url
                                id ="pic" 
                                name="pic" 
                                defaultValue = {data.place.pic}
                                />
                        </div>
                        <div className ="form-group col-sm-6">
                            <label htmlFor ="city">Place City</label>
                            <input 
                                className ="form-control"  
                                id ="city" 
                                name="city" 
                                defaultValue = {data.place.city}/>
                        </div>
                        <div className ="form-group col-sm-6">
                            <label htmlFor ="state">Place State</label>
                            <input 
                                className ="form-control"  
                                id ="state" 
                                name="state" 
                                defaultValue = {data.place.state}
                                />
                        </div>
                    </div>
                    <div className ="form-group">
                        <label htmlFor ="cuisine">Place Cuisine</label>
                        <input 
                            className ="form-control" 
                            id ="cuisine" 
                            name="cuisine" 
                            defaultValue = {data.place.cuisines}
                            required/>
                    </div>
                    <input 
                        className ="btn btn-primary" 
                        type = "submit" 
                        value = "Edit Places"/>
                </form>
            </main>
        </Def>
    )
}

module.exports = edit_form
