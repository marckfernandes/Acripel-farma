import './CtaButton.css'
import IconSvg from '../Icons/IconSvg'
import { icons } from '../Icons/icons';

const CtaButton = ({ iconName, iconClassName, children }) => {
    const iconPaths = icons[iconName];
    return(
        <button className='cta-button'>
            {iconPaths && <IconSvg paths={iconPaths} className={iconClassName} />}
            {children}
        </button>
    )
}

export default CtaButton
