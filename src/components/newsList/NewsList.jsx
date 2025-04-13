import NewsItem from "../newsItem/NewsItem";
import styles from "./styles.module.css";

const NewsList = ({ news }) => {
  return (
    <ul className={styles.list}>
      {news?.map((i) => {
        return <NewsItem key={i.id} item={i} />;
      })}
    </ul>
  );
};

export default NewsList;
