interface HeroSectionProps {
  title: string;
  backgroundImage?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, backgroundImage }) => {
  return (
    <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage || "/images/default-hero.jpg"}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-green-900/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/50 to-green-900/80"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-20"></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative text-center">
        <h1 className="text-5xl font-bold text-white mb-4">{title}</h1>
        <div className="w-24 h-1 bg-green-400 mx-auto rounded-full"></div>
      </div>
    </div>
  );
};

export default HeroSection; 