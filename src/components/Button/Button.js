import React, { useState, useEffect } from "react";

import classes from "./Button.module.css";

function Button(props) {
  const [isPrimary, setIsPrimary] = useState(false);

  useEffect(() => {
    setIsPrimary(props.primary);
  }, []);

  return (
    <button className={isPrimary ? classes.primary : classes.secondary}>
      {props.children}
    </button>
  );
}

export default Button;
