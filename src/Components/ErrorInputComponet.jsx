import { RiErrorWarningLine } from "react-icons/ri";
const ErrorInputComponet = ({ error}) => {
  return (
      <div className="border border-red-400 bg-red-100 rounded p-1 mt-1 flex items-center gap-1">
          <RiErrorWarningLine className="text-red-700"/>
          <p className="text-red-700 font-semibold text-xs">{ error}</p>
    </div>
  )
}

export default ErrorInputComponet