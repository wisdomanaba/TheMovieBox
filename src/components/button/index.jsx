import React from "react";
import { Container } from "./styles";

export default function Button({ pdl, mrl, colored, outline, children }) {
  return <Container pdl={pdl} mrl={mrl} outline={outline} colored={colored}>{children}</Container>;
}