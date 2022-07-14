import React, { useState } from "react";
import { Link } from 'react-router-dom'
import temp from './thumbnail.png'

const Prev = ({postMarkdownFile, theme}) => {
  const LINE_LIMIT = 7;
  const LENGTH_LIMIT = 230;

  let [thumbnail, setThumbnail] = useState(null);
  let [title, setTitle] = useState("");
  let [category, setCategory] = useState("");
  let [date, setDate] = useState("");
  let [article, setArticle] = useState("");

  fetch(postMarkdownFile)
  .then(r => r.text())
  .then(text => {
    let lines = text.split('\n');
    let temp = "{";
    temp += lines[1] + ",";
    temp += lines[2] + ",";
    temp += lines[3] + ",";
    temp += lines[4]
    temp += "}"

    let propertise = JSON.parse(temp);
    setThumbnail(propertise.thumbnail);
    setTitle(propertise.title);
    setCategory(propertise.category);
    setDate(propertise.date);

    let content = "";
    for (let i = 6; i < lines.length; ++i)
    {
      if (content.length > LENGTH_LIMIT)
        break;
      if (i === 6 + LINE_LIMIT)
      {
        content += "...";
        break;
      }
      content += lines[i] + "\n";
    }
    if (content.length > LENGTH_LIMIT + 1)
      content = content.substring(0, LENGTH_LIMIT) + "...";
    setArticle(content);
  });

  return (
    <div className={ "content" + theme }>
    { 
      thumbnail == null
      ? <img className="thumbnail" alt="" src={temp}></img>
      : <img className="thumbnail" alt="" src={thumbnail}></img>
    }
    <div className="title">
      <Link to="/post" state={{ data: postMarkdownFile, t: theme }} >{title}</Link>
    </div>
    <p className="category">{category}</p>
    <p className="date">{date}</p>
    <p className="article">{article}</p>
  </div>
    );
  }

  export default Prev;