import React, { Component } from 'react';
import './NewsItems.css';

export class NewsItems extends Component {
  render() {
    const { title, description, newsUrl, author, date, source, nightMode } = this.props;

    return (
      <div className={`my-3 news-item ${nightMode ? 'night-mode' : ''}`}>
        <div className={`card ${nightMode ? 'bg-dark text-white' : ''}`}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: 0 }}>
            <span className=" badge rounded-pill bg-danger">
              {source}
              <span className="visually-hidden">unread messages</span>
            </span>
          </div>
          <img src={!this.props.imgUrl ? "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwbmV3c3xlbnwwfHwwfHx8MA%3D%3D" : this.props.imgUrl} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{!description ? "Click Here To Read Popular News  " : description}...</p>
            <p className="card-text"><b>Publisher :-</b> {!author ? "unknown" : author} <br /><b>Date :-</b> {new Date(date).toGMTString()}</p>
            <a href={newsUrl} target='_blank' className={`btn btn-sm ${nightMode ? 'btn-light' : 'btn-primary'}`}>Read News</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItems
