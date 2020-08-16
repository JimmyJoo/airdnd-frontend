import React from 'react';
import styled from 'styled-components';
import theme from '../../style/theme';
import Button from '../Global/Button';
import { MdFilterList } from 'react-icons/md';

/**
 * todolist의 todo sorting과 유사
 * title: 메시지 주고받기, 보관 처리, 읽지 않음
 * button list: 모든 메시지(), 보관된 메시지(), 읽지 않은 메시지()
 * Button props: children,btnType,color,border,width,height,fontSize,hover,padding,
 * focus,transition,type,...rest
 *
 * Popup 컴포넌트 삽입하기
 */

const ChatHeader = () => {
  return (
    <ChatHeaderDiv>
      <ChatHeaderTitle>메시지 주고받기</ChatHeaderTitle>
      <Button
        btnType="circle"
        border="none"
        hover={{ backgroundColor: theme.lightGray }}
        style={{ width: '4rem', height: '4rem' }}
      >
        <ChatMenubuttonIcon />
      </Button>
    </ChatHeaderDiv>
  );
};

const ChatHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${theme.gray};
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  height: 7.5rem;
`;

const ChatHeaderTitle = styled.h2`
  color: ${theme.black};
  font-size: 1.8rem;
  font-weight: bold;
`;

const ChatMenubuttonIcon = styled(MdFilterList)`
  font-size: 2rem;
`;
export default ChatHeader;
