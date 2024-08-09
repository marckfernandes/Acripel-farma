
const IconeSvg = ({paths, fill="#0072D8", className}) => {
    return(
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="32"
            height="32"
            fill={fill} 
            {/*Cor padrão do ícone*/}
            className={className}
            {/*Permite sobrescrever a cor com CSS adicionando className */}
        >
            {paths.map((path, index) => (
            {/*Esse map cria um path para cada item dentro do array de paths do svg*/}
                <path fill-rule="evenodd" clip-rule="evenodd" key={index} d={path} />
            ))}
        </svg>
    )
}

export default IconeSvg
