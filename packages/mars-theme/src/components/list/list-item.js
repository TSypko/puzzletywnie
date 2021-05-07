import React from "react";
import { connect } from "frontity";
import styled from "styled-components";
import Link from "../link";
import FeaturedMedia from "../featured-media";
import Tile from "../tile";

/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const Item = ({ state, item }) => {
  const author = state.source.author[item.author];
  const date = new Date(item.date);
  const categories = state.source.category;
  const category = Array.from(item.categories);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  return (
    <Tile>
        {state.theme.featured.showOnList && (
        <FeaturedMedia id={item.featured_media} />
      )}
      <ItemContent>
      <Link link={item.link}>
        <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
      </Link>

      <div>
    
        {/* If the post has an author, we render a clickable author text. */}
        {author && (
          <StyledLink link={author.link}>
            <AuthorName>
              przez <b>{author.name}</b>
            </AuthorName>
          </StyledLink>
        )}
        <PublishDate>
          {" 🧩 "}
          <b>{date.toLocaleDateString("pl-PL", options)}</b>
        </PublishDate>

      </div>

      {/*
       * If the want to show featured media in the
       * list of featured posts, we render the media.
       */}
     

      {/* If the post has an excerpt (short summary text), we render it */}
      {item.excerpt && (
        <Excerpt dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
      )}
      <p>
        {category.map(id => {

          return <CategoryTile key={id}>{categories[id].name}</CategoryTile>})}
      </p>
      </ItemContent>
    </Tile>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);

const ItemContent = styled.div`
   padding: 0 24px 12px;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.Haiti};
  margin: 0;
  padding-top: 24px;
  padding-bottom: 8px;
  
  &:hover {
    color: ${({ theme }) => theme.colors.Blumine};
    cursor: pointer;
    transition: ${({ theme }) => theme.transitions.fast};
  }

  &:active {
    filter: brightness(100%);
    color: ${({ theme }) => theme.colors.Matisse};
    transition: ${({ theme }) => theme.transitions.none};
  }
`;

const AuthorName = styled.span`
  color: ${({ theme }) => theme.colors.Haiti};
  font-size: 0.9em;

  &:hover {
    color: ${({ theme }) => theme.colors.Blumine};
    cursor: pointer;
    transition: ${({ theme }) => theme.transitions.fast};
  }

  &:active {
    filter: brightness(100%);
    color: ${({ theme }) => theme.colors.Matisse};
    transition: ${({ theme }) => theme.transitions.none};
  }
`;

const StyledLink = styled(Link)`
  padding: 15px 0;
`;

const PublishDate = styled.span`
  color: ${({ theme }) => theme.colors.Haiti};
  font-size: 0.9em;
`;

const Excerpt = styled.div`
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.Haiti};
  font-size: 16px;
`;

const CategoryTile = styled.button`
  padding: 6px 12px;
  border: none;
  border-radius: 3px;
  background: transparent;
  margin-right: 6px;
  text-transform: uppercase;
  font-family: 'Segoe UI', sans-serif;
  font-weight: 700;
  background: ${({ theme }) => theme.colors.Matisse};
  color: ${({ theme }) => theme.colors.White};

  &:hover {
    background: ${({ theme }) => theme.colors.Blumine};
    cursor: pointer;
    transition: ${({ theme }) => theme.transitions.medium};
  }

  &:active {
    background: ${({ theme }) => theme.colors.Matisse};
    filter: brightness(100%);
    transition: ${({ theme }) => theme.transitions.none};
  }
`;