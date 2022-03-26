import styled from "styled-components";

const header = styled.div`
  .header {
    background-image: linear-gradient(to top, transparent, #001);
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    min-width: 100%;
    height: 15vh;
    margin: 0px;
    svg {
      color: #ff4500;
    }
    nav {
      width: auto;
      ul {
        display: flex;
        justify-content: flex-end;
        list-style: none;
        margin: 0 30px;

        a {
          text-decoration: none;
          color: #fff;
          transition: 0.3s;
          li {
            cursor: pointer;
            margin: 0 10px;
            color: #fff;
            font-size: 1.2em;
            transition: 0.3s;
            :hover {
              color: red;
              transition: 0.3s;
            }
          }
        }
      }
    }
    .logo {
      margin: 10px;
      img {
        width: 100px;
        height: 82px;
      }
    }
  }
  @media (max-width: 450px) {
    .header {
      flex-direction: column;
      nav {
        width: 100%;
        display: flex;
        justify-content: center;
        ul {
          margin: 0px;
          display: inline-flex;
          justify-content: space-around;
          padding: 0px;
          width: calc(100vw - 20px);
          li {
            display: contents;
            font-size: 1.2em;
            margin: 0px;
            text-decoration: none;
          }
          a {
            display: flex;
            justify-content: center;
            flex-direction: column;
            svg {
              margin: 5px 0;
            }
          }
        }
      }
    }
  }
`;
export default header;
