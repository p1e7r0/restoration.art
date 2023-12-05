import React, { useLayoutEffect, useState } from "react";

interface WrapperProps {
  children: React.ReactNode;
  id: string;
  height: number;
}

const Wrapper = ({ children, id, height }: WrapperProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [isIntersecting, setIntersecting] = useState(false);
  console.log(id, isIntersecting);

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting));

    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return children;

  return (
    <div
      ref={ref}
      style={
        !isIntersecting
          ? {
              height: `${height * 100}svh`,
              backgroundColor: "blue",
            }
          : undefined
      }
    >
      {isIntersecting ? children : id}
    </div>
  );
};

export default Wrapper;
