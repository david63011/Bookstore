import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/Categories/Categories';

const Cats = () => {
  const dispatch = useDispatch();

  return (
    <div className="cats">
      <div
        className="cat-div"
        onClick={() => {
          dispatch(checkStatus());
        }}
      >
        Under Construction
      </div>
    </div>
  );
};

export default Cats;
