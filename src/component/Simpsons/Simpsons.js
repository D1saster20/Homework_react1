import {Simpson} from "../Simpson/Simpson";


const Simpsons = () => {
    const simpsons = [
        {   id : 1,
            name: 'Homer',
            become: 'Male',
            image:'https://upload.wikimedia.org/wikipedia/uk/0/02/Homer_Simpson_2006.png'
        },
        {   id : 2,
            name: 'Marge',
            become: 'Female',
            image:'https://citaty.info/files/characters/760.png'
        },
        {   id : 3,
            name: 'Lisa',
            become: 'Female',
            image:'https://citaty.info/files/characters/638.png'
        }
    ]
    return (
        <div>
            {
                simpsons.map(simpson=><Simpson key={simpson.id} simpson={simpson}/>)
            }
        </div>
    );
};

export default Simpsons;