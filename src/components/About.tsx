import aboutRestaurant from '../assets/about-restaurant.jpg'

function About() {
    return (
        <section id="sobre" className="bg-background py-20 scroll-mt-20">
            <div className="w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                {/* Image */}
                <div className="flex justify-center">
                    <img
                        src={aboutRestaurant}
                        alt="Interior do restaurante"
                        className="w-full max-w-xl h-auto rounded-lg shadow-lg object-cover"
                    />
                </div>

                {/* Content */}
                <div className="pr-8">
                    <p className="text-secondary text-sm tracking-[0.3em] mb-4">NOSSA HISTÓRIA</p>

                    <h2 className="text-dark text-5xl font-serif leading-tight mb-6">
                        Onde cada detalhe é preparado com paixão.
                    </h2>

                    <p className="text-neutral2 text-lg mb-6 leading-relaxed">
                        No Sabor & Brasa, acreditamos que a verdadeira gastronomia nasce do
                        encontro entre ingredientes selecionados, técnicas refinadas e um ambiente
                        que convida à celebração. Cada prato conta uma história de dedicação e amor
                        pela culinária.
                    </p>

                    <p className="text-neutral2 text-lg leading-relaxed">
                        Desde 2018, transformamos momentos simples em experiências memoráveis,
                        unindo o melhor da cozinha contemporânea com a tradição das brasas.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About
