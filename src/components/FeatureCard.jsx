

const FeatureCard = ({Img, order1, order2}) => {
  return (
    <div className='flex flex-col  w-full justify-center items-center gap-10 lg:flex-row lg:justify-between lg:items-center '>

        <div className={`bg-cover bg-center bg-no-repeat w-full rounded-md h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] ${order1 ? `lg:order-${order1}` : ''}`} style={{ backgroundImage: `url(${Img})` }}></div>

        <p className={` grotesk text-offWhite text-base md:text-xl lg:text-2xl w-full px-4 md:w-2/3 lg:w-[700px] ${order2 ? `lg:order-${order2}` : ''}`}>Step beyond the ordinary and discover handcrafted pieces that are more than just decorations. We use only the finest, ethically sourced materials, meticulously selected for their beauty and durability. Each piece is then brought to life by skilled artisans who pour their heart and expertise into every detail</p>
      
    </div>
  )
}



export default FeatureCard;