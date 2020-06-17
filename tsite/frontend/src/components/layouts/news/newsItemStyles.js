import styled from 'styled-components'


const Container = styled.div`
    line-height: 16pt;
    position: relative;
    display: flex;
    padding: 10px;
    max-width: 1060px;
    flex: 0 1 50%;
    justify-self: center;
    min-width: 360px;
`
const Container__row = styled.div`
    background-color: #f1f0ef;
    display: flex;
    width: 100%;
    @media (max-width: 420px) {
        display: flex;
        flex-direction: column-reverse;
    }
`
const Card = styled.div`
    position: relative;
    margin: 5px;
    @media (max-width: 576px) {
        float: right;
        align-items: flex-start;
    }
`
const News = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 1px;
    /* word-break: break-all;  */  /*use this*/
    /* word-wrap: break-word; */
    margin: 5px;
    @media (max-width: 576px) {
        display: inline;
    }
`
const News__title = styled.div`
    font-size: 21px;
    padding: 0 0 0 5pt;

`
const News__body = styled.div`
    font-size: 16px;
    padding: 0 0 0 5pt;

`
const News__time = styled.time`
    color: #474651;
    margin: 5px 0 5px 20pt;
`
const NewsItemStyle = {
    Container,
    Container__row,
    Card,
    News,
    News__title,
    News__body,
    News__time,
};

export default NewsItemStyle;