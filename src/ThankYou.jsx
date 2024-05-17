import { TiTick } from "react-icons/ti";
import { useNavigate } from "react-router";
const ThankYou = () => {
    const navigate = useNavigate()
  return (
      <div className="flex justify-center items-center h-screen">
          <div className="flex justify-center items-center flex-col">
              <div className="bg-green-700 rounded-full w-8 h-8 flex justify-center items-center">
                  <TiTick className="text-white"/>
              </div>
              <div className="text-center">
                  <h1 className="font-semibold text-2xl">
                      Thank you for providing the feedback
                  </h1>
                  <p className="text-gray-600">
                      We will towards imporving your experience
                  </p>
              </div>
              <div className="mt-4">
                  <button className="bg-violet-600 hover:bg-violet-700 p-1 px-5 text-white rounded"
                  onClick={()=>navigate("/")}
                  >
                      Close
                  </button>
              </div>
          </div>
    </div>
  )
}

export default ThankYou