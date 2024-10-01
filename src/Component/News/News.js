

import React, { Component } from 'react';
import NewsItems from '../NewsItems/NewsItems.js';
import Spinner from '../Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general'
    
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    nightMode: PropTypes.bool.isRequired, // Define propTypes for nightMode
    selectedCountry: PropTypes.string.isRequired // Add selectedCountry prop
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    };
  }

  componentDidMount() {

    this.fetchMoreData(); // Initially fetch data
    
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedCountry !== this.props.selectedCountry) {
      this.fetchMoreData();
    }
  }

  fetchMoreData = async () => {
    const { category, pageSize, selectedCountry } = this.props;
    const { page, articles } = this.state;
  
    this.setState({ loading: true });
  
    try {
      this.props.setProgress(10);
      const url = `https://newsapi.org/v2/top-headlines?country=${selectedCountry}&category=${category}&pageSize=${pageSize}&page=${page}&apiKey=af0d582821684da2bfc5cdce7ae77319`;
      this.props.setProgress(30);
      const response = await fetch(url);
      this.props.setProgress(50);
      const data = await response.json();
      this.props.setProgress(70);
  
      if (!data.articles) {
        console.error('No articles found in the response:', data);
        return;
      }
  
      this.setState({
        articles: [...articles, ...data.articles],
        totalResults: data.totalResults,
        page: page + 1,
        loading: false
      });
      this.props.setProgress(90);
    } catch (error) {
      console.error('Error fetching data:', error);
      this.setState({ loading: false });
    }
    this.props.setProgress(100);
  };
  

  render() {
    const { articles, totalResults } = this.state;
    const { nightMode } = this.props;

    return (
      <div className={`container my-3 ${nightMode ? 'night-mode' : ''}`}>
        <h2 className={` text-center  ${nightMode ? 'text-white' : ''}`} style={{ margin: "60px" }}>
           Top News Headlines
        </h2>

        <InfiniteScroll
          dataLength={articles.length}
          next={this.fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {articles.map(article => (
                <div className="col-md-4" key={article.url}>
                  <NewsItems
                    title={article.title ? article.title.slice(0, 45) : ''}
                    description={article.description ? article.description.slice(0, 80) : ''}
                    imgUrl={article.urlToImage || ''}
                    newsUrl={article.url}
                    author={article.author}
                    date={article.publishedAt}
                    source={article.source.name}
                    nightMode={nightMode}
                  />
                </div>
              ))}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default News;
