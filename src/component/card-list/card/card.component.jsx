import { Component } from "react";
import './card.component.css';

const Card = (props) => {
    console.log(props.id)
    return (
        <div className = {props.className} key= {props.id}>
            <img src={props.src}  alt={props.alt} />
            <div className='card-info'>
                <span className='id'>{props.id}</span>
                <h3 className='name'>{props.name}</h3>
                <small className='type'>{props.email} </small>
            </div> 
       </div>
    )
    }

// class Card extends Component {
//      render() {
//         return (
//             <div className = {this.props.className} key= {this.props.key}>
//                     <img 
//                     src={this.props.src} 
//                     alt={this.props.alt} />
//                     <h2>{this.props.name}</h2>
//                     <p>{this.props.email}</p>
//                    </div>
//         )
//     }
// }

export default Card;