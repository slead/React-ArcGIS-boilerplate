import React, { useEffect, useRef } from "react";

export function WebMap(props) {
  const elementRef = useRef();

  useEffect(_ => {
    let cleanup;
    // lazy load the module that loads the JSAPI
    // and initialize it
    import("../data/app").then(
      app => cleanup = app.initialize(elementRef.current)
    );
    return () => cleanup && cleanup();
  }, []);

  // assign elementRef to the ref of our component
  return (
    <div className={props.className} ref={elementRef}>
    </div>
  );
}
