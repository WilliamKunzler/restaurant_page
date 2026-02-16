import { useEffect, useState } from 'react'

function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-dark/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
            }`}>
            <div className={`flex justify-between items-center px-4 md:px-8 transition-all duration-300 ${scrolled ? 'py-3' : 'py-4 md:py-6'
                }`}>
                <div className="flex items-center gap-2">
                    <h1 className="text-white text-xl md:text-2xl font-serif tracking-wide">Sabor & Brasa</h1>
                </div>

                <nav className="flex items-center gap-3 md:gap-8">
                    <a href="#sobre" className="text-white hover:text-light transition-colors text-xs md:text-base hidden sm:block">SOBRE</a>
                    <a href="#cardapio" className="text-white hover:text-light transition-colors text-xs md:text-base hidden sm:block">CARDÁPIO</a>
                    <a href="#depoimentos" className="text-white hover:text-light transition-colors text-xs md:text-base hidden md:block">DEPOIMENTOS</a>
                    <button className="bg-primary hover:bg-secondary text-white px-4 md:px-6 py-2 rounded transition-colors text-sm md:text-base">
                        RESERVAR
                    </button>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
