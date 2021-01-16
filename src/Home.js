import { useState } from 'react';
import Pagination from './Pagination';
import ProfileList from './ProfileList';
import useFetch from './useFetch';

const Home = ({ searchTerm }) => {
    const { data, isPending, error} = useFetch('https://api.enye.tech/v1/challenge/records');

    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 20;
    let currentProfiles = null;
    let Profiles = null;
    let filteredProfiles = null;

    // Get current posts
    const indexOfLastProfile = currentPage * postsPerPage;
    const indexOfFirstProfile = indexOfLastProfile - postsPerPage;


    if (data) {
        const {records: {profiles}} = data
        Profiles = profiles;
    };

    if (Profiles) {
        filteredProfiles = Profiles.filter((val) => {
            if (searchTerm === '') {
                return val
            } else if (val.FirstName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                    val.LastName.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
            }
        })

        currentProfiles = filteredProfiles.slice(indexOfFirstProfile, indexOfLastProfile)
    }

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return ( 
        <div className="home">
            { error && <div> { error } </div> }
            { isPending && <div> Loading... </div>}
            {currentProfiles && <ProfileList profiles={ currentProfiles } />}
            {currentProfiles && <Pagination postsPerPage={postsPerPage} totalPosts={filteredProfiles.length} paginate={paginate} />}
        </div>
     );
} 
 
export default Home;