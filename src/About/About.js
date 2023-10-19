import React, { useContext } from "react";
import CustmeContext from "../CustomeContext";
import { useSelector, useDispatch } from "react-redux";

const About = () => {
  const datafromredux = useSelector((state) => {
    return state.checkbox1;
  });
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch({
      type: "chekbox",
      payload: event.target.checked,
    });
  };

  const value = useContext(CustmeContext);
  console.log(value[0].name);
  return (
    <div>
      <h2>About Page</h2>
      <label>
        <input
          defaultChecked={datafromredux}
          onChange={handleChange}
          type="checkbox"
        />
        Street
      </label>
      <h3> Name from home page:{value[0].name}</h3>
      <h3> email from home page: {value[0].email}</h3>
    </div>
  );
};

export default About;
