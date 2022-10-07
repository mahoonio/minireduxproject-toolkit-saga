import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux/cake/cakeActions';
import { useState } from 'react';
const CakeWithPayload = () => {
  const [number, setNumber] = useState(0);
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number Of Cakes - {numOfCakes}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => dispatch(buyCake(number))}>
        Buy {number} Cakes
      </button>
    </div>
  );
};

export default CakeWithPayload;
