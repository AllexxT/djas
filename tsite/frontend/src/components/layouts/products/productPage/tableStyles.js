import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-flow: column;
    flex: 1 1 auto;
    padding-left: 5px;
    align-items: center;
`
const Press = styled.div `
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
`

const Content__row = styled.div`
    display: flex;
    box-shadow: 0px 10px 8px -8px gray;
    width: fit-content;
    caption {
        font-weight: bold;
        font-size: 17pt;
        color: #3D3511;
        margin-bottom: 15pt;
        display: none;
        @media (min-width: 950px){
            display: table-caption;
        }
    }
    table {
        border-spacing: 0;
        empty-cells: hide;
        }
    td {
        padding: 10px 10px;
        text-align: center;
        border-bottom: 1px solid gray;
        transition: all 0.3s linear;
        box-shadow: 0px 5px 10px gray;

    }
    td:first-child {
        text-align: left;
        color: #3D3511;
        font-weight: bold;
    }
    th {
        padding: 10px 10px;
        color: #3D3511;
        border-bottom: 1px solid gray;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        box-shadow: 0px 5px 10px gray;

    }
    td:nth-child(even) {
        background: whitesmoke;
    }
    td:nth-child(odd) {
        background: whitesmoke;
    }
    td:first-child {
        background: whitesmoke;
    }
    th:nth-child(even)  {
        background: rgb(225, 225, 225);
        font-size: 14pt;
        color: black;
    }
    th:nth-child(odd)  {
        background: rgb(225, 225, 225);
        font-size: 14pt;
        color: black;
    }
    tr:nth-child(1) td:first-child {
        /* border-top-left-radius: 5px; */
    }
    tr:last-child td:first-child {
        /* border-bottom-left-radius: 5px; */
    }
    tr:hover td{
        background: rgba(255, 241, 135, 0.7);
        font-weight: bold;
    }
`;

const Styles = {
    Wrapper,
    Press,
    Content__row,
}

export default Styles;