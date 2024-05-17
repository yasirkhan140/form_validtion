import { useNavigate } from "react-router"
import { IoMdRefresh } from "react-icons/io";
const TableBar = ({ result, filter }) => {
  const navigate = useNavigate()
  return (
    <div className="bg-white w-100 p-1 rounded px-4 mb-3 flex justify-between ">
      <div>

                <h1 className="text-xl text-black font-semibold">
                    Aromatic Bar    
          </h1>
          <p className="text-gray-500 text-sm"> 
              {result}{" "}records found. {filter?? 0} filters applied
        </p>
        </div>
      <div className="flex gap-4 items-center">
        <div>
          <input type="text" className="w-28 border border-gray-300 rounded p-1 pl-2 text-sm" placeholder="search"/>
        </div>
        <div>
          <button className="border border-gray-300 bg-gray-200 hover:bg-gray-300">
           <IoMdRefresh className="bg-transparent"/>
          </button>
        </div>
        <div>
          <button className="bg-green-700 hover:bg-green-800 p-1 rounded px-2 text-white font-semibold"
          onClick={()=>navigate('/add')}
          >
            Add New
          </button>
        </div>
          </div>
    </div>
  )
}

export default TableBar