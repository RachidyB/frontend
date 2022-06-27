import React from 'react'

const Error = (msg) => {
    return (
        <div>
          <div className="alert alert-danger" role="alert">
             {msg}
            </div>
        </div>       
    )
}
export default Error ;
