import React, {Component} from "react";
import PROFILES from './data/SocialData';

class Social extends Component {
    render() {
        return (
            <div >
                <h4><b>Connect with Me !</b></h4>
                {
                    PROFILES.map(profile =>
                        <SocialProps key={profile.id} socialProp={profile}/>
                    )
                }
            </div>
        );
    }
}

class SocialProps extends Component {

    render() {
        return (
            <div style={{display: "inline-block", margin:10 , border :2}}>
                <a href={this.props.socialProp.link }>
                <img src={this.props.socialProp.image}  style={{height:25, width :25}}/>
                </a>
            </div>
        );
    }
}

export default Social;