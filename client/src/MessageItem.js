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
    this.refreshList();
  }

  refreshList = async (id) =>  {
    const comments = await ApiClient.getMessages();
    this.setState({
        comments
    })
  }

  render() {
    const { id, submission_date, license_plate, body, comments} = this.props;
    var timePosted = moment(submission_date).format("DD/MM/YYYY - HH:mm");
    return (
      <li className="MessageItem">
      <span>Time: {timePosted}</span>
      <span>To license: {license_plate}</span>
      <span>   {body}  </span>
      <CommentForm refresher = {this.refreshList} messageId = {id} />
      <CommentList comments = {comments}/>
    </li>
    )
  }
}

/* export default ({ id, submission_date, license_plate, body, comments}) => {
    var timePosted = moment(submission_date).format("DD/MM/YYYY - HH:mm");
  console.log(app.refreshlist)
    return (
      <li className="MessageItem">
        <span>Time: {timePosted}</span>
        <span>To license: {license_plate}</span>
        <span>   {body}  </span>
        <CommentForm refresher = {app.refreshList} messageId = {id} />
        <CommentList  comments = {comments}/>
      </li>
    )
} */

export default MessageItem
