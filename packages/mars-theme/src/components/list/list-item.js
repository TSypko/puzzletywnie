import React from "react";
import { connect, styled } from "frontity";
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
  const weekday = (date.toLocaleDateString(undefined, { weekday: "long" }))

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
          {" "}
          {weekday === "wtorek"
            ? "we"
            : "w"}
          {" "}<b>{date.toLocaleDateString(undefined, options)}</b>
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
  color: rgba(12, 17, 43);
  margin: 0;
  padding-top: 24px;
  padding-bottom: 8px;
`;


const AuthorName = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
`;

const StyledLink = styled(Link)`
  padding: 15px 0;
`;

const PublishDate = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
`;

const Excerpt = styled.div`
  line-height: 1.5;
  color: rgba(12, 17, 43, 0.8);
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
  background: #1C7BB0;
  color: #fff;
`;