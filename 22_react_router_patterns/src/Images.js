import { Navigate, useParams } from "react-router-dom";
export default function Images(props){
    let name = useParams().name;
    let url = `https://source.unsplash.com/1600x900/?${name}`
    console.log(useParams());
    
    return (
        <div>
            {
                /\d/.test(name) 
                ? <Navigate to='/images'/> :  
                <>
                    <h1>This is a {name}</h1>
                    <img src={url} alt="image" />
                </>
            }
        </div>
    );
};