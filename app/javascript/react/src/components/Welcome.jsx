import * as React from 'react'
import * as ReactDOM from 'react-dom'
import QuestionList from './QuestionList'

const Welcome = () => {
  return (
    <div className="container">
      <h1>Welcome to Rails 7 with React JS course</h1>
      <QuestionList/>
    </div>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Welcome/>, document.getElementById('welcome'))
})

export default Welcome;
