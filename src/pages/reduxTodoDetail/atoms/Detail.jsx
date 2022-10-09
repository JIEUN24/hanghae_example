import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { detailTodo } from "../../../redux/modules/todos";


const Detail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todos.todo);
  console.log('todo --->', todo)

  useEffect(() => {
    dispatch(detailTodo(params.id))
  }, [dispatch, params.id])
  return (
    <Wrap>
      <StCard>
        <div>
          <p>id : {params.id}</p>
          <button onClick={() => {
            navigate(-1)
          }}>이전으로</button>
        </div>
        <h1>{todo?.title}</h1>
        <h3>{todo?.contents}</h3>
      </StCard>
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
  min-height: 900px;
  flex-direction: column;
  background-color: #6267C4;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StCard = styled.div`
  width: 600px;
  height: 600px;
  border: none;
  border-radius: 20px;
  background-color: #ecedff;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    border-radius: 15px;
    padding: 0px 10px;
    border: 2px solid #6267C4;
  }

  button {
    width: 90px;
    height: 35px;
    border: none;
    border-radius: 15px;
    background-color: #6267C4;
    font-family: 'Pretendard';
    font-weight: 700;
    font-size: 15px;
    color: white;

    :hover {
      cursor: pointer;
      transform: scale(0.95);
    }
  }
`

export default Detail