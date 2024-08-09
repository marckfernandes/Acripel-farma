import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import IconeSvg from '../Icones/IconeSvg'
import { icones } from '../Icones/icones'
import './SearchBar.css'

const SearchBar = () => {
    return (
        <div className='search-bar'>
            <CampoTexto />
            <Botao>
                <div className='search-button'>
                    <IconeSvg
                        paths={icones.search}
                        className='search-icon'
                    />
                </div>
            </Botao>
        </div>
    )
}

export default SearchBar