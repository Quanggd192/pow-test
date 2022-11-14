import styled from 'styled-components';

export const SpellListContainer = styled.div`
  width: 95%;
  max-width: 800px;
  margin: auto;
  .spell-list-header {
    display: flex;
    margin-bottom: 20px;
    font-weight: 500;
    font-style: italic;
  }
  .header-name {
    width: 50%;
    padding-left: 30px;
    cursor: pointer;
  }
  .header-url {
    width: 40%;
  }
  .header-fav {
    width: 10%;
  }
  .sort-icon {
    width: 24px;
    height: 24px;
  }
  .sort-up {
    position: relative;
    top: 10px
  }
`

export const SpellContainer = styled.div<{isFav: boolean}>`
  height: 50px;
  max-width: 800px;
  margin: auto;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
  /* background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='18' ry='18' stroke='black' stroke-width='5' stroke-dasharray='15%2c 15%2c 1' stroke-dashoffset='43' stroke-linecap='round'/%3e%3c/svg%3e"); */
  cursor: pointer;
  margin-top: 15px;
  border: ${props => props.isFav ? `solid 2px #777` : `solid 2px #404040`};
  border-top-left-radius: 37px 140px;
  border-top-right-radius: 23px 130px;
  border-bottom-left-radius: 110px 19px;
  border-bottom-right-radius: 120px 24px;
  &:hover {
    opacity: 0.8;
    border-color: ${props => props.isFav ? `green` : `#404040`};
  }
  .spell-name {
    width: 30%;
    padding-left: 30px;
  }
  .spell-url {
    width: 35%;
  }
  .spell-action {
    width: 25%;
  }
  .spell-fav {
    width: 10%;
    button {
      cursor: pointer;
    }
    img {
      width: 40px;
      color: green;
    }
  }
  /* .favorite {
    color: green;
    font-weight: bold;
  } */
  .add-fav-icon {
    cursor: pointer;
    &:hover {
      fill: green;
    }
  }
`
export const SpellListHeader = styled.div`
  display: flex;
  margin-bottom: 20px;
  font-weight: 500;
  font-style: italic;
`