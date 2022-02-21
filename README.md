
# React Advanced Pagination using Antd
This is a dynamic pagination app. Users can change post to show on per-page. I used Antd component to paginate the page.
Installations :
```
npm install antd
```
Here is the simple code: 
```
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

// get current posts
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

{/* ant paginations */}
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


``` 


## Licence
This web app is developed by : [Jewel Mahmud](https://mahmudjewel.herokuapp.com/
) under licence of [tech villain](https://www.youtube.com/channel/UCJCdq7lWqB7M5b16UatoTEw) youtube channel.

Start date of developing: 21-02-22
## Tools
### Front-end
1. ReactJS
2. Bootstrap ==> 5.1.3
3. HTML-5
4. CSS-3
5. Antd component

### External tools
1. axios
2. API: https://jsonplaceholder.typicode.com/todos


## Screenshot
![home page](https://github.com/MahmudJewel/react-advanced-paginations/blob/main/screenshot/1.jpg)
![home page](https://github.com/MahmudJewel/react-advanced-paginations/blob/main/screenshot/2.jpg)


The End


