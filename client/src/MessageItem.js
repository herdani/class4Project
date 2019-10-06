import React, {Component} from 'react';
import moment from 'moment';
import './MessageItem.css';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import ApiClient from './apiClient';
import app from'./App';

class MessageItem extends Component {
  constructor(props){
    super(props);
    this.state = {
        comments: []
      }
  }

  componentDidMount = async () => {
    let comments = this.props.comments
    this.setState({
      comments
    })
  }


  refreshList = async () =>  {
    const comments = await ApiClient.getCommentsById(this.props.id);

    this.setState({
        comments
    })
  }

  render() {
    const { id, submission_date, license_plate, body} = this.props;
    var timePosted = moment(submission_date).format("DD/MM/YYYY - HH:mm");
    return (
      <li className="MessageItem">
      <span>Time: {timePosted}</span>
      <span>To license: {license_plate}</span>
      <span>   {body}  </span>
      <button onClick={() => handleDelete(id)}>X</button>
      <CommentForm refresher = {this.refreshList} messageId = {id} />
      <CommentList  comments = {this.state.comments}/>
    </li>
    )
  }
}


export default MessageItem
