import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export default function BasicSelect({ name, optionsData, ...props }) {
  //   const [age, setAge] = React.useState("");

  //   const handleChange = (event) => {
  //     setAge(event.target.value);
  //   };

  return (
    <>
      <Select
        labelId={`${name}-select-label`}
        id="demo-simple-select"
        label={name}
        {...props}
        color="secondary"
      >
        {optionsData.doc.map((item, index) => {
          return (
            <MenuItem value={item._id} key={index}>
              {item.name}
            </MenuItem>
          );
        })}
      </Select>
    </>
  );
}
