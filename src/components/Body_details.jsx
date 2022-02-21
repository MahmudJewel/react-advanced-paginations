import { ListGroup } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { Pagination } from "antd";

const Body_details = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(15);
  const [total, SetTotal] = useState("");


  const fetchData = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/todos`
    );
    // console.log('All posts ', data);
    setPosts(data);
    SetTotal(data.length);
  };

  useEffect(() => {
    fetchData();
  }, []);

  
  //   get current posts
  const indexOfLaspage = currentPage * postPerPage;
  const indexOfFirstPage = indexOfLaspage - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPage, indexOfLaspage);

  // set post show on per page dynamically 
  const onShowSizeChange =(currentPage, pageSize) =>{
    setPostPerPage(pageSize);
  }


  return (
    <div>
      <ListGroup className="mb-4">
        {posts &&
          currentPosts.map((item) => (
            <ListGroup.Item key={item.id}>{item.title}</ListGroup.Item>
          ))}
      </ListGroup>

      {/* ant paginations  */}
      <Pagination className="mb-3 text-danger"
        onChange={(v)=>setCurrentPage(v)}
        pageSize={postPerPage}
        total={total}
        current={currentPage}
        showSizeChanger
        showQuickJumper
        onShowSizeChange={onShowSizeChange}
      />
    </div>
  );
};

export default Body_details;
