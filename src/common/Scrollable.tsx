import { styled } from "@mui/material";
import React, { useCallback } from "react";
import { useScrollDispatch } from "./ScrollProvider";
import { Sections } from "./model/Section";

const Container = styled("div")`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled("div")`
  flex: 1;
  overflow-y: scroll;
`;

interface ScrollableProps {
  sections: Sections;
}

const Scrollable = ({ sections }: ScrollableProps) => {
  const dispatch = useScrollDispatch();

  const scrollHandler = useCallback(
    (event: React.UIEvent<HTMLDivElement>) => {
      const scrollHeight = event.currentTarget.scrollHeight;

      const scrollTop = event.currentTarget.scrollTop;
      const scrollYProgress = scrollTop / scrollHeight;

      dispatch({
        type: "UPDATE_SCROLL_PROGRESS",
        payload: scrollYProgress,
      });
    },
    [dispatch]
  );

  return (
    <Container>
      <Main onScroll={scrollHandler}>{sections.map(({ element, key }) => React.cloneElement(element, { key }))}</Main>
    </Container>
  );
};

export default Scrollable;
