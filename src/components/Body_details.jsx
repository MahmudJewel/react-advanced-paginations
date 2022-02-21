import { ListGroup } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import Paginationz from "./Paginationz";

const Body_details = () => {
  const [posts, setPosts] = useState([]);
  const [laoding, SetLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(15);

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/todos`
    );
    // console.log('All posts ', data);
    setPosts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  //   get current posts
  const indexOfLaspage = currentPage * postPerPage;
  const indexOfFirstPage = indexOfLaspage - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPage, indexOfLaspage);

  console.log('All posts from set ', posts);
// change page 
  const paginate =(pageNum) =>{
    setCurrentPage(pageNum);
  }
  return (
    <div>
      <ListGroup>
        {posts &&
          currentPosts.map((item) => (
            <ListGroup.Item key={item.id}>{item.title}</ListGroup.Item>
          ))}
      </ListGroup>

      <Paginationz
        postPerPage={postPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Body_details;
