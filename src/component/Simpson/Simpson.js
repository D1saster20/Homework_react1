

const Simpson = ({simpson}) => {
    const { name, become, image} = simpson;
    return (
        <div>
            <div>name: {name}</div>
            <div>become: {become}</div>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Simpson};