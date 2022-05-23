const React = require('react')
const Def = require('../default.jsx')

function edit_form (data,id) {
    return (
        <Def>
        <main className="col text-center">
          <h1>Edit Place</h1>
                <form  method="POST" action={`/places/${data.id}?_method=PUT`}>
                   <div className="row ">
                        <div className ="form-group col-sm-6">
                            <label htmlFor ="name">Place Name</label>
                            <input 
                                className ="form-control" 
                                id ="name" 
                                name="name" 
                                value = {data.place.name}
                                required/>
                            </div>
                        <div className ="form-group col-sm-6">
                            <label htmlFor ="pic">Place Picture</label>
                            <input 
                                className ="form-control"  
                                type = "text" 
                                id ="pic" 
                                name="pic" 
                                value = {data.place.pic}
                                />
                        </div>
                        <div className ="form-group col-sm-6">
                            <label htmlFor ="city">Place City</label>
                            <input 
                                className ="form-control"  
                                id ="city" 
                                name="city" 
                                value = {data.place.city}/>
                        </div>
                        <div className ="form-group col-sm-6">
                            <label htmlFor ="state">Place State</label>
                            <input 
                                className ="form-control"  
                                id ="state" 
                                name="state" 
                                value = {data.place.state}
                                />
                        </div>
                    </div>
                    <div className ="form-group">
                        <label htmlFor ="cuisine">Place Cuisine</label>
                        <input 
                            className ="form-control" 
                            id ="cuisine" 
                            name="cuisine" 
                            value = {data.place.cuisines}
                            required/>
                    </div>
                    <input className ="btn btn-primary" type = "submit" value = "Add Places"/>
                </form>
            </main>
        </Def>
    )
}

module.exports = edit_form
