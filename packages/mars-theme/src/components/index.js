import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import heroImage from "../assets/heroImage.jpg";
import logo from "../assets/puzzleIcon.png";

const Theme = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <>
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="icon" href={logo} />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <Global styles={globalStyles} />
      <HeadContainer>
        <Header />
      </HeadContainer>
      <MainContainer>
        <Main>
          <Switch>
            <Loading when={data.isFetching} />
            <List when={data.isArchive} />
            <Post when={data.isPostType} />
            <PageError when={data.isError} />
          </Switch>
        </Main>
      </MainContainer>
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  body {
    margin: 0;
    font-family: "Poppins", sans-serif;
    box-sizing: border-box;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;

const HeadContainer = styled.div`
  position: sticky;
  top: 0px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #000;
  box-shadow: 0px 0px 7px 5px rgba(0,0,0);
  z-index: 1;
  overflow: hidden;
`;

const MainContainer = styled.section`
    width: 100%;
    height: max-content;
    background: url(${heroImage});
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
  background: 
  linear-gradient(0deg,
    rgba(0,0,0,1) 0%,
    rgba(56,253,255,0) 25%,
    rgba(56,253,255,0) 75%,
    rgba(0,0,0,1) 100%);
  box-shadow: inset 0px -5px 7px 0px rgba(0,0,0);
`;
