import React from "react";
import "./Post.css";

function Post() {
  return (
    <div className="post-body">
      <div className="image">
        <img
          src="https://www.cmmost.cv/themes/cmm/img/hcafe1.jpg"
          alt="cafe do fogo"
          className="title-img"
        ></img>
      </div>
      <div className="post-container">
        <h2 className="post-title">Um dos melhores cafés do planeta</h2>
        <p className="info">
            <a href='/' className="author"> Amancio Pires </a>
            <time>2023-08-17 17:45</time>
        </p>
        <p className="post-summary">
          O café do Fogo é 100% biológico. Este facto faz dele um café especial.
          Não é de estranhar que tenha tanta fama
        </p>
      </div>
    </div>
  );
}

export default Post;
