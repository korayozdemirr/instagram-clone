import Sidebar from "./components/SideBar"


const InboxLayout = () =>{
    return(
        <div className="border border-gray-300 rounded bg-white h-[calc(100vh-97px)] flex">
            <Sidebar />
        </div>
    )
}

export default InboxLayout