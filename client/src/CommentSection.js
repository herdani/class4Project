import React, { Component }from 'react';
import apiClient from './apiClient';
import Comments from './Comments'
import CommentForm from './CommentForm';
class CommentSection extends Component {
    constructor(props){
        super(props)
        // this.state = {
        //     comments:[],
        // }
        
    }
    //   refreshComments = async () =>{
    //       const comments = await apiClient.getComments();
    //       this.setState({
    //           comments,
    //       })
    //   }
     render() {

       const {comments}= this.props;
       const $comments = comments
       .filter(comment => comment.post_id === this.props.post_id)
       .map( comment => (
            <Comments key={comment.id} {...comment}></Comments>
       )
);
        
return(

         <section className="MessageList">
                <ul>{$comments}</ul>
                <CommentForm refreshList={this.props.refreshList} post_id={this.props.post_id}/>
            </section>
        );
        }
    
}

export default CommentSection;