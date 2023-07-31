import * as React from 'react'
import * as ReactDOM from 'react-dom'
import QuestionDetail from './QuestionDetail'

const QuestionList = () => {
    const questionList = [
        {
          id: 1,
          title: 'How to check if a key is present in a Hash?',
          tag: 'Ruby'
        },
        {
          id: 2,
          title: 'What is the difference between string and a symbol?',
          tag: 'Ruby'
        },
        {
          id: 3,
          title: 'What will happen if we add two keys with the same name in a Hash?',
          tag: 'Ruby'
        },
        {
          id: 4,
          title: 'How to delete a given key from a Hash?',
          tag: 'Ruby'
        },
        {
          id: 5,
          title: 'How to check if two hashes are identical?',
          tag: 'Ruby'
        }
    ]
  return (
    <div className='row'>
      <div className='col-lg-10 mx-auto'>
        {questionList.map((question) =>
        <QuestionDetail question={question} key={question.id}/>
        )}
      </div>
    </div>
  )
}

export default QuestionList
