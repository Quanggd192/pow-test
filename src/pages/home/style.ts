import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 92%;
  padding: 100px 50px;
`
export const HomeTitle = styled.div`
  font-size:30px;
  border-bottom: solid 3px #000;
  margin-bottom: 30px;
  padding-bottom: 10px;
  label {
    font-size: 18px;
  }
  display: flex;
  justify-content: space-between;
  .search-box {
    height: 25px;
    border-radius: 10px;
    padding: 0 10px;
    border: none;
  }
  .font-16-sort {
    font-size: 16px;
    cursor: pointer;
    &:hover {
      color: green;
    }
  }
  
`