import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import QuestionList from './QuestionList'

const Welcome = () => {
  return (
    <div className="container">
      <h1>Welcome to Rails 7 with React JS course</h1>
      <QuestionList/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('welcome'))
root.render(
  <React.StrictMode>
    <Welcome/>
  </React.StrictMode>
)

export default Welcome;
