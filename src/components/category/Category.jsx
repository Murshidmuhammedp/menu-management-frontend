import { leftImage, rightImage } from '../../assets/image/leftImage';
import BgImage from '../../assets/Rectangle 116.png';
import Cocktails from '../cocktails/Cocktails';

const Category = () => {
  const backimage = {
    backgroundImage: `url(${BgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div 
      className="max-w-full flex justify-between pt-5 h-[600px] md:h-[800px]" // Set fixed height
      style={backimage}
    >
      {/* Left-Side Image */}
      <div className="h-full w-[20%] md:flex hidden flex-col gap-4">
        {leftImage.map((i) => (
          <img
            key={i}
            className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[180px]"
            src={i}
          />
        ))}
      </div>

      {/* Center */}
      <div className="md:max-w-[90%] w-full p-8">
        <div className="w-full">
          <Cocktails />
        </div>
      </div>

      {/* Right-Side Image */}
      <div className="h-full w-[20%] hidden md:flex flex-col gap-4">
        {rightImage.map((i) => (
          <img
            key={i}
            className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[180px] transform scale-x-[-1]"
            src={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
