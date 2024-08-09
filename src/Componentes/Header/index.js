import IconeSvg from '../Icones/IconeSvg'
import SearchBar from '../SearchBar'
import './Header.css'
import { icones } from '../Icones/icones'

const Header = () => {
    return (
        <header id='container'>
            <div className='conteudo'>
                <img src='/Imagens/Logo.png' className='logo' alt='Logo Acripel'/>
                <SearchBar />
                <IconeSvg 
                    paths={icones.eye}
                />
            </div>
            <div className='grafismos'>
                <svg className='grafismo01'
                    width="602" height="192" viewBox="0 0 602 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_ddd_243_2042)">
                            <path d="M252.155 139.829C204.562 186.718 229.765 232.275 112.84 256.085C-4.08554 279.895 -107.391 238.551 -152.682 187.73C-237.467 92.5929 -231.591 -78.9204 -183.781 -165.402C-135.971 -251.883 6.76906 -352.928 132.113 -378.932C260.411 -405.548 416.66 -358.244 466.297 -269.503C506.538 -197.562 508.222 -72.0248 471.331 -2.67357C434.44 66.6777 299.748 92.9411 252.155 139.829Z" fill="#BEDA18" />
                        </g>
                        <defs>
                            <filter id="filter0_ddd_243_2042" x="-223.41" y="-390.321" width="726.203" height="659.32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="1" />
                                <feGaussianBlur stdDeviation="2.5" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_243_2042" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="3" />
                                <feGaussianBlur stdDeviation="0.5" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                                <feBlend mode="normal" in2="effect1_dropShadow_243_2042" result="effect2_dropShadow_243_2042" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="2" />
                                <feGaussianBlur stdDeviation="1" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0" />
                                <feBlend mode="normal" in2="effect2_dropShadow_243_2042" result="effect3_dropShadow_243_2042" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_243_2042" result="shape" />
                            </filter>
                        </defs>
                </svg>
                <svg className='grafismo02'
                    width="306" height="192" viewBox="0 0 306 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_ddd_243_2044)">
                        <path d="M130.073 53.4969C135.225 13.0101 106.658 -4.46802 149.183 -52.4768C191.708 -100.486 258.566 -100.8 297.523 -92.5337C370.449 -77.0583 414.351 -18.4447 425.701 35.5208C437.051 89.4863 409.343 158.676 390.88 179.689C344.402 232.587 324.633 288.353 211.753 283.291C159.609 280.952 50.2006 217.802 68.0488 158.417C85.897 99.0317 124.92 93.9837 130.073 53.4969Z" fill="#0072D8" />
                    </g>
                    <defs>
                        <filter id="filter0_ddd_243_2044" x="61.1025" y="-100.607" width="372.245" height="390.218" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="1" />
                            <feGaussianBlur stdDeviation="2.5" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_243_2044" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="3" />
                            <feGaussianBlur stdDeviation="0.5" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                            <feBlend mode="normal" in2="effect1_dropShadow_243_2044" result="effect2_dropShadow_243_2044" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="2" />
                            <feGaussianBlur stdDeviation="1" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0" />
                            <feBlend mode="normal" in2="effect2_dropShadow_243_2044" result="effect3_dropShadow_243_2044" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_243_2044" result="shape" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </header>
    )
}

export default Header