function Testimonials() {
    const testimonials = [
        {
            id: 1,
            quote: 'A melhor experiência gastronômica que já tive. O ambiente é incrível e os pratos são verdadeiras obras de arte.',
            name: 'XXXX XXXX',
            role: 'Crítica Gastronômica'
        },
        {
            id: 2,
            quote: 'Cada visita ao Sabor & Brasa é uma surpresa nova. A qualidade das carnes é incomparável.',
            name: 'XXXX XXXX',
            role: 'Cliente frequente'
        },
        {
            id: 3,
            quote: 'O lugar perfeito para celebrar momentos especiais. Atendimento impecável e sabores inesquecíveis.',
            name: 'XXXX XXXX',
            role: 'Empresária'
        }
    ]

    return (
        <section id="depoimentos" className="bg-dark py-20 scroll-mt-20">
            <div className="w-[85%] mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <p className="text-secondary text-sm tracking-[0.3em] mb-4">DEPOIMENTOS</p>
                    <h2 className="text-white text-5xl font-serif">O que dizem sobre nós</h2>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="text-center">
                            <div className="text-secondary text-6xl font-serif mb-4">"</div>
                            <p className="text-white text-lg italic mb-6 leading-relaxed">
                                {testimonial.quote}
                            </p>
                            <p className="text-white font-semibold">{testimonial.name}</p>
                            <p className="text-neutral text-sm">{testimonial.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
