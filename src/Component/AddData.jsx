import {
  Button,
  Container,
  TextareaAutosize,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const AddData = (props) => {
  const [state, setState] = useState({
    name: "",
    iname: "",
    iquantity: "",
    unitmeasure: "",
    steps: "",
    imgUrl: "",
  });
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "INPUT_DATA", payload: state });
    props.history.push("/");
  };
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <Container maxWidth="xs">
        <h3 style={{ textAlign: "left" }}>1.Dish Specification:</h3>
        <form onSubmit={handleSubmit}>
          <TextField
            style={{ marginBottom: "15px" }}
            id="outlined-basic"
            label="Name of Dish"
            variant="outlined"
            name="name"
            onChange={handleChange}
            value={state.name}
            fullWidth
          />
          <TextField
            style={{ marginBottom: "15px" }}
            id="outlined-basic"
            label="Ingredient Name"
            variant="outlined"
            name="iname"
            fullWidth
            onChange={handleChange}
            value={state.iname}
          />
          <TextField
            style={{ marginBottom: "15px" }}
            id="outlined-basic"
            label="Ingredient Quantity"
            variant="outlined"
            name="iquantity"
            fullWidth
            onChange={handleChange}
            value={state.iquantity}
          />
          <TextField
            style={{ marginBottom: "15px" }}
            id="outlined-basic"
            label="Unit of Measurement of Ingredient Quantity"
            variant="outlined"
            name="unitmeasure"
            fullWidth
            onChange={handleChange}
            value={state.unitmeasure}
          />

          <TextareaAutosize
            aria-label="minimum height"
            rowsMin={10}
            name="steps"
            placeholder="Steps to Cook"
            onChange={handleChange}
            value={state.steps}
            style={{
              marginBottom: "15px",
              minWidth: "400px",
              maxWidth: "500px",
            }}
          />
          <TextField
            style={{ marginBottom: "15px" }}
            id="outlined-basic"
            label="Dish Image Url"
            variant="outlined"
            name="imgUrl"
            fullWidth
            onChange={handleChange}
            value={state.imgUrl}
          />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default AddData;
