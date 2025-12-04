interface ButtonProps  {
    containerClass?: string
    title?: string
    handleClick?: () => void
}

const Button = ({containerClass, title ,handleClick}:ButtonProps) => {
    return (
        <button
            className={`${containerClass} px-7 py-3 border border-primary rounded-lg text-[16px] font-medium text-primary`}
            onClick={handleClick}
        >
            {title}
        </button>
    )
}
export default Button
