const CircleIcon = ({color, children}) => {
    const style = {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontSize: '20px',
    };

    return (
        <div style={style}>
            {children}
        </div>
    );
};

export default CircleIcon;