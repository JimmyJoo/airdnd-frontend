import React, { useState } from 'react';
import styled from 'styled-components';
import Subject from '../Components/Detail/Subject';

const DetailPage = () => {
  const [modalState, setModalState] = useState(false);
  const [popupState, setPopupState] = useState(false);

  const onModal = () => setModalState(true);
  const onPopup = () => setPopupState(true);

  return (
    <>
      <TestHeader />
      <main>
        <Subject />
      </main>
    </>
  );
};

const TestHeader = styled.header`
  height: 8rem;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
`;

export default DetailPage;
