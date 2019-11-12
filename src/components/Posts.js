import React,{Component} from 'react';
import Post from "./Post"

export default class Posts extends Component{
    render(){
        return(
            <div className="left">
                <Post alt="nature" src = "http://www.sunnydalegardencentre.co.uk/files/images/news/picture-an-oak-1534331433-1534331463_n.jpg" />
                <Post alt="nature" src = "https://bloximages.chicago2.vip.townnews.com/tribdem.com/content/tncms/assets/v3/editorial/3/83/38384be2-3ba5-11e8-adec-bf48bc62810f/5acadc92f3c7d.image.jpg?resize=400%2C357" />
            </div>
        )
    }
}

