import { AiFillDelete } from "react-icons/fa";
import Card from "../../assets/letter_card.png";

const Letter = ({ id, content, date, removeLetter }) => {
  return (
    // <div class="card" style="width: 18rem;">
    <div class="card">
      <img class="card-img-top" src={Card} alt="Card img" />
      <div class="card-body">
        <p class="card-text">{content}</p>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Letter;

// for delete
{
  /* <AiFillDelete
onClick={() => removeLetter(id)}
className='delete-icon'
size='1 rm' />*/
}
