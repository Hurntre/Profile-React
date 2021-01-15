import { useState } from 'react';
import Pagination from './Pagination';
import ProfileList from './ProfileList';
import useFetch from './useFetch';

const Home = () => {
    const { data, isPending, error} = useFetch('https://api.enye.tech/v1/challenge/records');


    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 20;
    let currentProfiles;
    let allProfiles;

    // Get current posts
    const indexOfLastProfile = currentPage * postsPerPage;
    const indexOfFirstProfile = indexOfLastProfile - postsPerPage;

    if(data) {
        const {records: {profiles}} = data
        allProfiles = profiles;
        currentProfiles = profiles.slice(indexOfFirstProfile, indexOfLastProfile); 
    }

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return ( 
        <div className="home">
            { error && <div> { error } </div> }
            { isPending && <div> Loading... </div>}
            {data && <ProfileList profiles={ currentProfiles } />}
            {data && <Pagination postsPerPage={postsPerPage} totalPosts={allProfiles.length} paginate={paginate} />}
        </div>
     );
} 
 
export default Home;