import styled from "styled-components";
import Main_Walpapper from "../../assets/fundo_main.jpg";

const main_page = styled.div`
  .main {
    width: auto;
    height: 100vh;
    background-image: url(${Main_Walpapper});
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #fff;
    min-height: 100vh;

    .conteudo {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      width: 100vw;
      margin: auto;

      img.logo_principal {
        width: 800px;
        margin: auto;
      }
    }
  }
  .principal {
    height: calc(100vh - 40vh);
    width: 100vw;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    animation: toLeft 0.5s;
  }
  @keyframes toLeft {
    from {
      margin-left: -1000px;
      opacity: 0;
    }
    to {
      margin-left: 0;
      opacity: 1;
    }
  }
  @media (max-width: 450px) {
    img.logo_principal {
      width: 320px !important;
    }
  }
`;
export default main_page;
