import React, { useEffect, useRef } from 'react';
import { RefundPopup } from '../../Components/Search/FilterPopup';
import { useSelector, useDispatch } from 'react-redux';
import { saveFilter, setFilter, resetFilter } from '../../Modules/search';

// let prevFilter = {};

const RefundPopupContainer = ({ popupState, onClose }) => {
  const { refund } = useSelector(state => state.search.filterApplied);
  const isDisabled = !refund;
  const dispatch = useDispatch();

  const onToggle = () => dispatch(setFilter('refund', !refund));
  const onReset = () => dispatch(resetFilter('refund'));
  const onSave = () => dispatch(saveFilter('refund', refund, isDisabled));

  const popup = useRef();
  const closePopup = ({ target }) => {
    if (
      !popupState ||
      popup.current.contains(target) ||
      target.nodeName === 'svg' ||
      target.nodeName === 'path'
    )
      return;
    // dispatch(saveFilter('refund'), prevFilter);
    onClose('refund');
  };

  useEffect(() => {
    // prevFilter = refund;
    document.addEventListener('click', closePopup);
    return () => {
      document.removeEventListener('click', closePopup);
    };
  }, [closePopup]);

  return (
    <div ref={popup}>
      <RefundPopup
        toggle={refund}
        popupState={popupState}
        isDisabled={isDisabled}
        onSave={onSave}
        onReset={onReset}
        handleClick={onToggle}
      />
    </div>
  );
};

export default RefundPopupContainer;