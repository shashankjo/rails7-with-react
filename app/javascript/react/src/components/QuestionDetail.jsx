import * as React from 'react'
import * as ReactDOM from 'react-dom'

class QuestionDetail extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      likeCount: 0,
      dislikeCount: 0
    }
    this.updateLikeCount = this.updateLikeCount.bind(this)
    this.updateDisLikeCount = this.updateDisLikeCount.bind(this)
  }

  updateLikeCount = () => {
    this.setState((state) => {
      console.log("shashankkkkkkkk")
      return{
        likeCount: state.likeCount + 1
      }
    })
  }

  updateDisLikeCount = () => {
    this.setState((state) => {
      console.log("shashank")
      return{
        dislikeCount: state.dislikeCount + 1
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
          <button type="button" className="btn btn-primary position-relative" onClick={this.updateLikeCount} style={{marginRight: 1 + 'em'}}>
            Like
            { this.state.likeCount > 0 ?
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">{this.state.likeCount}</span> : ''
            }
          </button>
          <button type="button" className="btn btn-danger position-relative" onClick={this.updateDislikeCount}>
            Dislike
            { this.state.dislikeCount > 0 ?
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{this.state.dislikeCount}</span> : ''
            }
          </button>
        </div>
      </div>
    )
  }
}

export default QuestionDetail
