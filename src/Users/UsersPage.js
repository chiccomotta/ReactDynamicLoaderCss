import React from "react"
import { users } from "../static.json"
import UsersList from "./UsersList"

const UsersPage = () => {
  return (
    <main className="bookables-page">
      <UsersList />{" "}
    </main>
  )
}

export default UsersPage
