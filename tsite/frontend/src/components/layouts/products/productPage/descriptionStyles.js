import styled from "styled-components";

const Btn = styled.button`
    padding: 3px;
    border: 1px solid #000;
    height: 30px;
    user-select: none;
    white-space: pre;
    align-items: flex-start;
    text-align: center;
    cursor: default;
    color: buttontext;
    box-sizing: border-box;
    padding: 1px 6px;
    border-width: 2px;
    border-style: outset;
    border-color: buttonface;
    border-image: initial;
`


const Dscr = {
    Btn,
}


export default Dscr;





export const GlobalS = styled.div`
html, address,
blockquote,
body, dd,
dl, dt, fieldset, form,
frame, frameset,
h1, h2, h3, h4,
h5, h6, noframes,
center,
dir, hr, menu, pre  { display: block; unicode-bidi: embed }       
li              { display: list-item }
ul li           { list-style: square outside; margin-left: 3% }
ol li           { list-style: decimal; margin-left: 3% }
h1              { font-size: 2em; margin: .67em 0 }
h2              { font-size: 1.5em; margin: .75em 0 }
h3              { font-size: 1.17em; margin: .83em 0 }
h4, p,
blockquote, ul,
fieldset, form,
ol, dl, dir,
menu            { margin-bottom: 10px}
h5              { font-size: .83em; margin: 1.5em 0 }
h6              { font-size: .75em; margin: 1.67em 0 }
h1, h2, h3, h4,
h5, h6, b,
strong          { font-weight: bolder }
blockquote      { margin-left: 40px; margin-right: 40px; }
i, cite, em,
var, address    { font-style: italic }
button, textarea,
input, select   { display: inline-block }
big             { font-size: 1.17em }
small, sub, sup { font-size: .83em }
sub             { vertical-align: sub }
sup             { vertical-align: super }
hr              { border: 1px solid gray }
ol, ul, dir,
ol              { list-style-type: decimal }
ol ul, ul ol,
ul ul, ol ol    { margin-top: 0; margin-bottom: 0 }
p, div          { font-size: 16px; line-height: 22px }
/* strong          { overflow-wrap: break-word; } */


/* ###################################################### */
/* ######################### Tables ##################### */

table {
    border-collapse: collapse;
    border: 1px solid black;
    margin-bottom: 1em;
    width: auto;
}
table tr {
    page-break-inside: avoid;
}
table thead tr td {
    background-color: #F0F0F0;
    border: 1px solid black;
    min-width: 0.6em;
    padding: 5px;
    text-align: left;
    vertical-align: top;
    font-weight: bold;
}
table tbody tr td {
    border: 1px solid black;
    min-width: 0.6em;
    padding: 5px;
    vertical-align: top;
}
tbody tr.even td {
    background-color: transparent;
}
/* ###################################################### */
/* Begin bidirectionality settings (do not change) */
BDO[DIR="ltr"]  { direction: ltr; unicode-bidi: bidi-override }
BDO[DIR="rtl"]  { direction: rtl; unicode-bidi: bidi-override }

*[DIR="ltr"]    { direction: ltr; unicode-bidi: embed }
*[DIR="rtl"]    { direction: rtl; unicode-bidi: embed }

@media print {
  h1            { page-break-before: always }
  h1, h2, h3,
  h4, h5, h6    { page-break-after: avoid }
  ul, ol, dl    { page-break-before: avoid }
}
`;