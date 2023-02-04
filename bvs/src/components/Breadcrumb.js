import React from 'react'

const Breadcrumb = (props) => {
  return (
    <section className="breadcrumbs">
        <div className="container">
            <div className="d-flex justify-content-between align-items-center">
            <h2></h2>
            <ol>
                <li><a href="/">Home</a></li>
                <li>{props.name}</li>
            </ol>
            </div>
        </div>
    </section>

  )
}

export default Breadcrumb