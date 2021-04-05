import { styled, css } from "frontity";

const Tile = styled.article`
  background-color: #ffffff;
  box-shadow: 0px 0px 11px 2px rgba(0,0,0,0.35);
  margin-bottom: 36px;
  padding: 8px;

  ${({ post }) => post && css`
          padding: 24px
            `}
            
`;

export default Tile;
