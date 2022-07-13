const React = require('react')
const Def = require('../default')
const showWidth =  '400px'

function show (data,id){

  let comments =(
    <h3 className = "inactive">
      No comments yet!
    </h3>
  )
  console.log(data.place)
  let placeId = Number(data.id)
  console.log(`Place Id`)
  console.log(placeId)
  if (data.place.comments.length){
    comments = data.place.comments.map(c =>{
      return(
        <div className ="border">
          <h2 className="rant">{c.rant ?'Rant! 🤬' :'Rave! 😍'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <strong>- {c.author}</strong>
          </h3>
          <h4>Rating: {c.stars} </h4>
        </div>
      )
    })
  }
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
                  {/* <h4>Serving {data.place.cuisines}</h4>     */}
                </p>
                {/* <a href={`/places/${placeId}/edit`} className="btn btn-warning"> 
                  Edit
                </a>   */}
                <form method = "POST" action = {`/places/${data.place.id}/edit?_method=GET`}> 
                  <button type="submit" className="btn btn-warning" >
                    Edit
                  </button>
                </form> 
                <form method = "POST" action = {`/places/${data.place.id}?_method=DELETE`}> 
                  <button type="submit" className="btn btn-danger flex-row" >
                    Delete
                  </button>
                </form>     

            </div>
            <hr />
            <h2>Comments</h2>
            {comments}
          </main>
        </Def>
    )
}

module.exports = show
