/* eslint-disable react/prop-types */
import { Fragment } from "react";

import Navbar from "@components/core/layouts/Navbar";
import AnimatedTransition from "@components/core/layouts/AnimatedTransition";

export const Public = ({ page, title = "" }) => {
  document.title = title;
  return (
    <Fragment>
      <Navbar title="Inicio" />
      <AnimatedTransition>{page ?? <Fragment />}</AnimatedTransition>
    </Fragment>
  );
};
