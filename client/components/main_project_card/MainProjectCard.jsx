import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import filter2D from '../utils/filter2D'
import guid from '../utils/guid'

function MainProjectCard ({ projects, primary, secondary }) {

  let childElements = filter2D(projects, primary, secondary).map((a) => {
    // make the tags
    let tags = a.tags.map((b) => {
      return <p key={b} className="tag">{b}</p>
    })
    let description = a.description.slice(0,150)
    let mailID = guid()
    return (
      <div className="col-sm-4" key={a._id}>
        <div className="project">
          <div className="details">
            <p className="title">{a.title}</p>
            <p className="description">{description}</p>
            <hr className="spacer"></hr>
            { tags }
          </div>
          <div className="row bottom">
            <div className="col-sm-4">
              <p className="stat">{0}/{a.options.max_members}</p>
              <p className="description">Members</p>
            </div>
            <div className="col-sm-4">
              <p className="stat">{a.age}</p>
              <p className="description">Days Old</p>
            </div>
            <div className="col-sm-4">
              { <Link className="inline btn btn-default btn-lg" to={`/mail/${mailID}`} name={a.owner._id}>Join!</Link> }
            </div>
          </div>
        </div>
      </div>
    )
  })


  return (
    <div>
      { childElements }
    </div>
  )
}

MainProjectCard.propTypes = {
  projects: PropTypes.array,
  primary: PropTypes.string,
  secondary: PropTypes.string
}

const mapStateToProps = (state) => ({
  projects: state.projects.projects,
  primary: state.form.search.primary,
  secondary: state.form.search.secondary
})

export default connect(mapStateToProps, null)(MainProjectCard)
