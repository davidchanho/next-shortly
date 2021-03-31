import NHead from "next/head";
import React from "react";

function Head() {
  return (
    <NHead>
      <title>Shortly</title>
      <meta name="description" content="shorten urls with analysis." />
      <link rel="icon" href="/favicon.png" />
      <script async>
        {process.env.NODE_ENV == "production"
          ? "window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function(){}"
          : ""}
      </script>
    </NHead>
  );
}

export default Head;
