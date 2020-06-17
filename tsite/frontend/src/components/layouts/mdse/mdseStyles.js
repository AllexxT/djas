import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
  font-size: 28px;
`;
const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap-reverse;
    /* max-width: 1060px; */
    justify-content: center;
    padding: 15pt 0 15pt 0;
`;
const CategoryItem = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    margin: 0 7pt 15pt 7pt;
    flex: 1 1 300px;
    height: 250px;
    justify-content: center;
    overflow: hidden;
    border-radius: 5px;
    box-shadow: 5px 5px 15px gray;
    transition: all 0.3s ease-out;
    background-color: white;
    cursor: pointer;
    &:hover {
        box-shadow: none;
        p {
            margin: 2pt 0 2pt 0;
        }
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    p {
        font-weight: bold;
        font-size: 14pt;
        opacity: 0.8;
        transition: all 0.3s;
        margin: 3pt 0 3pt 0;
    }
`;
const Label = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    bottom: 5%;
    background: #F5CB55;
    width: 100%;
    border-radius: 5px;
    border-top: 1px solid rgb(210, 202, 202);
    border-bottom: 1px solid rgb(210, 202, 202);
    /* backdrop-filter: blur(2px); */
    @media (max-width: 330px) {
      position: relative;
    }
`;

const Styles = {
    Title,
    Wrapper,
    CategoryItem,
    Label,
};

export default Styles;