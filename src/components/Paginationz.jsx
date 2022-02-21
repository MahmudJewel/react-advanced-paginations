
const Paginationz =({postPerPage, totalPosts, paginate})=>{
    const PageNumbers = [];
    for (let i=1; i<= Math.ceil(totalPosts / postPerPage); i++){
        PageNumbers.push(i);
    }

    return(
        <div className="mt-3 d-flex justify-content-end">
            <ul className="pagination">
                
                {PageNumbers.map((item, index) => (
                    <li key={index} className="page-item">
                        <a onClick={()=>paginate(item)} href="!#" className="page-link active">{item}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Paginationz;