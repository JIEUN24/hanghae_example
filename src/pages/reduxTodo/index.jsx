import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/modules/todos";
import styled from "styled-components";
import Card from './atoms/Card';

const ReduxTodo = () => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [id, setId] = useState(1);
  const [isDone, setIsDone] = useState(false)
  const todos = useSelector((state) => state.todos.todoList);
  const dispatch = useDispatch();
  console.log(todos)
  return (
    <Wrap>
      <StHeader>
        <p>나만의 Todo-List</p>
      </StHeader>
      <StBody>
        <div>
          <span>제목</span>
          <StInput
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <span>내용</span>
          <StInput
            type="text"
            value={contents}
            onChange={(e) => {
              setContents(e.target.value);
            }}
          />
        </div>
        <StButton onClick={() => {
          dispatch(addTodo({ id, title, contents, isDone }));
          setTitle("")
          setContents("")
          setId(id + 1)
        }}>추가하기</StButton>
      </StBody>

      <StCardBox>
        <StTitle>해야할 일</StTitle>
        <StTodoBox>
          {todos?.map((item) => {
            if (item.isDone === false) {
              return <Card todos={item} />
            } else {
              return null
            }
          })}
        </StTodoBox>
        <StTitle>완료한 일</StTitle>
        <StTodoBox>
          {todos?.map((item) => {
            if (item.isDone === true) {
              return <Card todos={item} />
            } else {
              return null
            }
          })}
        </StTodoBox>
      </StCardBox>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
  flex-direction: column;
`;

const StHeader = styled.div`
  width: 100%;
  height: 70px;

  p {
    padding: 0px 20px;
    font-family: 'Pretendard';
    font-weight: 700;
    font-size: 23px;
    text-align: left;
  }
`

const StBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0px 20px;
  background-color: #ecedff;
  border-radius: 14px;
  margin-bottom: 10px;

  span {
    font-family: 'Pretendard';
    font-weight: 700;
    font-size: 20px;
    color: #6267C4
  }
`

const StButton = styled.button`
  width: 100px;
  height: 35px;
  border: none;
  border-radius: 10px;
  background-color: #6267C4;
  color: white;
  border-radius: 15px;
  cursor: pointer;

  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 15px;
`;

const StInput = styled.input`
  border: 2px solid #6267C4;
  background: none;
  margin: 0px 24px;
  height: 35px;
  width: 300px;
  border-radius: 10px;
  outline: none;
  padding: 0 10px;
`;

const StCardBox = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
  flex-direction: column;
`
const StTitle = styled.div`
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 40px;
  color: #6267C4;
  margin: 10px 0px 0px 0px;
  padding-left: 20px;
  text-align: left;
`

const StTodoBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  margin: 20px 0px;
  padding-left: 20px;
`

export default ReduxTodo;