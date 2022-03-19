const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
          <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
            Edit
          </a>
          <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
            <button type="submit" className="btn btn-danger">
              Delete
            </button>
          </form>  
            <h1>{ data.place.name}</h1>
            <img src={data.place.pic} alt="Pic of food" />
            <h2>Rating</h2>
            <p>not rated</p>
            <h3>Comments</h3>
          <p>No Comments Yet!</p>
          </main>
              
        </Def>
    )
    
}



module.exports = show