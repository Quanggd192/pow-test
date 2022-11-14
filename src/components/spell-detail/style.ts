import styled from "styled-components";

export const SpellDetailContainer = styled.div`
  width: 100%;
  min-height: 60vh;
  margin-top: 50px;

  .spell-name {
    font-size: 30px;
    font-weight: bold;
    font-style: italic;
    border-bottom: solid 2px #000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 20px 0 20px;
    button {
      width: 120px;
      height: 40px;
      margin-bottom: 5px;
      border: none;
      border-radius: 10px;
      cursor: pointer;
    }
    .btn-normal {
      background: #f0f0f0;
      color: #000;
      &:hover {
        background: green;
        color: #fff;
      }
    }
    .btn-active {
      background: green;
      color: #fff;
      &:hover {
        background: #f0f0f0;
        color: #000;
      }
    }
  }
  .desc-header {
    font-size: 25px;
    font-weight: bold;
    font-style: italic;
    padding-bottom: 30px;
  }
`;
export const SpellName = styled.div`
  font-size: 30px;
  font-weight: bold;
  font-style: italic;
  border-bottom: solid 2px #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px 10px 20px;
`;

export const SpellImageFigure = styled.div`
  height: 300px;
  padding: 50px 0;
  text-align: center;
  img {
    height: 250px;
    border-radius: 10px;
  }
`;

export const SpellAtributes = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px 50px 20px;
  border-bottom: solid 2px #000;
`;

export const AttributeGroup = styled.div`
    width: 25%;
    padding-right: 20px;
`
