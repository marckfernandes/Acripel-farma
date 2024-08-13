import './SolidButton.css'
import IconSvg from '../Icons/IconSvg'
import { icons } from '../Icons/icons';

const SolidButton = ({ iconName, iconClassName, children }) => {
    const iconPaths = icons[iconName];
    return(
        <button className='solid-button'>
            {iconPaths && <IconSvg paths={iconPaths} className={iconClassName} />}
            {children}
        </button>
    )
}

export default SolidButton
