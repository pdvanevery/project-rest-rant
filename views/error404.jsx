const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <div>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <img src='/images/error-cat.jpeg' alt="error cat" className='photo' />
                    <div>
                        Photo by <a href="AUTHOR_LINK">Mark James</a> on <a href="PLACE_KITTEN_LINK">Placekitten</a>
                    </div>
                    </div>
            </main>
        </Def>
    )
}

module.exports = error404