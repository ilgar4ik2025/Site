const services = [
  { icon: '🛠️', title: 'Разработка под ключ' },
  { icon: '🔌', title: 'Интеграция с API и БД' },
  { icon: '🎨', title: 'Дизайн по Figma' },
  { icon: '📦', title: 'Сопровождение и поддержка' },
];

const Services = () => (
  <section className="bg-black text-white py-20 px-6 max-w-5xl mx-auto">
    <h2 className="text-4xl font-bold mb-10 text-center">Услуги</h2>
    <div className="grid md:grid-cols-4 gap-6 text-center">
      {services.map((s, i) => (
        <div key={i} className="bg-gray-900 p-6 rounded-lg">
          <div className="text-3xl mb-2">{s.icon}</div>
          <p className="text-gray-300">{s.title}</p>
        </div>
      ))}
    </div>
  </section>
);
