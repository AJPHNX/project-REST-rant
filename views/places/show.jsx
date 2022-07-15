const React = require('react')
const Def = require('../default')
const showWidth =  '300px'

function Show (data,id){

  let comments = (
    <h3 className = "inactive">
      No comments yet!
    </h3>
  )
  let rating = (
    <h3 className="inactive">
      Not yet rated
    </h3>
  )
  console.log(data.place)
  // let placeId = Number(data.id)
  console.log(`Place Id`)
  console.log(data.place.id)
  if (data.place.comments.length){
    let sumRatings = data.place.comments.reduce((tot, c) => {
        return tot + c.stars
      }, 0)
      let averageRating = Math.round(sumRatings / data.place.comments.length)
      let stars = ''
      for (let i = 0; i < averageRating; i++) {
        stars += '⭐️'
      }
      rating = (
        <h3>
          {stars} stars
        </h3>
      )
    comments = data.place.comments.map(c =>{
      return(
        <div className ="border">
          <h2 className="rant">{c.rant ?'Rant! 🤬' :'Rave! 😍'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <strong>- {c.author}</strong>
          </h3>
          <h4>Rating: {c.stars} </h4>
          <form method="POST" action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}>
              <input type="submit" className="btn btn-danger" value="Delete Comment" />
            </form>
        </div>
      )
    })
  }
  // console.log(id)
    return (
        <Def>
          <main>
            <div className="row">
            <div className = "col-sm-6" >
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
            </div>
            <hr />
            <h2>Got Your Own Rant or Rave?</h2>
            <form action={`/places/${data.place.id}/comment`} method="POST">
              <div className="row">
                <div className="form-group col-sm-12">
                  <label htmlFor="content">Content</label>
                  <textarea id="content" name="content" className="form-control"></textarea>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-sm-4">
                  <label htmlFor="author">Author</label>
                  <input id="author" name="author" className="form-control" />
                </div>
                <div className="form-group col-sm-4">
                  <label htmlFor="stars">Star Rating</label>
                  <input type="range" step="0.5" min="1" max="5" id="stars" name="stars" className="form-control" />
                </div>
                <div className="form-group col-sm-2">
                  <label htmlFor="rant">Rant?</label>
                  <input type="checkbox" id="rant" name="rant" className="form-control" />
                </div>
              </div>
              <input type="submit" className="btn btn-primary" value="Add Comment" />
            </form>
          </main>
        </Def>
    )
}

module.exports = Show
