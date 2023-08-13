import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export default class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 6
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    // function to capatalize First letter of the title 
    capatalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        document.title = `${this.capatalizeFirstLetter(this.props.category)} - News App`
    }

    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=048d3be9847547dc9ac55eefc6c8784d&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
    }

    async componentDidMount() {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=048d3be9847547dc9ac55eefc6c8784d&page=1&pageSize=${this.props.pageSize}`
        // this.setState({ loading: true })
        // let data = await fetch(url)
        // let parsedData = await data.json()
        // console.log(parsedData)
        // this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
        this.updateNews()
    }




    handlePreviousClick = async () => {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=048d3be9847547dc9ac55eefc6c8784d&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
        // this.setState({ loading: true })
        // let data = await fetch(url)
        // let parsedData = await data.json()
        // this.setState({
        //     page: this.state.page - 1,
        //     articles: parsedData.articles,
        //     loading: false
        // })
        this.setState({ page: this.state.page - 1 })
        this.updateNews()
    }

    handleNextClick = async () => {
        // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
        //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=048d3be9847547dc9ac55eefc6c8784d&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        //     this.setState({ loading: true })
        //     let data = await fetch(url);
        //     let parsedData = await data.json();
        //     this.setState({
        //         page: this.state.page + 1,
        //         articles: parsedData.articles,
        //         loading: false
        //     })
        // }
        this.setState({ page: this.state.page + 1 })
        this.updateNews()

    }

    render() {
        return (
            <div className='container'>
                <h1 className='my-3 text-center' >News App - Top Headlines from {this.capatalizeFirstLetter(this.props.category)}</h1>
                {this.state.loading && <Spinner />}
                <div className="row my-5">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 45) : ''} description={element.description ? element.description.slice(0, 80) : ''} imageUrl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-around">
                    <div disabled={this.state.page <= 1} className="btn btn-primary" type='button' onClick={this.handlePreviousClick}>&larr; Previous</div>
                    <div disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-primary" type='button' onClick={this.handleNextClick}>Next &rarr;</div>
                </div>
            </div>
        )
    }
}
