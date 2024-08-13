import IconSvg from '../Icons/IconSvg'
import './ToolbarItem.css'

const ToolbarItem = ({ iconPaths, text1, text2, textsClassName, iconClassName, text1ClassName, text2ClassName }) => {
    return(
        <div className='toolbar-item'>
            <IconSvg paths={iconPaths} className={iconClassName} />
            <div className={textsClassName}>
                {text1 && <span className={text1ClassName}>{text1}</span>}
                {text2 && <span className={text2ClassName}>{text2}</span>}
            </div>
        </div>
    )
}

export default ToolbarItem