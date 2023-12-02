export type Section = {
  key: string;
  order: number;
  height: number;
  element: JSX.Element;
};

export type Sections = Array<Omit<Section, "order">>;
