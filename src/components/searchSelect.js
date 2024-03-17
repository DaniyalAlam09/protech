import React from "react";
import Select from "react-select";

export const SearchSelect = (props) => (
  <Select
    id ={props.id}
    options={props.options}
    onChange={props.onChange}
    value={props.value}
    className={props.className}
    placeholder={props.placeholder}
    classNamePrefix={props.classNamePrefix}
    styles={props.styles}
    theme={props.theme}
    isDisabled={props.isDisabled}
    isClearable={props.isClearable}
    defaultValue={props.defaultValue}
    isMulti={props.isMulti}
  />
);

