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
            <div className = "d-flex flex-column col-sm-6" >
              {/* style={{"width: 18rem"}}> */}
              <h1>{data.place.name}</h1>
              
                <img src={data.place.pic} width ="250px" className="card-img-top" alt={data.place.name}></img>
               <h3>
                Located in {data.place.city},{data.place.state} 
               </h3>
                <h2>Rating:</h2>
                <p className = "text-center card-body">
                  <h2>Description:</h2>
                  <h3>{data.place.showEstablished()}</h3>
                     
                  <h4>Serving {data.place.cuisines}</h4>    
                </p>
                {/* <a href={`/places/${placeId}/edit`} className="btn btn-warning"> 
                  Edit
                </a>   */}
                <form method = "POST" action = {`/places/${placeId}/edit?_method=GET`}> 
                  <button type="submit" className="btn btn-warning" >
                    Edit
                  </button>
                </form> 
                <form method = "POST" action = {`/places/${placeId}?_method=DELETE`}> 
                  <button type="submit" className="btn btn-danger flex-row" >
                    Delete
                  </button>
                </form>     

            </div>
          </main>
        </Def>
    )
}

module.exports = show
