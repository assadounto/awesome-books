import React from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { CHECK_STATUS } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories);
  const handlecheck = () => {
    dispatch(CHECK_STATUS());
  };
  return (
    <>
      <button type="submit" onClick={handlecheck}>Check Status</button>
      <div>{status}</div>
    </>
  );
};
export default Categories;
