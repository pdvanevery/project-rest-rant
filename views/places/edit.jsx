const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
    return (
            <Def>
                <main>
                    <h1>Edit Place</h1>
                    <form method="POST" action={`/places/${data.id}?_method=PUT`}>
                <div className='row d-flex justify-content-center'>
                    <div className='col-sm-6 col-md-4 col-lg-3'>
                <div className='form-group'>
                    <label htmlFor="name">Place Name</label>
                    <input className='form-control' id="name" name="name" defaultValue={data.place.name} required  />
                </div>
                <div className="form-group">
                    <label for="founded">Founded Year</label>
                    <input type="number" className="form-control" id="founded" name="founded" value={new Date().getFullYear()} />
                </div>
                </div>
                <div className='col-sm-6 col-md-4 col-lg-3'>
                <div className='form-group'>
                    <label htmlFor="pic">Place Picture</label>
                    <input className='form-control' id="pic" name="pic" />
                </div>
                <div className='form-group'>
                    <label htmlFor="city">City</label>
                    <input className='form-control' id="city" name="city" />
                </div>
                </div>
                <div className='col-sm-6 col-md-4 col-lg-3'>
                <div className='form-group'>
                    <label htmlFor="state">State</label>
                    <input className='form-control' id="state" name="state" />
                </div>
                <div className='form-group'>
                    <label htmlFor="cuisines">Cuisines</label>
                    <input className='form-control' id="cuisines" name="cuisines" defaultValue={data.place.cuisines}required />
                </div>
                </div>
                </div>
                <br />
                    <input className='btn btn-primary' type="submit" value="Update Place" />
                    </form>`
                </main>
            </Def>
        )
}


module.exports = edit_form


                

 