const Button = ({ height, radius, border,width, color, onClick, className, children }: any) => {
    return (
        <div className="div-button">
            <button className={className} onClick={onClick} style={{backgroundColor: color, border:"solid", borderRadius: radius, height, width}}>{children}</button>
        </div>
    )
}

export default Button;