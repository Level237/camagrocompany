import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, backgroundImage }) => {
  return (
    <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-white">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,128,0.05)_0%,rgba(0,128,255,0)_50%)]" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 opacity-0"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.8
          }}
        />
      </div>

      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-green-200/20 to-green-300/20 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-blue-200/20 to-blue-300/20 rounded-full blur-3xl"
        />
      </div>

      {/* Content Container */}
      <div className="relative container mx-auto max-w-6xl px-4">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative inline-block mb-4"
          >
            <span className="text-sm font-medium text-green-600 bg-green-50 px-4 py-2 rounded-full">
              CAMAGRO
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-slate-600 max-w-2xl mx-auto mb-8"
            >
              {subtitle}
            </motion.p>
          )}

          {/* Optional Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-green-500 to-blue-500"
          />
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

      {/* Optional Side Decorations */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32">
        <div className="h-full w-full bg-gradient-to-b from-green-500/0 via-green-500/20 to-green-500/0" />
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-32">
        <div className="h-full w-full bg-gradient-to-b from-blue-500/0 via-blue-500/20 to-blue-500/0" />
      </div>
    </div>
  );
};

export default HeroSection; 