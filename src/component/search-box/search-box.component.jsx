// import { Component } from "react";
import './search-box.styles.css';

const SearchBox = (props) => (
    <input className={`search-box ${props.className}`} 
    type='search' 
    placeholder={props.placeholder}
    onChange={props.onChange}
    />
)

// class SearchBox extends Component {
//     render() {


//         return (
//             <input className={`search-box ${this.props.className}`} 
//             type='search' 
//             placeholder={this.props.placeholder}
//             onChange={this.props.onChange}
//             />

//         )
//     }
// }

export default SearchBox