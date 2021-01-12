import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { useParams } from "react-router";
import * as R from "ramda";
import { useDispatch, useSelector } from "react-redux";

import { loadHero } from "../reducers/hero";
import Hero from "../components/Hero/hero";
import Loader from "../components/Loader/loader";
import EmptyResults from "../components/EmptyResults/emptyResults";

const HeroView = (props) => {
  const { hero } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadHero(hero));
  }, []);

  const { data, isLoading } = useSelector((state) => state.hero);

  if (isLoading) return <Loader />;
  if (!R.isNil(data) && !R.isEmpty(data)) {
    return <Hero data={data} />;
  }
  return <EmptyResults />;
};

HeroView.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default HeroView;
