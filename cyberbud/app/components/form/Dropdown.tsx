'use client'

interface DropdownProps {
  key: string
  options: string[]
  name: string
  id: string
}
const Dropdown: React.FC<DropdownProps> = ({
  key,
  options,
  name,
  id
}) => {
  return (
    <>
      <div>
        <select 
          name={name} 
          className="
            h-10 
            w-40
            pl-3 
            text-base 
            bg-purple-900 
            outline-double
            outline-violet-300
            rounded-lg 
            appearance-none 
            focus:shadow-outline
          " 
          key={key}
          placeholder="Regular input"
          id={id}
        >
          {options.map((item, index) => {
            return (<option key={index}>{item}</option>)
          })}
        </select>
      </div>
    </>
  )
}

export default Dropdown