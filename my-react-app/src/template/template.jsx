import '../App.css'
import '../index.css'


export default function Template(){

  const style={
    animation: "moveUpDown 2s ease-in-out infinite",
  }
  return(
    <div className="bg-[#FBE209] ">
      <div className='relative w-full flex pb-10 mt-25 md:mt-60 pt-50 md:pt-80 lg:py-45'>
      <span className='font-sans font-black w-[80%] md:w-[70%] mx-auto lg:mx-0 text-4xl md:text-6xl lg:ml-[10%] lg:text-7xl tracking-tight  lg:w-[45%] text-[#680C34] '>Snacks so <span className='text-[#CE0A55] '>*good*</span> they won’t last</span>
      <div className="absolute bottom-[35%] left-0 lg:top-[-25%] lg:left-[48%] rotate-[-22.07deg]"><img style={style}  className=' w-[300px] md:w-[600px]' src='/basic_commercial_Homepage/bestseller/3.png'/></div>
    </div>
    <style>{`
    @keyframes moveUpDown {
  0%, 100% {
    transform: translate(0px,0);
  }
  50% {
    transform: translate(13px,-40px);
  }
}
`}</style>
    </div>
  )
}