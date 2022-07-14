import React, { useState } from "react";
import Prev from '../components/main/Prev'
import '../style.css'

const importAll = (r) => {
  return r.keys().map(r);
};

const Main = () => {
  // 다크 모드
  let [theme, setTheme] = useState("-dark")
  function changeTheme() {
    if (theme === "-light") {
      document.body.style.backgroundColor = "#282c34";
      setTheme("-dark");
    }
    else {
      document.body.style.backgroundColor = "#FFFFFF";
      setTheme("-light");
    }
  }
  if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    changeTheme();
  }

  // 포스팅 모두 불러오기
  const posts = importAll(require.context("../media", false, /\.md$/)).reverse();

  return (
      <div className="Main">
          <div className={ "header" + theme }>⭐LaivY's Diary⭐</div>
          <div className={ "theme" + theme } onClick={ changeTheme }>{ theme === "-dark" ? "☀️" : "🌙" }</div>
          { posts.length > 0 ? <Prev postMarkdownFile={ posts[0] } theme={ theme }/> : "" }
          { posts.length > 1 ? <Prev postMarkdownFile={ posts[1] } theme={ theme }/> : "" }
          { posts.length > 2 ? <Prev postMarkdownFile={ posts[2] } theme={ theme }/> : "" }
          { posts.length > 3 ? <Prev postMarkdownFile={ posts[3] } theme={ theme }/> : "" }
          { posts.length > 4 ? <Prev postMarkdownFile={ posts[4] } theme={ theme }/> : "" }
          <div className={ "footer" + theme }></div>
      </div>
  );
}

export default Main;