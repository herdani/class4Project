import React, { Component } from 'react';
import {
    FacebookShareCount,
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    EmailShareButton,
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    WhatsappIcon,
    EmailIcon,
} from 'react-share';
import './ReactShare.css';

class ReactShare extends Component {
    render() {
        const shareUrl = 'http://github.com';
        const title = 'GitHub';

        return (
            <div className="Demo__container">
                <div className="Demo__some-network">
                    <FacebookShareButton
                        url={shareUrl}
                        quote={title}
                        className="Demo__some-network__share-button"
                    >
                        <FacebookIcon size={32} round />
                    </FacebookShareButton>
                </div>

                <div className="Demo__some-network">
                    <TwitterShareButton
                        url={shareUrl}
                        title={title}
                        className="Demo__some-network__share-button"
                    >
                        <TwitterIcon size={32} round />
                    </TwitterShareButton>

                    <div className="Demo__some-network__share-count">
                        &nbsp;
                    </div>
                </div>

                <div className="Demo__some-network">
                    <WhatsappShareButton
                        url={shareUrl}
                        title={title}
                        separator=":: "
                        className="Demo__some-network__share-button"
                    >
                        <WhatsappIcon size={32} round />
                    </WhatsappShareButton>

                    <div className="Demo__some-network__share-count">
                        &nbsp;
                    </div>
                </div>

                <div className="Demo__some-network">
                    <LinkedinShareButton
                        url={shareUrl}
                        windowWidth={750}
                        windowHeight={600}
                        className="Demo__some-network__share-button"
                    >
                        <LinkedinIcon size={32} round />
                    </LinkedinShareButton>
                </div>

                <div className="Demo__some-network">
                    <EmailShareButton
                        url={shareUrl}
                        subject={title}
                        body="body"
                        className="Demo__some-network__share-button"
                    >
                        <EmailIcon size={32} round />
                    </EmailShareButton>
                </div>
            </div>
        );
    }
}

export default ReactShare;
