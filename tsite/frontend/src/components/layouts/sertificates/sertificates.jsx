import React, { useEffect } from "react";
import { default as S } from "./sertificatesStyles";
import ProductsDescrCont from "../../containers/products/productsDescriptCont";

const Sertificates = ({ sertificates }) => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
  return (
    <>
      <S.PageWrapper>
        <S.PageTitle>
          <h1>Сертификаты</h1>
        </S.PageTitle>
        <S.Content>
          {sertificates.length > 0 &&
            sertificates.map((sert, index) => (
              <S.SertificatConteiner key={index}>
                <a href={sert.docFile} target="_blank" title="Открыть документ">
                  {sert.name}
                </a>
              </S.SertificatConteiner>
            ))}
        </S.Content>
      </S.PageWrapper>
      <ProductsDescrCont />
    </>
  );
};

export default Sertificates;
