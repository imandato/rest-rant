const React = require('react')
const Def = require('../default')

function show (data) {
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
                  <div>Currently Unrated</div>
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
              <div>
                <h2>Comments</h2>
                <div>No comments yet!</div>
              </div>
            </div>
          </main>
        </Def>
    )
}

module.exports = show
