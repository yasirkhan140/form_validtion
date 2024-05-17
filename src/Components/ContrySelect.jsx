import contries from '../contry/contry.json'

const ContrySelect = () => {
  return (
      <select className='border border-gray-300 hover:border-gray-400 w-12 mr-2 rounded'>
          {contries?.map((contry,i) => (
              <option value={contry.dialCode} key={i}>
                  {contry.name}
              </option>
          ))}
    </select>
  )
}

export default ContrySelect