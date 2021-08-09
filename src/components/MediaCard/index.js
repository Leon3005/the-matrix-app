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
    margin: "1rem",
    height: "32rem",
    width: "20rem",
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

const MediaCard = ({ data }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title={data.Title} subheader={data.Year} />
      <CardMedia
        className={classes.media}
        image={
          data.Poster === "N/A"
            ? "http://underscoremusic.co.uk/site/wp-content/uploads/2014/05/no-poster.jpg"
            : data.Poster
        }
        title={data.Title}
      />
      <CardContent>
        <Typography variant="body2" color="white" component="p">
          {data.Type}
        </Typography>
        <Typography variant="body2" color="white" component="p">
          {data.imdbID}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MediaCard;
