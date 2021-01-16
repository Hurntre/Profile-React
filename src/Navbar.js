import Search from "./SearchBar"

const Navbar = ({ changeTerm }) => {
    return ( 
        <nav className="navbar">
            <h1>Profiles.Org</h1>
            <div className="links">
                <Search changeTerm={changeTerm} />
            </div>
        </nav>
     );
}
 
export default Navbar;