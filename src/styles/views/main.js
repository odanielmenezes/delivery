import styled from 'styled-components'
import Main_Walpapper from '../../assets/fundo_main.jpg'

const main_page = styled.div`
.main {
    width: 100vw;
    height: 100vh;
    background-image: url(${Main_Walpapper});
    background-repeat: no-repeat;
    background-size: cover;
    background-color:#fff;
    min-height: 100vh;

    .conteudo {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 100vw;
        margin: 0px;

        img.logo_principal {
            width: 800px;
        } 
    }
}
.principal {
    height: 85vh;
    width: 100vw;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}
@media (max-width: 450px) {
    img.logo_principal {
        width: 380px !important;
    }
}
`
export default main_page;