import * as React from 'react'
import * as ReactDOM from 'react-dom'

class QuestionDetail extends React.Component {

  constructor(props){
    super(props)
    this.state = { likeCount: 0 }
    this.updateLikeCount = this.updateLikeCount.bind(this)
  }

  updateLikeCount(){
    this.setState(function(state) {
      return{
        likeCount: state.likeCount + 1
      }
    })
  }

  render() {
    return (
      <div className='card rounded-0 mt-3'>
        <div className='card-body'>
          <h3 className='card-title'>{this.props.question.title}</h3>
          <p className='lead'><span className='badge bg-primary'>{this.props.question.tag}</span>
          </p>
          <button className='btn btn-primary mt-2' onClick= {this.updateLikeCount}>Like</button>
          {
            this.state.likeCount > 0 ?
            <span className='badge bg-info'>{this.state.likeCount}</span> : ""
          }
        </div>
      </div>
    )
  }
}

export default QuestionDetail
