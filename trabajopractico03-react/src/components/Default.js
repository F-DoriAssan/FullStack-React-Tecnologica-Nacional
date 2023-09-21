import React from 'react'

export default function Default(props) {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                        <h1 className="display-3">404</h1>
                        <h1>error</h1>
                        <h2>página no encontrada</h2>
                        <h3>la URL solicitada <span className='text-danger'>
                            {props.location.pathname}</span> no fue encontrado</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
