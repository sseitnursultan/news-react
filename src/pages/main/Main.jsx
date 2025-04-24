import { useEffect, useState } from "react";
import NewsBanner from "../../components/newsBanner/NewsBanner";
import NewsList from "../../components/newsList/NewsList";
import Skeleton from "../../components/skeleton/Skeleton";
import styles from "./styles.module.css";
import { getNews } from "../../api/apiNews";

const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsloading(true);
        const response = await getNews();
        console.log("Fetched data:", response.news);
        setNews(response.news);
        setIsloading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);

  return (
    <main className={styles.main}>
      {news.length > 0 && !isLoading ? (
        <NewsBanner item={news[4]} />
      ) : (
        <Skeleton count={1} type={"banner"} />
      )}

      {!isLoading ? (
        <NewsList news={news} />
      ) : (
        <Skeleton count={10} type="item" />
      )}
    </main>
  );
};

export default Main;
