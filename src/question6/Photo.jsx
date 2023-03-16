import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Photo = () => {

    const { id } = useParams();

    const [photo, setPhoto] = useState(null);

    const getPhoto = async () => {

        const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);

        if (response.ok) {

            const data = await response.json();

            setPhoto(data);
            console.log(data);

        }
    }

    useEffect(() => {

        getPhoto();

    }, [])

    return photo ? <img src={photo.url}></img> : <div>Loading...</div>;

}

export default Photo;