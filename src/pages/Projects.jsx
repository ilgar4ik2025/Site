const projects = [
  {
    title: 'Приложение доставки еды',
    stack: 'Flutter, Firebase',
    description: 'Авторизация, корзина, оплата, push-уведомления.',
    image: '/assets/foodapp.png',
  },
  {
    title: 'Фитнес-трекер',
    stack: 'Flutter, BLE, SQLite',
    description: 'Отслеживание активности, синхронизация с устройствами.',
    image: '/assets/fitness.png',
  },
  {
    title: 'Бизнес-заказы',
    stack: 'Flutter, REST API',
    description: 'CRM-интерфейс, фильтры, аналитика.',
    image: '/assets/business.png',
  },
];

const Projects = () => (
  <section className="bg-black text-white py-20 px-6 max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold mb-10 text-center">Проекты</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {projects.map((proj, i) => (
        <div key={i} className="bg-gray-900 rounded-lg p-4">
          <img src={proj.image} alt={proj.title} className="rounded mb-4" />
          <h3 className="text-xl font-semibold">{proj.title}</h3>
          <p className="text-gray-400">{proj.stack}</p>
          <p className="text-gray-300 mt-2">{proj.description}</p>
        </div>
      ))}
    </div>
  </section>
);
