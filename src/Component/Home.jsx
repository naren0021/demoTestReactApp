import { Button, Chip, Container, TextField } from "@material-ui/core";
import { InputBase } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import store from "../store";
import AddData from "./AddData";
import Cards from "./Cards";

const Home = () => {
  const { data } = useSelector((state) => state.DataReducer);
  const [input, setInput] = useState("");
  const [tag, setTag] = useState([]);
  const [storedata, setStoredata] = useState([]);
  const handleDelete = (id) => {
    setTag(tag.filter((_, index) => index !== id));
  };
  const addtag = (e) => {
    if (e.target.value !== "") {
      setTag([...tag, e.target.value]);

      e.target.value = "";
    }
  };

  return (
    <div>
      <Container maxWidth="xs">
        <div style={{ marginTop: "10px" }} className="tags-input">
          {tag.map((info, id) => (
            <Chip
              label={info}
              color="primary"
              onDelete={() => handleDelete(id)}
            />
          ))}

          <InputBase
            placeholder="Search..."
            className="input-search"
            onKeyUp={(e) => (e.key === "Enter" ? addtag(e) : "")}
          />
        </div>
        <Link to="/add-data">
          <Button>AddData</Button>
        </Link>
      </Container>
      <Container
        maxWidth="xl"
        style={{
          marginTop: "10px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
        }}
      >
        {data.map((data) => (
          <Cards
            imgUrl={data.imgUrl}
            name={data.name}
            iname={data.iname}
            iquantity={data.iquantity}
            unitmeasure={data.unitmeasure}
            steps={data.steps}
          />
        ))}
      </Container>
    </div>
  );
};

export default Home;
