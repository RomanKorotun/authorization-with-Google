import { FooterContainer, FooterStyled } from "./Footer.styled";

export const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        Copyright&nbsp;
        <a
          href="https://github.com/RomanKorotun"
          target="_blank"
          rel="noopener noreferrer"
        >
          Roman Korotun
        </a>
      </FooterContainer>
    </FooterStyled>
  );
};
