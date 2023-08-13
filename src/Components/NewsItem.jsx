import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, url, author, date } = this.props

        return (
            <div>
                <div className="card">
                    <img src={imageUrl ? imageUrl : 'https://www.northampton.ac.uk/wp-content/uploads/2018/11/default-svp_news.jpg'} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className='card-text'><small className='text-muted'>By {author ? author : 'Unknown'} on {new Date(date).toGMTString()}</small></p>
                        <a href={url} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
