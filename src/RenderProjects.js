import React, {Component} from "react";
import PROJECTS_ARRAY from "./data/project";

class RenderProjects extends Component {
    render() {
        return (
            <div>
                <h2>My Projects</h2>
                <div>{
                    PROJECTS_ARRAY.map(project => {
                        return (
                            /* <div key={project.id}>{project.title}</div>*/
                            <PropsTest key={project.id} propsTest={project}/>
                        );
                    })
                }
                </div>
            </div>
        );
    }
}

class PropsTest extends Component {
    render() {
        console.log("this.props", this.props);
        var {title, techStack, image} = this.props.propsTest;
        return (
            <div style={{display: "inline-block", margin: 20 , border :2}}>
                <h2>{title}</h2>
                <img src={image} style={{width: 200, height: 120}}/>
                <h3>{techStack}</h3>
            </div>

        );
    }


}

export default RenderProjects;