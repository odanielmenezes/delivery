import styled from 'styled-components'

const main_button = styled.div`
.button {
    display: flex;
    justify-content: center;
    img {
        width: 400px;
        margin: 100px 0;
        cursor: pointer;
        box-shadow: 10px 10px 5px rgba(71,71,71, 0.5);

        :active {
            transform: translate(0,5px);
            box-shadow: 5px 5px 2px rgba(71,71,71, 0.5);
        }
    }
}
@media (max-width: 450px) {
    img {
        width: 200px !important;
    }
}
`
export default main_button