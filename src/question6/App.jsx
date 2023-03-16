// 6. React router med foto-länkar 5p
// Visa på sidan: 10 thumbnails (små foton) från detta api: https://jsonplaceholder.typicode.com/photos/
// Api:et ger tillbaka en array med foto-objekt.
//
// Url:en till varje thumbnail finns i "thumbnailUrl" i varje foto-objekt.
// När man klickar på fotot ska man komma till en sida som visar det större fotot som
// finns i "url" för varje foto-objekt.
//
// Om man skickar med id:et för fotot i länken kan man hämta info om just det fotot genom att
// anropa api:et med det id:et. Så här: `https://jsonplaceholder.typicode.com/photos/${id}`
// För id 12 blir alltså anropet: https://jsonplaceholder.typicode.com/photos/12

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Root from "./Root";
import Photo from "./Photo";

const router = createBrowserRouter([
  {
    element: <Root />,
    path: '/',
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'photo/:id',
        element: <Photo />
      }
    ]
  }
])

function App() {

  return <RouterProvider router={router} />

}

export default App;
