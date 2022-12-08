import { useEffect, useState } from "react";
import { ListGroup, Button } from "react-bootstrap";

interface article {
  events: any[];
  featured: boolean;
  id: number;
  imageUrl: string;
  launches: any[];
  newsSite: string;
  publishedAt: Date;
  summary: string;
  title: string;
  updatedAt: Date;
  url: string;
}

const MainSearchPage = () => {
  const [articles, setArticles] = useState<article[]>([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      let response = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles"
      );
      console.log("RESPONSE", response);
      if (response.ok) {
        let data = await response.json();
        console.log("DATA", data);
        setArticles(data);
      } else {
        console.log("error fetching articles");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <ListGroup className="row  d-flex">
        {articles.map((article) => (
          <ListGroup.Item key={article.id} className="col xs={4}">
            <h3 className="w-50 p-2 align-items-c">{article.title}</h3>
            <img
              alt={article.title}
              src={article.imageUrl}
              className="w-50 p-2"
            />
            <div>
              <Button>read more</Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default MainSearchPage;
