import heroBg from '../assets/hero-bg.jpg'

function Hero() {
    return (
        <div className="min-h-screen bg-dark relative">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${heroBg})` }}
            >
                <div className="absolute inset-0 bg-dark/70"></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
                {/* Hero Section */}
                <div className="flex flex-col items-center justify-center text-center px-4 pt-32 pb-20 md:pt-40 md:pb-32 min-h-screen">
                    <p className="text-secondary text-xs md:text-sm tracking-[0.3em] mb-4 md:mb-6">SABOR & BRASA</p>

                    <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-tight max-w-4xl mb-4 md:mb-6 px-4">
                        Uma experiência que vai além do sabor.
                    </h2>

                    <p className="text-light text-base md:text-lg max-w-2xl mb-6 md:mb-8 leading-relaxed px-4">
                        Carnes nobres, pratos artesanais e um ambiente que acolhe cada momento especial.
                    </p>

                    <button className="bg-primary hover:bg-secondary text-white px-6 md:px-8 py-3 rounded font-medium transition-colors text-sm md:text-base">
                        RESERVAR MESA
                    </button>
                </div>
            </div>
        </div>
    )
}


export default Hero