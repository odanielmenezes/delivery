import styled from "styled-components";
import Main_Walpapper from "../../assets/fundo_main.jpg";

const sobre_page = styled.div`
  .container {
    width: 100vw;
    height: 100vh;
    background-image: url(${Main_Walpapper});
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #fff;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .response {
      height: 85vh;
      width: 700px;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      animation: toLeft 0.5s;

      img.title-sobre {
        width: 700px;
      }

      .conteudo-sobre {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      .text-sobre {
        overflow-y: scroll;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 40px 50px;
        max-height: 45vh;
        border: 2px solid #ff4500;
        border-radius: 10px;
        width: auto;
        text-align: justify;
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
          width: calc(100% - 20px);
          margin: 0 auto;
        }
      }
      .text-sobre::-webkit-scrollbar {
        width: 10px; /* width of the entire scrollbar */
      }

      .text-sobre::-webkit-scrollbar-track {
        background: transparent; /* color of the tracking area */
      }

      .text-sobre::-webkit-scrollbar-thumb {
        background-color: #000; /* color of the scroll thumb */
        border-radius: 10px; /* roundness of the scroll thumb */
        border: 1px solid #ff4500; /* creates padding around scroll thumb */
      }
    }
  }
  @media (max-width: 450px) {
    .text-sobre {
      width: 55vw !important;
      max-height: 40vh !important;
    }
    img.title-sobre {
      width: 330px !important;
    }
  }
`;
export default sobre_page;
