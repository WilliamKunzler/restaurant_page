import menuSteak from '../assets/menu-steak.jpg'
import menuSalmon from '../assets/menu-salmon.jpg'
import menuPasta from '../assets/menu-pasta.jpg'
import menuDessert from '../assets/menu-dessert.jpg'

function Menu() {
    const menuItems = [
        {
            id: 1,
            image: menuSteak,
            name: 'Ancho na Brasa',
            description: 'Corte premium grelhado com manteiga de ervas e legumes da estação.',
            price: 'R$ 89,90'
        },
        {
            id: 2,
            image: menuSalmon,
            name: 'Salmão Grelhado',
            description: 'Filé de salmão com crosta de limão siciliano e ervas frescas.',
            price: 'R$ 79,90'
        },
        {
            id: 3,
            image: menuPasta,
            name: 'Pasta al Tartufo',
            description: 'Massa artesanal com creme de trufas negras e parmesão envelhecido.',
            price: 'R$ 68,90'
        },
        {
            id: 4,
            image: menuDessert,
            name: 'Petit Gâteau',
            description: 'Bolo quente de chocolate belga com sorvete artesanal de baunilha.',
            price: 'R$ 38,90'
        }
    ]

    return (
        <section id="cardapio" className="bg-light py-20 scroll-mt-20">
            <div className="w-[85%] mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <p className="text-secondary text-sm tracking-[0.3em] mb-4">CARDÁPIO</p>
                    <h2 className="text-dark text-5xl font-serif">Destaques da Casa</h2>
                </div>

                {/* Menu Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {menuItems.map((item) => (
                        <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-lg max-w-full">
                            <div className="overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-dark text-2xl font-serif mb-3">{item.name}</h3>
                                <p className="text-neutral2 text-sm mb-4 leading-relaxed">
                                    {item.description}
                                </p>
                                <p className="text-primary text-xl font-semibold">{item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Menu
