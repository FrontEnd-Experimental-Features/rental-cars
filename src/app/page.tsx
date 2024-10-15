import Header from '../components/header';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-blue-100 dark:from-slate-900 dark:to-slate-800 transition-all duration-300">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h2 className="text-5xl font-bold text-blue-800 dark:text-blue-300 mb-4">Welcome to Aegon Car Rentals</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Experience luxury and comfort on your next journey</p>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Luxury Sedans', 'Sporty Convertibles', 'Spacious SUVs'].map((category) => (
            <div key={category} className="bg-white dark:bg-slate-700 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="h-48 bg-gray-300 dark:bg-gray-600"></div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">{category}</h3>
                <p className="text-gray-600 dark:text-gray-300">Discover our range of {category.toLowerCase()}</p>
                <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Aegon Car Rentals. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
