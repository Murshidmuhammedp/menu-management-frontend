import ButtonBg from '../../assets/ButtonBg.png'
import useGetMenu from '../../hook/getMenu'

const Buttons = ({setData}) => {
  const { data } = useGetMenu()
  const handleButton=(value)=>{
   setData(value)
  }
  return (
    <div className='className="w-full  brightness-150  flex flex-col items-center justify-center text-center text-white'
      style={{ backgroundImage: `url(${ButtonBg})` }}>
      <div className='space-x-4 p-6'>
        {data?.map((menu, index) => (
        <button 
        onClick={()=>handleButton(menu.items)}
        className='px-6 p-2 bg-[#000000] border border-[#0796EF] hover:bg-blue-800'>
          {menu.name}
        </button>
        ))}
      </div>
    </div>
  )
}

export default Buttons
