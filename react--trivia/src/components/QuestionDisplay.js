import React from "react";
// import { useState } from 'react'
// import { useEffect } from 'react';
import { Box, Container } from "@material-ui/core";

export const Display = ({ question }) => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          justifyContent: "center",
        }}
      />
      {question}
    </Container>
  );
};
