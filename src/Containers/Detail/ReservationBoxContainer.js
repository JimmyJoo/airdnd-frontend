import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ReservationBox from '../../Components/Detail/ReservationBox';

const ReservationBoxContainer = ({ home }) => {
  const searchData = useSelector(state => state.searchForm);
  const history = useHistory();

  const getPercentage = price => {
    const regExp = /\d/g;
    const filteredNumber = price.match(regExp).join('');
    return ((filteredNumber / 100) * 12).toLocaleString(undefined, {
      maximumFractionDigits: 0,
    });
  };
  const getTotalPrice = (price, percentage) => {
    const regExp = /\d/g;
    const filteredPrice = Number(price.match(regExp).join(''));
    const filteredPercentage = Number(percentage.match(regExp).join(''));
    return (filteredPrice + filteredPercentage).toLocaleString(undefined, {
      maximumFractionDigits: 0,
    });
  };

  return (
    <ReservationBox
      home={home}
      getPercentage={getPercentage}
      getTotalPrice={getTotalPrice}
      history={history}
      searchData={searchData}
    />
  );
};

export default ReservationBoxContainer;