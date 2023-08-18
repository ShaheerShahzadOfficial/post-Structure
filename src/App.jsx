import React from "react"

import Post from './Post'
import SideBar from "./SideBar/Sidebar"
import "./App.css"
function App() {

  const array = [
    {
      name: "shaheer",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRGEeZltqIRWeUMKExnyeuPqkPiVnIorXgsQ&usqp=CAU",
      date: "5 hours ago",
      avatar: "https://res.cloudinary.com/shaheerdev/image/upload/v1669149062/SocialAppAvatar/pkqn6u7k1swv5fb2mqxv.png",
      caption: "Yellow LAMBO"
    },
    {
      name: "Jos Buttler",
      imageUrl: "https://res.cloudinary.com/shaheerdev/image/upload/v1669211847/SocialApp/gic54uzfpoco4bsk2pyp.jpg",
      date: "1 day ago",
      avatar: "https://scontent.fkhi16-1.fna.fbcdn.net/v/t39.30808-6/365119903_832836281533984_6602059910728968999_n.jpg?stp=dst-jpg_p600x600&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEpmAt124j2BBjfPCU_gI-ea27xLX49UClrbvEtfj1QKW-roq1AkF-7dMdX2klG0WCuDdElEWXlyErqn7lP-0Aj&_nc_ohc=6L7tftF7rxMAX_-uXIj&_nc_ht=scontent.fkhi16-1.fna&oh=00_AfCFWzctpf5IF6eDapzLXDoBgHxDM7X5nPF1goYgnjMFdg&oe=64E299D9",
      caption: "ICC WHITE BALL EVENTS"
    },
    {
      name: "Alex",
      date: "Today",
      imageUrl: "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fHw%3D&w=1000&q=80",
      caption: "Mercedess"
    }
  ]

  return (
    <div className="App2">

<SideBar>

{/* <div></div> */}
      <div className="app3"
       >
        {
          array.map((item, i) => <Post key={i} item={item} />)
        }
      </div>
</SideBar>

    </div>


  )
}

export default App
