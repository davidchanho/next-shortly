import NHead from "next/head";
import React from "react";

function Head() {
  return (
    <NHead>
      <title>Shortly</title>
      <meta name='description' content='shorten urls with analysis.' />
      <link rel="icon" href="/favicon.png" />
    </NHead>
  );
}

export default Head;
