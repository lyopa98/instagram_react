import React,{Component} from 'react';
import User from "./User";

export default class Post extends Component{
    render(){
        return(
            <div className="post">
                <User src ="https://cdn.thedailymash.co.uk/wp-content/uploads/20190324205530/man-serious-2.jpg" alt = "man" name="Артём"/>
                <img src={this.props.src} alt = {this.props.alt }></img>
                <div className="post__name">
                    some acc
                </div>
                <div className = "post_descr">
                    random text
                </div>
            </div>
        )
    }
}