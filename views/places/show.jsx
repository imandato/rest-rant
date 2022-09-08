const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
      <h3 className='inactive'>
        No comments yet!
      </h3>
    )
    let rating = (
      <h3 className='inactive'>
        No rating yet!
      </h3>
    )
    if (data.place.comments.length) {
      let sumRatings = data.place.comments.reduce((tot, c) => {
        return tot + c.stars
      }, 0)
      let averageRating = Math.round(sumRatings / data.place.comments.length)
      let stars = ''
      for (let i=0; i<averageRating; i++){
        stars += '⭐️'
      }
      rating = (
        <h3>
          {stars} stars
        </h3>
      )
      comments = data.place.comments.map(c => {
        return (
          <div className="border">
            <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
            <h4>{c.content}</h4>
            <h3>
              <stong>- {c.author}</stong>
            </h3>
            <h4>Rating: {c.stars}</h4>
          </div>
        )
      })
    }
    return (
        <Def>
          <main>
            <div className='showContainer'>
              <div className='showMain'>
                <div className='showImage'>
                  <img src={data.place.pic} alt= {data.place.name}/>
                  <div>Located in {data.place.city}, {data.place.state}</div>
                </div>
                <div className='showContent'> 
                  <h1> {data.place.name}</h1>
                  <h2>Rating</h2>
                  <div>{rating}</div>
                  <h2>Description</h2>
                  <div>{data.place.showEstablished()}</div>
                  <div>Serving {data.place.cuisines}</div>
                  <div className='buttons'>
                    <a href={`/places/${data.id}/edit`} className='btn btn-warning'>Edit <i class="bi-pencil"></i></a>
                    <form method='POST' action={`/places/${data.id}?_method=DELETE`}>
                      <button type='submit' className='btn btn-danger'>Delete <i class="bi-trash"></i> </button>
                    </form>
                  </div>
                </div>
              </div>
              <div >
                <h2>Comments</h2>
                <div className='comments'>
                  {comments}
                </div>
                <hr />
                <h2>Leave a comment!</h2>
                <form action={`/places/${data.place.id}/comment`} method="POST">
                  <div className='form-container'>
                    <div>
                      <label htmlFor="content">Content</label>
                      <input className='form-control' type="textarea" name='content' id='content' />
                    </div>
                    <div className='form-subcontainer'>
                      <div className='form-item'>
                        <label htmlFor="author">Author</label>
                        <input className='form-control' type="text" name="author" id="author" />
                      </div>
                      <div className='form-item'>
                        <label htmlFor="stars">Star Rating</label>
                        <input className='form-control' type="range" max="5" min="1" step="0.5" name='stars' id='stars' />
                      </div>
                      <div className='form-item'>
                        <label htmlFor="rant">Rant</label>
                        <input className='form-control' type="checkbox" name='rant' id='rant' />
                      </div>
                    </div>
                    <div>
                      <input className='btn btn-primary' type="submit" value="Submit Comment" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </main>
        </Def>
    )
}

module.exports = show
