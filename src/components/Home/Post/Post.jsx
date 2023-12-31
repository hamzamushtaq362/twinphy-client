import { Header } from "./Header";
import { Media } from "./Media";
import { Likes } from "./Likes";
import { Comments } from "./Comments";
import axios from "axios";
import { getPosts } from "../../../api";
import { useEffect, useState } from "react";

export const Post = () => {
  const [postData, setPostData] = useState([]);


  useEffect(() => {
    getPosts()
      .then((res) => setPostData(res?.data?.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(postData, "postData");
  return (
    <div id="post-area" className="post-area">
      {postData.map((item, index) => (
        <div className="post-card">
          <Header time={item?.createdAt} userData={item?.user_id}/>
          <p className="text-black">{item?.text}</p>
          <div className="dz-media">
            <Media src={item?.mediaUrls} />
            <div className="post-meta-btn">
              <ul>
                <li>
                  <Likes />
                </li>
                <li>
                  <Comments />
                </li>

                {/* <!-- Dynamically Added Elements --> */}
                <div id="dynamicElements">
                  {/* <!-- Dynamically added elements will be inserted here --> */}
                </div>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
