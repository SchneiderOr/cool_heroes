import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import * as R from "ramda";

import { loadHeros } from "../reducers/previousHeros";
import HerosList from "../components/HerosList/herosList";
import Loader from "../components/Loader/loader";
import EmptyResults from "../components/EmptyResults/emptyResults";

const PreviousHerosView = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadHeros());
  }, []);

  const { data, isLoading } = useSelector((state) => state.previousHeros);

  if (isLoading) return <Loader />;
  if (!R.isNil(data) && !R.isEmpty(data)) {
    return <HerosList data={data} />;
  }
  return <EmptyResults />;
};

PreviousHerosView.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default PreviousHerosView;
