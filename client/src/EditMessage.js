import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import api from './apiClient';
import './EditMessage.css';

class EditMessage extends Component {
    constructor(props){
        super(props);
        this.state = {
            submitted: false,
            message:[]
        }
    }
    
    
    handleSubmit = async (event) => {
        event.preventDefault();
        const messageData = new FormData(event.target);
        const id = this.props.match.params.id;
        await api.editMessage(id,{
            license_plate: messageData.get('license'),
            body: messageData.get('body')
        });
        
        
       
        this.setState({
            submitted: true
        }
    
        );
        this.props.refresher();
       
    };
    //
    // handleSubmit = async (event) => {
    //     event.preventDefault();
    //     const id = this.props.match.params.id;
    //     const messageData = new FormData(event.target);
    //     await api.editMessage(id,{
    //         license_plate: messageData.get('license'),
    //         body: messageData.get('body')
    //     });
    //     this.setState({
    //         submitted: true
    //     }
    
    //     )

    //     this.props.refresher();
       
    // };
   
  handleInputChange(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;

   
  } 

    render() {
        const {plate}=this.props.message;
        console.log(this.props.message);
        return(
            <form onSubmit={this.handleSubmit} className="EditMessage
        ">
             <Link className="btn grey" to="/api">Back</Link>
             <h1>Edit Message</h1>
                <div>
                    <label htmlFor="license">License Plate</label>
                        <input id="license" name="license"  value={this.props.message.license_plate}  onChange={this.handleInputChange}  type="text" />
                </div>
                <div>
                    <label htmlFor="body">Message</label>
                    <textarea id="body" name="body" value={this.props.message.body}  onChange={this.handleInputChange}  type="text"/>
                </div>
                <div>
                    <input type="submit" value="Edit"/>
                </div>
                {this.state.submitted && <Redirect to= "/api"/>}
            </form>
        )
    }
};


export default EditMessage;