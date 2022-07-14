import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import '../style.css'

const Post = () => {
  const location = useLocation();
  const { data, t } = location.state;
  
  let [title, setTitle] = useState("");
  let [category, setCategory] = useState("");
  let [date, setDate] = useState("");
  let [article, setArticle] = useState("");

  fetch(data)
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
    setTitle(propertise.title);
    setCategory(propertise.category);
    setDate(propertise.date);

    let content = "";
    for (let i = 6; i < lines.length; ++i)
      content += lines[i] + "\r\n";
    setArticle(content);
  });

  return (
    <>
      <div className={"header" + t}>
        <Link to="..">
          ⭐LaivY's Diary⭐
        </Link>
        </div>
      <div className="Post">
        <div className={"top" + t}>
          <p className={"title" + t}>{title}</p>
          <p className={"category" + t}>{category}</p>
          <p className={"date" + t}>{date}</p>
        </div>
        <div className={"article" + t}>
          <ReactMarkdown children={article} remarkPlugins={[remarkGfm]} className={"article" + t} />
        </div>
      </div>
      <div className={ "footer" + t }></div>
    </>
  )
}

export default Post;