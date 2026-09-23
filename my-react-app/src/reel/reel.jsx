import '../App.css'
import '../index.css'

export default function Reel(){

  const list1=[
    {text:'NO PALM OIL',color:'#A07FD2'},
    {text:'NO MSG',color:'#FF006E'},
    {text:'LOW CHOLESTROL',color:'#FF470B'},
    {text:'HIGH IN FIBRE',color:'#F99C01'},
    {text:'NO ARTIFICIAL COLOUR',color:'#D2D641'},
    {text:'RICH IN TASTE',color:'#748C2C'}
    ]

    const list=[...list1,...list1,...list1];
      const style = {
        display: "flex",
        animation: "animation 20s linear infinite",
  }

  const item1=[
    {src:'src/reel/1.png'},
    {src:'src/reel/2.png'},
    {src:'src/reel/3.png'},
    {src:'src/reel/4.png'},
  ]

  const items=[...item1,...item1,...item1];

  return(
    <>
    <div className="inline-block justify-center items-center w-full my-8 md:my-10 overflow-x-hidden" >
        <div style={style} className="flex justify-center items-center gap-10 md:gap-20">
      {list.map((list,index)=>(
        <div key={index} style={{ backgroundColor: list.color }} className='flex flex-shrink-0 text-center justify-center items-center text-sm md:text-xl aspect-square w-30 md:w-40  md:p-10 text-white font-black rounded-full'><span>{list.text}</span></div>
      ))}
    </div>
    </div>

    <div className="w-full"><img src='src/reel/label.png' /></div>

    <div className="text-xl md:text-2xl lg:text-4xl font-black text-center my-8 lg:my-20 text-[#680C34]">REAL CREATORS. REAL ROUTINES. REAL PROTEIN.</div>

    <div className="flex   flex-nowrap no-scrollbar [scrollbar-width:none] [&::-webkit-scrollbar]:hidden overflow-x-auto lg:justify-between gap-5 lg:gap-15 my-4 lg:my-10">

          {items.map((item, id) => (
            <div key={id} className='grid w-full rounded-2xl '>
              <div  className="w-[200px] md:w-[300px] lg:w-[400px] rounded-lg"><img className="w-full" src={item.src}/></div>
              </div>
              ))}
              </div>
    </>
  )
}