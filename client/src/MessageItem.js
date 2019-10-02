import React from 'react';
import moment from 'moment';
import SocailShare from './SocialShare.css'
import { FacebookShareButton, LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  EmailShareButton,} from 'react-share';
import { FacebookIcon, EmailIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  LinkedinIcon,} from 'react-share';
import './MessageItem.css';
import FacebookShareCount from 'react-share/lib/FacebookShareCount';

export default ({ id, submission_date, license_plate, body, handleDelete }) => {
    var timePosted = moment(submission_date).format('DD/MM/YYYY - HH:mm');
         const shared = ()=> {
           console.log("shared")
         }
    return (
        <li className="MessageItem">
            <span>Time: {timePosted} - </span>
            <span>To license: {license_plate} : </span>
            <span> {body} </span>
            <button onClick={()=>handleDelete(id)}>X</button>
            <div className="SocialShare">
            <FacebookShareButton  url="https://github.com/nygardk/react-share#readme" onClick={shared}>
           <FacebookIcon size={30}/> 
           </FacebookShareButton>
           <TwitterShareButton  url="https://github.com/nygardk/react-share#readme">
              <TwitterIcon size={30}/>
           </TwitterShareButton >
           <EmailShareButton  url="https://github.com/nygardk/react-share#readme">
             <EmailIcon size={30}/>
           </EmailShareButton>
           
            </div>
           
        </li>
    );
};