import { styled } from "@mui/material";
import React, { useCallback } from "react";
import { useScrollDispatch } from "./ScrollProvider";
import { Sections } from "./model/Section";

const Container = styled("div")`
  height: 100svh;
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
      const scroll = scrollTop / scrollHeight;

      // const found = sectionsMap[key];

      // if (!found) {
      //   throw new Error(`Section ${key} not found in sectionsMap keys ${Object.keys(sectionsMap)}`);
      // }

      // const sectionRate = 1 / sectionsSize;

      // const section = Math.floor(scroll / sectionRate) - found.height;

      // const relativeScroll = (start: number) => {
      //   return (scroll - sectionRate * start) * (1 / sectionRate);
      // };
      // const sectionTop = (start: number) => {
      //   return -(scroll - sectionRate * start) * (1 / sectionRate) * getPageHeight();
      // };

      // switch (section) {
      //   case 0:
      //     return {
      //       scroll: relativeScroll(0),
      //       isSticky: true,
      //       top: 0,
      //     };
      //   case 1:
      //     return {
      //       scroll: 1,
      //       isSticky: true,
      //       top: sectionTop(1),
      //     };
      //   default:
      //     return {
      //       scroll: section < 0 ? 0 : 1,
      //       isSticky: false,
      //       top: 0,
      //     };
      // }

      dispatch({
        type: "UPDATE_SCROLL_PROGRESS",
        payload: scroll,
      });
    },
    [dispatch]
  );

  return (
    <Container>
      <Main onScroll={scrollHandler}>{sections.map(({ element, key }) => React.cloneElement(element, { key, id: key }))}</Main>
    </Container>
  );
};

export default Scrollable;
