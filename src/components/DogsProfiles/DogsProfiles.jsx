import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function DogsProfiles () {
    console.log("inside the DogsProfiles component");
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'FETCH_ALL_DOGS' });
      }, []);

    const dogsArray = useSelector(store => (store.dogsReducer))


    return(
    <>
        <ul>
        {dogsArray.map(dog => 
            <li key={dog.id}>
                <p>{dog.dog_name}</p>
                <p>{dog.dog_sh_descr}</p>
                <p>{dog.dog_lg_descr}</p>
                <p><img src={dog.pic_url}/></p>

            </li>)}
        </ul>
    </>
    )
}