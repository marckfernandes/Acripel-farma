import './LabelButton.css'
import IconSvg from '../Icons/IconSvg'
import { icons } from '../Icons/icons';

const LabelButton = ({ iconName, iconClassName, children }) => {
    const iconPaths = icons[iconName];
    return(
        <button className='label-button'>
            {iconPaths && <IconSvg paths={iconPaths} className={iconClassName} />}
            {children}
        </button>
    )
}

export default LabelButton
