import React from "react";
import "./Post.css";

function Post() {
  return (
    <div className="post-body">
      <img
        src="https://www.cmmost.cv/themes/cmm/img/hcafe1.jpg"
        alt="cafe do fogo"
        className="title-img"
      ></img>
      <div className="post-summary">
      <h2>Um dos melhores cafés do planeta</h2>
      <p>
        O café do Fogo é 100% biológico. Este facto faz dele um café especial.
        Não é de estranhar que tenha tanta fama
      </p>
      </div>
    </div>
  );
}

export default Post;
