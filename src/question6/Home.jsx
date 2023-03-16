import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {

    console.log('render home');

    const [photos, setPhotos] = useState([]);

    const getPhotos = async () => {

        const response = await fetch('https://jsonplaceholder.typicode.com/photos/');

        if (response.ok) {

            const data = await response.json();
            data.length = 10;
            setPhotos(data);
            console.log(data);

        }
    }

    useEffect(() => {

        getPhotos();

    }, [])

    return (

        <div className="flex flex-wrap gap-4 p-4">
            {photos.map((photo) => {

                return <Link to={`/photo/${photo.id}`}><img src={photo.thumbnailUrl} alt="Thumbnail" /></Link>

            })}
        </div>

    );

}

export default Home;