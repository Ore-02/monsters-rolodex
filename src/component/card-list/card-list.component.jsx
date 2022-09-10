import { Component } from "react";
import Card from './card/card.component'
import './card-list.styles.css'

const CardList = ({monsters}) => (
    <div className = 'card-list'>
        {monsters.map((monster) => {
            const id = monster.id.toString().padStart(3, '0')
           return (
           <Card
           className = 'card-container'
           id= {id}
           alt={`monster ${monster.name}`}
           src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
           name={monster.name}
           email={monster.email}/>
           )
        })}
    </div>
)



// class CardList extends Component {

//     render() {

//         const { monsters } = this.props

//         return (
//             <div className = 'card-list'>
//                 {monsters.map((monster) => {
//                    return (
//                    <Card
//                    className = 'card-container'
//                    key= {monster.id}
//                    alt={`monster ${monster.name}`}
//                    src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
//                    name={monster.name}
//                    email={monster.email}/>
//                    )
//                 })}
//             </div>
//         )
//     }
// }

export default CardList;