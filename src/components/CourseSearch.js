import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeSearchTerm } from "../slices/courseSlice";
const CourseSearch = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => {
    return state.courses.searchTerm;
  });
  return (
    <div className="listHeader">
      <h3 className="title is-3">Kurslarım</h3>
      <div>
        <label className="search field is-horizontal">Ara</label>
        <input
          type="text"
          className="input"
          onChange={(event) => {
            dispatch(changeSearchTerm(event.target.value));
          }}
          value={searchTerm}
        />
      </div>
    </div>
  );
};

export default CourseSearch;
