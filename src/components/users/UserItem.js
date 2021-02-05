import React from "react"
import PropTypes from "prop-types"

const UserItem = ({user: {id, login, avatar_url, html_url}}) => {
  return (
    <div className="card text-center">
      <img src={avatar_url} className="round-img" style={{width: "100px"}} />
      <h3>{login}</h3>
      <div>
        <a href={html_url} className="btn btn-dark btn-sm">
          More
        </a>
      </div>
    </div>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserItem
