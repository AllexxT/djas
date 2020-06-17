import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex: ${({ isMonument }) => isMonument ? "1" : "auto"};
    display: inherit;
`
const MainFrame = styled.div`
    @media (max-width: 768px){
        display: flex;
        justify-content: center;
    }
`
const MainF__row = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 6px 6px 6px 0;
    box-shadow: 0px 5px 10px gray;
    background-color: rgba(255, 255, 255, 0.7);
    &>div {
    }
    @media (max-width: 768px){
        justify-content: center;
        margin-bottom: 10px;
        width: fit-content;
    }
    & .image-gallery{
        display: flex;
        flex-flow: column;
        justify-content: center;
    }
    & .image-gallery-content.fullscreen {
        z-index: 2000;
    }
`


const Glr = {
    Wrapper,
    MainFrame,
    MainF__row,
}

export default Glr;