import React from 'react'
import styled from "styled-components";
import { deleteTodo } from "../../../redux/modules/todos";
import { updateTodo } from "../../../redux/modules/todos";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

const Card = ({ todos }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Wrap>
      <p onClick={() => {
        navigate(`/detail/${todos.id}`)
      }}>상세보기</p>
      <div>
        <h3>{todos?.title}</h3>
        <h5>{todos?.contents}</h5>
      </div>
      <StButtonBox>
        {todos?.isDone === false ?
          <button className='btn1' onClick={() => {
            dispatch(updateTodo(todos.id))
          }}>완료</button>
          :
          <button className='btn1' onClick={() => {
            dispatch(updateTodo(todos.id))
          }}>취소</button>
        }
        <button className='btn2' onClick={() => {
          dispatch(deleteTodo(todos.id))
        }}>삭제</button>
      </StButtonBox>
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 260px;
  height: 200px;
  border: 2px solid #6267C4;
  border-radius: 10px;
  margin: 10px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: left;
  font-family: 'Pretendard';
  box-shadow: 5px 5px 5px #999ab6;
  p {
    width: 100%;
    font-weight: 500;
    font-size: 20px;
    color: #6267C4;
    margin: 0px;
    padding-left: 0px;
    text-align: left;

    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  h3 {
    font-weight: 700;
    font-size: 20px;
    min-height: 20px;
    margin: 10px 0px 5px 0px;
  }

  h5 {
    font-weight: 500;
    font-size: 15px;
    min-height: 20px;
    margin: 10px 0px 5px 0px;
  }
`;

const StButtonBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .btn1 {
    width: 48%;
    height: 40px;
    border: 2px solid #6267C4;
    border-radius: 10px;
    background: none;
    font-family: 'Pretendard';
    font-weight: 700;
    font-size: 17px;

    :hover {
      cursor: pointer;
      background-color: #6267C4;
      color: white;
    }
  }

  .btn2 {
    width: 48%;
    height: 40px;
    border: 2px solid red;
    border-radius: 10px;
    background: none;
    font-family: 'Pretendard';
    font-weight: 700;
    font-size: 17px;

    :hover {
      cursor: pointer;
      background-color: red;
      color: white;
    }
  }
`


export default Card