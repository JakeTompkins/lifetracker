import React from 'react'

export default props => {
  return (
    <div className="dashboard-container">
      {
        props.sections.map(section => {
          return (
            <div className="dashboard-section">
              <h3 className="section-title">{section}</h3>
            </div>
          )
        })
      }
    </div>
  )
}