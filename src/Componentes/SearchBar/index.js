import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import './SearchBar.css'

const SearchBar = () => {
    return (
        <div className='search-bar'>
            <CampoTexto />
            <Botao>
                <div className='search-button'>
                    <svg className='search-icon'
                     width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10.3333C0 4.62639 4.62639 0 10.3333 0C16.0403 0 20.6667 4.62639 20.6667 10.3333C20.6667 16.0403 16.0403 20.6667 10.3333 20.6667C4.62639 20.6667 0 16.0403 0 10.3333ZM10.3333 2C5.73096 2 2 5.73096 2 10.3333C2 14.9357 5.73096 18.6667 10.3333 18.6667C14.9357 18.6667 18.6667 14.9357 18.6667 10.3333C18.6667 5.73096 14.9357 2 10.3333 2Z"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2929 16.2929C16.6834 15.9024 17.3166 15.9024 17.7071 16.2929L25.7071 24.2929C26.0976 24.6834 26.0976 25.3166 25.7071 25.7071C25.3166 26.0976 24.6834 26.0976 24.2929 25.7071L16.2929 17.7071C15.9024 17.3166 15.9024 16.6834 16.2929 16.2929Z"/>
                    </svg>
                </div>
            </Botao>
        </div>
    )
}

export default SearchBar