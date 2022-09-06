import { AiFillDelete } from 'react-icons/fa';

const Letter = ({ id, text, date, removeLetter }) => {
	return (
		<div className='letter'>
			<span>{text}</span>
			<div className='letter-footer'>
				<small>{date}</small>
				<AiFillDelete
					onClick={() => removeLetter(id)}
					className='delete-icon'
					size='1 rm'
				/>
			</div>
		</div>
	);
};

export default Letter;