import React from "react";
import { Section, Sections } from "./model/Section";

const getPageHeight = () => {
  return window.innerHeight;
};

type State = {
  scroll: number;
  sectionsMap: {
    [key: Section["key"]]: Section;
  };
  sectionsSize: number;
};

type SectionsMap = {
  [key: Section["key"]]: Section;
};

const convertSectionsToState = (sections: Sections) => {
  let sectionsSize = 0;
  const sectionsMap = sections.reduce((map, section, index) => {
    sectionsSize += section.height;

    map[section.key] = { ...section, order: index, height: sectionsSize };

    return map;
  }, {} as SectionsMap);

  //console.log("file: ScrollProvider.tsx:22 ~ sectionsSize:", sectionsSize);
  return { sectionsMap, sectionsSize };
};

const initialState = (sections: Sections): State => {
  const result = convertSectionsToState(sections);

  return {
    scroll: 0,
    ...result,
  };
};

// const initialState = {
//   scroll: 0,
//   sectionsMap: {},
//   sectionSize: 0,
// };

type Action =
  | { type: "UPDATE_SCROLL_PROGRESS"; payload: number } //
  | { type: "REGISTER_SECTIONS"; payload: Sections }; //

const StateContext = React.createContext<State | null>(null);
const DispatchContext = React.createContext<React.Dispatch<Action> | null>(null);

const stateReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "UPDATE_SCROLL_PROGRESS": {
      return { ...state, scroll: action.payload };
    }
    case "REGISTER_SECTIONS": {
      return {
        ...state,
        ...convertSectionsToState(action.payload),
      };
    }
  }
};

export const ScrollProvider = ({ children, sections }: { children: React.ReactNode; sections: Sections }) => {
  const [state, dispatch] = React.useReducer(stateReducer, initialState(sections));

  // useEffect(() => {
  //   dispatch({
  //     type: "REGISTER_SECTIONS",
  //     payload: sections,
  //   });
  // }, [dispatch, sections]);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
    </StateContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export function useScrollState<Return>(
  key: Section["key"],
  callback: (section: number, relativeScroll: (start: number) => number, sectionTop: (start: number) => number) => Return
): Return {
  const context = React.useContext(StateContext);
  if (!context) {
    throw new Error("useState must be used within the ScrollProvider");
  }
  const { scroll, sectionsSize, sectionsMap } = context;

  const found = sectionsMap[key];

  if (!found) {
    throw new Error(`Section ${key} not found in sectionsMap keys ${Object.keys(sectionsMap)}`);
  }
  console.log(key, found.height);

  const sectionRate = 1 / sectionsSize;

  const section = Math.floor(scroll / sectionRate);
  //console.log("file: ScrollProvider.tsx:97 ~ section:", section);

  const relativeScroll = (start: number) => (scroll - sectionRate * start) * (1 / sectionRate);
  const sectionTop = (start: number) => -(scroll - sectionRate * start) * (1 / sectionRate) * getPageHeight();

  return callback(section, relativeScroll, sectionTop); // relativeScroll, section
}

// eslint-disable-next-line react-refresh/only-export-components
export function useScrollDispatch() {
  const context = React.useContext(DispatchContext);
  if (!context) {
    throw new Error("useDispatch must be used within the ScrollProvider");
  }
  return context;
}
