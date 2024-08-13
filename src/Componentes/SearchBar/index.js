import SearchButton from '../SearchButton'
import TextInput from '../TextInput'
import IconSvg from '../Icons/IconSvg'
import { icons } from '../Icons/icons'
import './SearchBar.css'

const SearchBar = () => {
    return (
        <div className='search-bar'>
            <TextInput />
            <SearchButton>
                <div className='search-button'>
                    <IconSvg
                        paths={icons.search}
                        className='search-icon'
                    />
                </div>
            </SearchButton>
        </div>
    )
}

export default SearchBar