import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

import UserPicker from "../Users/UserPicker.js"
import { FaCalculator, FaDoorOpen, FaUsers } from "react-icons/fa"

import BookablesPage from "../Bookables/BookablesPage"
import BookingsPage from "../Bookings/BookingsPage"
import UsersPage from "../Users/UsersPage"
import LoaderStyle from "../LoaderStyle/LoaderStyle.js"

export default function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/bookings" className="btn btn-header">
                  <FaCalculator />
                  <span>Bookings</span>
                </Link>
              </li>
              <li>
                <Link to="/bookables" className="btn btn-header">
                  <FaDoorOpen />
                  <span>Bookables</span>
                </Link>
              </li>
              <li>
                <Link to="/users" className="btn btn-header">
                  <FaUsers />
                  <span>Users</span>
                </Link>
              </li>
            </ul>
          </nav>

          <UserPicker />
        </header>
        <div>
          <LoaderStyle />
        </div>
        <Routes>
          <Route path="/bookings" element={<BookingsPage />} />
          <Route path="/bookables" element={<BookablesPage />} />
          <Route path="/users" element={<UsersPage />} />
        </Routes>
      </div>
    </Router>
  )
}
