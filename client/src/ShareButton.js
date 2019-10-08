import React from 'react';
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
    import {
      FacebookShareCount,
      PinterestShareCount,
      VKShareCount,
      OKShareCount,
      RedditShareCount,
      TumblrShareCount,
    } from 'react-share';

function ShareButton (props){
    return(

        <div className="SocialShare">
        <FacebookShareButton  url="https://github.com/nygardk/react-share#readme" >
       <FacebookIcon size={30}/> 
       <FacebookShareCount url="https://github.com/nygardk/react-share#readme">
       {shareCount => (
<span className="myShareCountWrapper">{shareCount}</span>
)}
       </FacebookShareCount>
       </FacebookShareButton>
       <TwitterShareButton  url="https://github.com/nygardk/react-share#readme">
          <TwitterIcon size={30}/>
       </TwitterShareButton >
       <EmailShareButton  url="https://github.com/nygardk/react-share#readme">
         <EmailIcon size={30}/>
       </EmailShareButton>
       
        </div>

    );

}

export default ShareButton;