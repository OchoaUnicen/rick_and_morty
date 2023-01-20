import Searchbar from './SearchBar';

const Nav = ({onSearch}) => {
    return (
        <nav>
            <Searchbar onSearch={onSearch}/>
        </nav>
    )
}

export default Nav;