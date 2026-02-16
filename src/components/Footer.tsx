function Footer() {
    return (
        <footer className="bg-dark py-16">
            <div className="w-[85%] mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <h3 className="text-white text-2xl font-serif mb-4">Sabor & Brasa</h3>
                        <p className="text-neutral leading-relaxed">
                            Gastronomia contemporânea com a tradição das brasas. Uma experiência que vai além do sabor.
                        </p>
                    </div>

                    {/* Hours */}
                    <div>
                        <h4 className="text-secondary text-sm tracking-[0.3em] mb-4">HORÁRIO</h4>
                        <p className="text-neutral">Terça a Domingo</p>
                        <p className="text-white">12h – 15h | 18h – 23h</p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-secondary text-sm tracking-[0.3em] mb-4">CONTATO</h4>
                        <p className="text-neutral mb-2">Rua XXXXXXXXXX, XXXX</p>
                        <p className="text-neutral mb-2">São Paulo – SP</p>
                        <p className="text-white">(XX) XXXXX-XXXX</p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-neutral/30 pt-8">
                    <p className="text-neutral text-center text-sm">
                        © 2025 Sabor & Brasa. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
