import { Button } from "react-bootstrap";
import { article } from "../types";
import { ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router";

interface SingleArticleProps {
  article: article;
}

const SingleArticle = ({ article }: SingleArticleProps) => {
  const navigate = useNavigate();

  return (
    <ListGroup.Item key={article.id} className="w-50 align-items-center">
      <h5 style={{ height: 50 }} className="p-1">
        {article.title}
      </h5>
      <img alt={article.title} src={article.imageUrl} className="w-75 p-2" />
      <p style={{ height: 100 }}>{article.summary}</p>
      <div>
        <Button onClick={() => navigate(`/details/${article.id}`)}>
          read more
        </Button>
      </div>
    </ListGroup.Item>
  );
};
export default SingleArticle;
