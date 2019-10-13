import React from 'react';
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    PinterestShareButton,
    EmailShareButton,
    FacebookIcon,
    TwitterIcon,
    WhatsappIcon,
    LinkedinIcon,
    PinterestIcon,
    EmailIcon,
} from 'react-share';

export default ({ id, submission_date, license_plate, body }) => {
    return (
        <div style={{ display: 'flex' }}>
            <FacebookShareButton
                url={'www.google.com'}
                quote={`${license_plate} || ${body}`}
            >
                <FacebookIcon size={32} round={true} />
            </FacebookShareButton>

            <TwitterShareButton
                url={'www.google.com'}
                title={`${license_plate} || ${body}`}
            >
                <TwitterIcon size={32} round={true} />
            </TwitterShareButton>

            <LinkedinShareButton
                url={'www.google.com'}
                title={'title'}
                description={'description'}
            >
                <LinkedinIcon size={32} round={true} />
            </LinkedinShareButton>

            <WhatsappShareButton
                url={'www.google.com'}
                title={`${license_plate} || ${body}`}
                separator={' - '}
            >
                <WhatsappIcon size={32} round={true} />
            </WhatsappShareButton>

            <PinterestShareButton
                url={'www.google.com'}
                description={`${license_plate} || ${body}`}
            >
                <PinterestIcon size={32} round={true} />
            </PinterestShareButton>

            <EmailShareButton
                url={'www.google.com'}
                subject={`You have a message related with license plate no: ${license_plate}`}
                body={body}
            >
                <EmailIcon size={32} round={true} />
            </EmailShareButton>
        </div>
    );
};
