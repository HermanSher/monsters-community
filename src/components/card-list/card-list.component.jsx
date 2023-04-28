// import { Component } from "react";

// import "./card-list.styles.css";
// import Card from '../card/card.component';

// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;

//     return (
//       <div className = 'card-list'>
//         {monsters.map((monster) => {
//           return (
//             <Card monster = {monster}/>
//           );
//         })}
//       </div>
//     );
//   }
// }

// export default CardList;
import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = ({ monsters }) => (
  <div className='card-list'>
    {monsters.map((monster) => {
      return <Card key={monster.id} monster={monster} />;
    })}
  </div>
);

export default CardList;