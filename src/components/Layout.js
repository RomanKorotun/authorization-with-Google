import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import HomeImg from "../images/waterfall.jpg";

export const Layout = () => {
  return (
    <>
      <Suspense>
        <Header />
        <Outlet />
        <Footer />
      </Suspense>
    </>
  );
};

export const Container = styled.div`
  min-width: 320px;
  max-width: 428px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
  @media only screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media only screen and (min-width: 1158px) {
    max-width: 1158px;
  }
`;

export const SectionHome = styled.section`
  background-image: linear-gradient(
      rgba(46, 47, 66, 0.7),
      rgba(46, 47, 66, 0.7)
    ),
    url(${HomeImg});
  background-repeat: no-repeat;
  min-height: 84vh;
  background-position: center;
  background-size: cover;
  max-width: 428px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 232px;
  padding-bottom: 232px;
  @media only screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media only screen and (min-width: 1158px) {
    max-width: 1440px;
  }
`;

export const SectionUser = styled.section`
  background-image: linear-gradient(
      rgba(46, 47, 66, 0.7),
      rgba(46, 47, 66, 0.7)
    ),
    url(${HomeImg});
  background-repeat: no-repeat;
  min-height: 84vh;
  background-position: center;
  background-size: cover;
  max-width: 428px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 222px;
  padding-bottom: 222px;
  @media only screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media only screen and (min-width: 1158px) {
    max-width: 1440px;
  }
`;

export const SectionRegister = styled.section`
  background-image: linear-gradient(
      rgba(46, 47, 66, 0.7),
      rgba(46, 47, 66, 0.7)
    ),
    url(${HomeImg});
  background-repeat: no-repeat;
  min-height: 84vh;
  background-position: center;
  background-size: cover;
  max-width: 428px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 102px;
  padding-bottom: 102px;
  @media only screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media only screen and (min-width: 1158px) {
    max-width: 1440px;
  }
`;

export const SectionLogin = styled.section`
  background-image: linear-gradient(
      rgba(46, 47, 66, 0.7),
      rgba(46, 47, 66, 0.7)
    ),
    url(${HomeImg});
  background-repeat: no-repeat;
  min-height: 84vh;
  background-position: center;
  background-size: cover;
  max-width: 428px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 138px;
  padding-bottom: 138px;
  @media only screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media only screen and (min-width: 1158px) {
    max-width: 1440px;
  }
`;
