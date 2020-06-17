import React, { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";

import loadable from '@loadable/component'
const JoditEditor = loadable(() => import('jodit-react'))

// import JoditEditor from "jodit-react";
import { useSelector } from "react-redux";
import { GlobalS } from "./productPage/descriptionStyles";
// import SunEditor, { buttonList } from "suneditor-react";
// import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File


const Container = styled.div`
  background-color: whitesmoke;
  margin: 20px 10px 10px 10px;
  border-left: 5px solid #f3cb55;
  border-top: 5px solid #f3cb55;
  border-bottom: 5px solid #535252;
  border-right: 5px solid #535252;
  padding: 10px;
  font-size: 16px;
  line-height: 22px;
  box-shadow: 0px 5px 10px grey;
  @media (max-width: 570px) {
    max-height: 250px;
    overflow: scroll;
  }
  h1 {
    padding-bottom: 15px;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  }
  & ul li {
    list-style: inside;
    font-weight: bold;
  }
  ul {
    margin-bottom: 10px;
  }
`;

const ProductsDescr = ({ textOfPage, callBack }) => {
  const authState = useSelector((state) => state.authReducer);
  const editor = useRef(null);
  const [showEditor, setShowEditor] = useState(false);
  const [content, setContent] = useState("");
  useEffect(() => {
    authState.user != null && authState.user.username == "admin"
      ? setShowEditor(true)
      : setShowEditor(false);
    setContent(textOfPage);
  }, [authState.user, textOfPage]);

  const config = {
    readonly: false,
    toolbarButtonSize: "large",
    processPasteHTML: "false",
  };
  return (
    <GlobalS>
      {textOfPage != null && textOfPage != undefined && textOfPage != "" && (
        <Container dangerouslySetInnerHTML={{ __html: textOfPage }} />
      )}
      {showEditor && (
        <>
          <JoditEditor
            ref={editor}
            value={content}
            config={config}
            tabIndex={1} // tabIndex of textarea
            onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
            onChange={(newContent) => {}}
          />
          {/* <SunEditor
            onChange={(newContent) => setContent(newContent)}
            setContents={textOfPage}
            setOptions={{
              buttonList: buttonList.complex,
            }}
          /> */}
          <button onClick={() => callBack(content)}>Сохранить</button>
        </>
      )}
    </GlobalS>
  );
};

export default ProductsDescr;
