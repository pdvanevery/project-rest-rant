const React = require('react')
const Def = require('../default')

function show (data) {
  let comments = (
    <h3 className='inactive'>
      No comments yet!
    </h3>
  )
  if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
      return (
        <div className='border'>
          <h2 className='rant'>{c.rant ? 'Rant! :(' : 'Rave! :)'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <strong>- {c.author}</strong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }
    return (
        <Def>
          <main>
            <div className='row'>
              <div className='col-sm-6'>
            <img src={data.place.pic} alt= {data.place.name} />
            <h3>Located in {data.place.city}, {data.place.state}</h3>
            </div>
            <div className='col-sm-6'>
            <h1>{ data.place.name}</h1>
            <h2>Rating</h2>
            <h3>Not Rated</h3>
            <br />
            <h2>Description</h2>
            <h3>{data.place.showEstablished()}</h3>
            <h4>Serving {data.place.cuisines}</h4>
          <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
            Edit
          </a>
          <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
            <button type="submit" className="btn btn-danger">
              Delete
            </button>
          </form>
          </div>
          <h2>Comments</h2>
          {comments}
          <h1>Got Your Own Rant or Rave?</h1>
                    <form method="POST" action= {`/places/${data.place.id}?_method=PUT`}>
                    <div className='form-group'>
                      <h3>Content</h3>
                        <label htmlFor="review box"></label>
                       <textarea name="review" id="review" cols="60" rows="3"></textarea>
                    </div>
                   <div className='row'>
                    <div className='col'>
                        <h3>Author</h3>
                        <input className='form-control' id="name" name="name"  required />
                    </div>
                    <div className='col'>
                    <label class="rating-label">
                      <h3>Star Rating</h3>
                        {/* <strong> Star Rating</strong> */}
                        <input
                            class="rating"
                            max="5"
                            oninput="this.style.setProperty('--value', this.value)"
                            step="0.5"
                            type="range"
                            value="1">
                                </input>
                        </label>
                    </div>
                    <div className='col'>
                      <h3>Rant?</h3>
                       <label>
                           <input type="checkbox" />
                       </label>
                    </div>
                    </div>
                    <input className='btn btn-primary' type="submit" value="Add Comment" />
                    </form>
                    </div> 
          </main>
              
        </Def>
    )
    
}



module.exports = show