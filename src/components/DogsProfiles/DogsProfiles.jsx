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
                {dog.dog_name},
                {dog.dog_sh_descr},
                {dog.dog_lg_descr},
                <img src="{dog.dog_url}"/>

            </li>)}
        </ul>
    </>
    )
}