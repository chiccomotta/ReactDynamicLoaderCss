import React, { useState } from "react"

const LoaderStyle = () => {
  const [css, setCss] = useState("/App.css")

  const handleButtonClick = () => {
    css === "/style2.css" ? setCss("/App.css") : setCss("/style2.css")
  }

  return (
    <div>
      <link rel="stylesheet" type="text/css" href={process.env.PUBLIC_URL + css} />
      <button type="button" onClick={handleButtonClick}>
        Click to update stylesheet
      </button>
    </div>
  )
}

export default LoaderStyle
