import React from "react";

const NewsItem =(props)=> {
  
    let { title, description, imageUrl, newsUrl, author, dateNews, source } = props;

    return (
      <div className="my-3">
        <div className="card justify-content-center">
          <img
            src={imageUrl}
            className="card-img-top"
            alt="noting here to show"
          />
          <div className="card-body">
            <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"80%", zIndex:'1'}}>
              {source}
              <span className="visually-hidden">unread messages</span>
            </span>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-tect">
              <small className="text-danger">
                By {!author ? "Unknown" : author} on
                {new Date(dateNews).toGMTString()}
              
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
