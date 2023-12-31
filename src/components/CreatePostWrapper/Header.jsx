import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = ({ loading }) => {
  return (
    <header class="header bg-white">
      <div class="container">
        <div class="main-bar">
          <div class="left-content">
            <Link to="/" class="back-btn">
              <i class="fa-solid fa-arrow-left"></i>
            </Link>
            <h4 class="title mb-0">Create Post</h4>
          </div>
          <div class="mid-content"></div>
          <div class="right-content">
            <button
              disabled={loading}
              style={{ outline: "none", border: 0 }}
              id="post-btn"
              class="post-btn"
              type="submit"
            >
              POST
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
