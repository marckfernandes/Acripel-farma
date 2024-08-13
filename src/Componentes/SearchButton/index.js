import './SearchButton.css'

const SearchButton = (props) => {
    return(
        <button className='search-button'>
            {props.children}
        </button>
    )
}

export default SearchButton