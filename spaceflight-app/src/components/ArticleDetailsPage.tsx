import { useEffect, useState } from "react";
import { article } from "../types";
import { useParams } from "react-router-dom";

const ArticleDetailsPage = () => {
  const [singleArticle, setArticle] = useState<article | null>(null);
  const params = useParams();

  useEffect(() => {
    fetchArticle();
  }, []);

  const fetchArticle = async () => {
    try {
      let response = await fetch(
        `https://api.spaceflightnewsapi.net/v3/articles/${params.id}`
      );
      console.log("RESPONSE", response);
      if (response.ok) {
        let data = await response.json();
        console.log("DATA", data);
        setArticle(data);
      } else {
        console.log("error fetching article");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {singleArticle ? (
        <div className="container d-flex">
          <div className="row justify-content-center">
            <h1>{singleArticle.title}</h1>
            <div className="justify-content-space-between mx-5">
              <span className="mx-4">{singleArticle.newsSite}</span>
              <span className="mx-4 ">published at:</span>
            </div>
            <img
              alt={singleArticle.title}
              src={singleArticle.imageUrl}
              className="w-75 p-2"
            />

            <p>{singleArticle.summary}</p>
            <span className="mx-4">updated at:</span>
          </div>
        </div>
      ) : (
        <p>some shit went down</p>
      )}
    </>
  );
};

export default ArticleDetailsPage;
