const API_KEY='d9e72cb017b448d59b9db8c85da9662c';
let news = [];
const getLatestNews = async () => {
    const url = new URL(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
    );
    const response = await fetch(url);
    const data = await response.json();
    news = data.articles;
    console.log("dddd", news);
    
};
getLatestNews();
