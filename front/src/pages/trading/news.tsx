import { FC, useEffect, useState } from "react";
import NavbarSidebarLayout from "../../layouts/navbar-sidebar";
import Newsitem from "./newsitem";

// Define a type for the article data
interface Article {
    title: string;
    description: string;
    urlToImage: string;
    url: string;
}

const NewsAPI: FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        let url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=595b4cb2e49049c78585ce6248f44726`;
        //let url =`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=595b4cb2e49049c78585ce6248f44726`;
        fetch(url)
            .then(res => res.json())
            .then(data => setArticles(data.articles)); // Corrected 'data.articles'
    }, []);

    return (
        <div className="bg-center">
            <h1>Lastest News</h1>
            {articles.map((news, index) => (
                <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
            ))}
        </div>
    );
};

const News: FC = () => {
    return (
        <NavbarSidebarLayout>
            <NewsAPI />
        </NavbarSidebarLayout>
    );
};

export default News;
