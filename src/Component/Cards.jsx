import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import { useSelector } from "react-redux";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});
const Cards = ({ imgUrl, name, iname, iquantity, unitmeasure, steps }) => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root} style={{ margin: "10px" }}>
        <CardActionArea>
          <img src={imgUrl} title="dish_img" />
          <CardContent style={{ textAlign: "left" }}>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              style={{ marginBottom: "10px" }}
            >
              {name}
            </Typography>

            <Typography
              variant="body2"
              style={{ marginBottom: "10px" }}
              color="textSecondary"
              component="p"
            >
              <Typography variant="subtitle1" color="textPrimary" component="p">
                Ingredients Name:
              </Typography>
              {iname}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <Typography variant="subtitle1" color="textPrimary" component="p">
                Unit Measurement:
              </Typography>
              {unitmeasure}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <Typography variant="subtitle1" color="textPrimary" component="p">
                Ingredients Quantity:
              </Typography>
              {iquantity}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              <Typography variant="subtitle1" color="textPrimary" component="p">
                Steps to Cook:
              </Typography>
              {steps}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions></CardActions>
      </Card>
    </div>
  );
};

export default Cards;
