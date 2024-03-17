import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    nameInput: '',
    commentInput: '',
    commentsList: [],
  }

  onChangeNameInput = event => {
    this.setState({nameInput: event.target.value})
  }

  onChangeCommentInput = event => {
    this.setState({commentInput: event.target.value})
  }

  onAddComment = event => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state
    const initialClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newComment = {
      id: uuidv4(),
      name: nameInput,
      comment: commentInput,
      time: new Date(),
      isLiked: false,
      initialClassName,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      nameInput: '',
      commentInput: '',
    }))
  }

  onDeleteComment = id => {
    const {commentsList} = this.state
    const updatedList = commentsList.filter(eachItem => eachItem.id !== id)
    this.setState({commentsList: updatedList})
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  render() {
    const {nameInput, commentInput, commentsList} = this.state
    return (
      <div className="app-container">
        <div className="comments-container">
          <h1 className="heading">Comments</h1>
          <div className="top-container">
            <div className="comments-input-container">
              <form className="form-container" onSubmit={this.onAddComment}>
                <p className="say-something">
                  Say something about 4.0 Technologies
                </p>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={nameInput}
                  className="name-input"
                  onChange={this.onChangeNameInput}
                />
                <textarea
                  rows="6"
                  placeholder="Your Comment"
                  value={commentInput}
                  className="comment-input"
                  onChange={this.onChangeCommentInput}
                />
                <button type="submit" className="comment-button">
                  Add Comment
                </button>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="comments-image"
            />
          </div>
          <hr className="line" />
          <div className="bottom-container">
            <p className="comments">
              <span className="number">{commentsList.length}</span> comments
            </p>
            <ul className="comments-list-container">
              {commentsList.map(eachComment => (
                <CommentItem
                  key={eachComment.id}
                  commentDetails={eachComment}
                  toggleIsLiked={this.toggleIsLiked}
                  deleteComment={this.onDeleteComment}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Comments
