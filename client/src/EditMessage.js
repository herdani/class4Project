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
            message:[],
            body:'',
            license_plate:''
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
    componentDidMount = async () => {
        //console.log(this.props);
        const id = this.props.match.params.id;
        const message = await api.getMessage(id);
        // console.log(message);
        this.setState({
          message,
          body:Object.values(message[0])[1],
          license_plate:Object.values(message[0])[3]
        })
        // console.log(Object.values(message[0])[1]);
        // console.log(Object.values(message[0])[3])
      }

   
  handleInputChange(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;
  } 

    render() {
        return(
            <form onSubmit={this.handleSubmit} className="EditMessage
        ">
             <Link className="btn grey" to="/api">Back</Link>
             <h1>Edit Message</h1>
                <div>
                    <label htmlFor="license">License Plate</label>
                        <input id="license" name="license"  defaultValue={this.state.license_plate}  onChange={this.handleInputChange}  type="text" />
                </div>
                <div>
                    <label htmlFor="body">Message</label>
                    <input id="body" name="body" defaultValue={this.state.body}  onChange={this.handleInputChange}  type="text" />
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