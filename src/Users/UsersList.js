import React from "react"
import { users } from "../static.json"

const UsersList = () => {
  const userIndex = 3
  return (
    <ul className="bookables items-list-nav">
      {users.map((u, i) => (
        <li key={u.id} className={i === userIndex ? "selected" : null}>
          <button className="btn" onClick={null}>
            {u.name} - {u.title}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default UsersList
