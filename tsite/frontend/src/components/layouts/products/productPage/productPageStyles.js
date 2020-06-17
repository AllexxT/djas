import styled from "styled-components";

const Wrapper = styled.div`
    padding: 0 0 15pt 0;
`;
const Gallery_Table__row = styled.div`
    display: flex;
    @media (max-width: 768px){
        display: block;
    }
`;
const GalleryWrapper = styled.div`
    position: relative;
    display: flex;
    flex: 1 1 70%;

    @media (max-width: 768px){
        flex: 1 1 auto;
        justify-items: center;
        width: 100%;
    }
`;
const TableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 3 auto;
    padding: 0 2pt 0 2pt;
`
const TitleWrapper = styled.div`
`;
const Title__row = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 5pt;
    @media (min-width: 950px){
            padding-bottom: 15pt;
        }
    h1 {
        font-size: 24pt;
        color: rgb(35, 32, 32);
        line-height:2.5rem;
        text-align: center;
    }
`;
const Sizes = styled.div`
    align-self: center;
    padding: 5pt 0 5pt 0;
    font-size: 12pt;
    flex: 1 1 auto;
    text-align: center;
`
const DescriptionWrapper = styled.div`
    max-width: 100vw;
    padding: 10pt 5pt 0 5pt;
`;

const PP = {
    Wrapper,
    Gallery_Table__row,
    GalleryWrapper,
    TableWrapper,
    TitleWrapper,
    Title__row,
    Sizes,
    DescriptionWrapper,
}

export default PP;