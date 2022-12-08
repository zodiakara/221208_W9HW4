import { useEffect, useState } from "react";
import SingleArticle from "./SingleArticle";
import { ListGroup } from "react-bootstrap";

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
    <ListGroup className="container d-flex">
      <div className="row">
        {articles.map((article) => (
          <SingleArticle article={article} />
        ))}
      </div>
    </ListGroup>
  );
};

export default MainSearchPage;
