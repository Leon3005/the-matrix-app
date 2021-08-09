import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import "./MediaCard.css";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    color: "white",
    backgroundColor: "#222222",
    boxShadow: "rgba(250, 250, 250, 0.36) 0px 22px 30px 4px;",
  },
  media: {
    height: 150,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

const MediaCard = () => {
  const classes = useStyles();

  return (
    <Card className={("card", classes.root)}>
      <CardHeader title="The Matrix Reloaded" subheader="Release Year: 2003" />
      <CardMedia
        className={classes.media}
        image="https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
        title="The Matrix Reloaded"
      />
      <CardContent>
        <Typography variant="body2" color="white" component="p">
          Type: Movie
        </Typography>
        <Typography variant="body2" color="white" component="p">
          IMDB ID: tt0234215
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MediaCard;
