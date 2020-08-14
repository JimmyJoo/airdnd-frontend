import React from 'react';
import { StBtn } from '../Global/Button';
import styled from 'styled-components';

const FilterButton = ({ children }) => {
  return (
    <FilterBtn btnType="oval" focus>
      {children}
    </FilterBtn>
  );
};

const FilterList = () => {
  return (
    <>
      <FilterButton>유연한 환불 정책</FilterButton>
      <FilterButton>숙소 유형</FilterButton>
      <FilterButton>요금</FilterButton>
      <FilterButton>필터 추가하기</FilterButton>
    </>
  );
};

const FilterBtn = styled(StBtn)`
  margin: 2rem 1rem 2rem 0;
`;

export default FilterList;