import { React } from "react";
import { Card } from "react-bootstrap";
import "./reviewCarouselItem.css";

export default function ReviewCarouselItem({ data, index, slideId }) {
 
  return (
    <>
      <Card
        key={data.id}
        className="review-card"
        id={index === slideId ? "review-activeCard" : ""}
      >
        <Card.Body>
          <Card.Img
            src={data.img}
            className="review-card-img img-thumbnail mx-auto"
            alt={`candidate-${data.id}`}
          />
          <Card.Title className="review-card-title text-center">
            {data.name}
          </Card.Title>
          <Card.Subtitle className="text-center">
            <p className="text-muted">{data.country}</p>
          </Card.Subtitle>
         
         
        </Card.Body>
      </Card>
    </>
  );
}
