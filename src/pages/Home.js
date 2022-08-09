import {useState} from 'react';
const Home = ()=>
{

    const [changesValues,setChangedValue] = useState(1);
    let changeValue = changesValues;
    const changethevalue = () =>
    {
        
        setChangedValue(++changeValue)
        console.log(changesValues)
        
    }

    return (
    <div className="Home">
        <center>
            <h1>enthada mone scene aana nee...</h1>
            <h1>{changesValues}</h1>
            <button className="butstyle" onClick={changethevalue}>click here</button>
        </center>
    </div>
    );
}

export default Home;