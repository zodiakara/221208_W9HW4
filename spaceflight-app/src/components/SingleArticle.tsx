import { ListGroup, Button } from "react-bootstrap";
import { article } from "../types";

interface SingleArticleProps {
  article: article;
}

const SingleArticle = ({ article }: SingleArticleProps) => {
  return (
    <ListGroup.Item key={article.id} className="col xs={4}">
      <h3 className=" p-2 align-items-c">{article.title}</h3>
      <img alt={article.title} src={article.imageUrl} className="w-50 p-2" />
      <div>
        <Button>read more</Button>
      </div>
    </ListGroup.Item>
  );
};
export default SingleArticle;
