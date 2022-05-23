const React = require('react')
const Def = require('../default')
const showWidth =  '400px'
function show (data,id){
  console.log(data.place)
  let placeId = Number(data.id)
  console.log(`Place Id`)
  console.log(placeId)
  
  // console.log(id)
    return (
        <Def>
          <main>
            <div className = "card" >
              {/* style={{"width: 18rem"}}> */}
              <h1>
                    {data.place.name}
                </h1>
                <img src={data.place.pic} className="card-img-top" alt={data.place.name}></img>
                <h2>Rating:</h2>
                <p className = "text-center card-body">
                  <h3>Description:</h3>
                    Located in {data.place.city},{data.place.state}  
                    Serving {data.place.cuisines}
                </p>
                <a href={`/places/${placeId}/edit`} className="btn btn-warning"> 
                  Edit
                </a>  
                <form method = "POST" action = {`/places/${placeId}?_method=DELETE`}> 
                  <button type="submit" className="btn btn-danger" >
                    Delete
                  </button>
                </form>     

            </div>
          </main>
        </Def>
    )
}

module.exports = show
