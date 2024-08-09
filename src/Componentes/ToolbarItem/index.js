import IconeSvg from '../Icones/IconeSvg'

const ToolbarItem = ({ iconPaths, text1, text2, iconClassName, text1ClassName, text2ClassName }) => {
    return(
        <div className='toolbar-item'>
            <IconeSvg paths={iconPaths} className={iconClassName} />
            {text1 && <span className={text1ClassName}>{text1}</span>}
            {text2 && <span className={text2ClassName}>{text2}</span>}
        </div>
    )
}

export default ToolbarItem