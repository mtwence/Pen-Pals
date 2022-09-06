import { AiFillDelete } from 'react-icons/fa';

const Letter = ({ id, content, date, removeLetter }) => {
	return (
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="../public/letter_card.png" alt="Card img">
        <div class="card-body">
          <p class="card-text">{content}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
	);
};

export default Letter;

// for delete 
{/* <AiFillDelete
onClick={() => removeLetter(id)}
className='delete-icon'
size='1 rm' />*/}