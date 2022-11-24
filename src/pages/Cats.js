import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/Categories/Categories';

const Cats = () => {
  const cat = useSelector((state) => state.categorie);
  const dispatch = useDispatch();
  
  const handleFilterChange = () => {
    dispatch(checkStatus());
  };
  return (
    <div ClassName= 'stat-container'>
        <button className='cat-btn' type='button' onClick={handleFilterChange}>Check Status</button>
        <p>{cat}</p>
    </div>
  );
};

export default Cats;

