import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
  } from 'reactstrap';
  import StarRatingComponent from 'react-star-rating-component'

const MovieList = (props) => {
    return (
        <div className="listMov">
            { props.useMovie.map (e =>(
         
         <Card className="card"
         style={{width : "19rem"}}>
         <CardBody>
         <CardTitle className="title" key={e.id}>{e.name}</CardTitle>
        <img style={{width:"200px",
      height:"300px",margin:"10px 0 10px 0"}} src={e.image} alt="Card image cap" />
    <CardText  className="tit">{e.text}</CardText>
    <CardSubtitle  className="title">{e.year}</CardSubtitle>
    <StarRatingComponent 
    value={e.rating}
    starCount={6}
/>
           </CardBody>
         </Card>
            ))}
          </div>
    );
};

export default MovieList;