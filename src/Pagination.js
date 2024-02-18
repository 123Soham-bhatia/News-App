import React, { useContext} from 'react';
import { Appcontext } from './context/Appcontext';
// import { useSearchParams } from 'react-router-dom';

const Pagination = () => {
  const { page, setpage } = useContext(Appcontext);
  // const searchParams = useSearchParams();

  // const urlValue = searchParams.includes('/topic');
  // const url_value = searchParams.includes('/')
  // const [totalPages, setTotalPages] = useState(0);

  // useEffect(() => {
  //   console.log("the length of this is "+ searcharticles.length);
  //   if (urlValue) {
  //       const a = searcharticles.length/5
  //     setTotalPages(a);
  //     console.log("the length of article's pages is ", totalPages)
  //     setURL(false);
  //   } 
  //   if(!urlValue) {
  //       const b  = articles.length/5
  //     setTotalPages(b);
  //     setURL(true);
  //   }
  // }, []);


  // NEED TO WORK HARD ON IT...................................
  return (
    <div>
      <div style={{ display: 'flex', gap: '5px' }}>
        <div>
          {page > 1 && <button onClick={() => setpage(page - 1)}>prev</button>}
        </div>
        <div>
          {page <  4   &&  <button onClick={() => setpage(page + 1)}>Next</button>}
        </div>
        <div>
          <h4>Page {page} of  4 </h4>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
