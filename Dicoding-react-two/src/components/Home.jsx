import PropTypes from "prop-types";
import "./CSS/Home.css";

function Home() {
  // Data berita
  const someNews = [
    {
      title: "CNN Acuire BEME",
      date: "March 20 2022",
      content: "CNN purchased Casey Neistat's Beme app for $25million.",
      image: "https://picsum.photos/600/400",
      category: "News",
      link: "#",
    },
    {
      title: "React and the WP-API",
      date: "March 19 2022",
      content: "The first ever decoupled starter theme for React & the WP-API.",
      image: "https://picsum.photos/600/400",
      category: "News",
      link: "#",
    },
    {
      title: "Nomad Lifestyle",
      date: "March 19 2022",
      content: "Learn our tips and tricks on living a nomadic lifestyle.",
      image: "https://picsum.photos/600/400",
      category: "Travel",
      link: "#",
    },
  ];

  // Komponen Header
  function Header({ title }) {
    return (
      <header>
        <h1>{title}</h1>
      </header>
    );
  }

  Header.propTypes = {
    title: PropTypes.string.isRequired,
  };

  // Komponen Card
  function Card({ newsItem }) {
    return (
      <div className="card">
        <CardHeader category={newsItem.category} image={newsItem.image} />
        <CardBody
          date={newsItem.date}
          title={newsItem.title}
          content={newsItem.content}
          link={newsItem.link}
        />
      </div>
    );
  }

  Card.propTypes = {
    newsItem: PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }).isRequired,
  };

  // Komponen CardHeader
  function CardHeader({ category, image }) {
    return (
      <header>
        <h2>{category}</h2>
        <img src={image} alt={category} style={{ width: "100%" }} />
      </header>
    );
  }

  CardHeader.propTypes = {
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  };

  // Komponen CardBody
  function CardBody({ date, title, content, link }) {
    return (
      <div>
        <p>{date}</p>
        <h3>{title}</h3>
        <p>{content}</p>
        <Button link={link} />
      </div>
    );
  }

  CardBody.propTypes = {
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  };

  // Komponen Button
  function Button({ link }) {
    return (
      <button>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </button>
    );
  }

  Button.propTypes = {
    link: PropTypes.string.isRequired,
  };

  // Render Komponen Home
  return (
    <div>
      <Header title="Latest News" />
      <div className="news-container">
        {someNews.map((news, index) => (
          <Card key={index} newsItem={news} />
        ))}
      </div>
    </div>
  );
}

export default Home;
