import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "../link";

/**
 * Pagination Component
 *
 * It's used to allow the user to paginate between a list of posts.
 *
 * The `state`, `actions`, `libraries` props are provided by the global context,
 * when we wrap this component in `connect(...)`
 */
const Pagination = ({ state, actions }) => {
  // Get the total posts to be displayed based for the current link
  const { next, previous, page } = state.source.get(state.router.link);

  // Pre-fetch the the next page if it hasn't been fetched yet.
  useEffect(() => {
    if (next) actions.source.fetch(next);
  }, []);

  return (
    <PaginationContainer>
       {/* If there's a previous page, render this link */}
       {previous && (
        <Link link={previous}>
          <SwitchPageButton >← Nowsze wpisy {previous === "/" ? "(Strona 1)" : `Strona (${parseInt(previous.substring(6, previous.length), 10)})`}</SwitchPageButton>
        </Link>
      )}
     <PageLabel>Strona {page}</PageLabel>
      {/* If there's a next page, render this link */}
      {next && (
        <Link link={next}>
          <SwitchPageButton>Starsze wpisy (Strona {parseInt(next.substring(6, next.length), 10)}) →</SwitchPageButton>
        </Link>
      )}

     
    </PaginationContainer>
  );
};

/**
 * Connect Pagination to global context to give it access to
 * `state`, `actions`, `libraries` via props
 */
export default connect(Pagination);

const PaginationContainer = styled.div`
  display: flex;
  margin-bottom: 32px;
  justify-content: space-between;
`;

const SwitchPageButton = styled.button`
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
  cursor: pointer;
`;
const PageLabel = styled(SwitchPageButton)`
  align-self: center;
  cursor: unset;
`
