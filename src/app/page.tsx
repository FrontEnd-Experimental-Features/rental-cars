import Header from '../components/header';
import Footer from '../components/footer';
import CarCategoriesGrid from '../components/car-categories/car-categories-grid';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-blue-100 dark:from-slate-900 dark:to-slate-800 transition-all duration-300">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h2 className="text-5xl font-bold text-blue-800 dark:text-blue-300 mb-4">Welcome to Aegon Car Rentals</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Experience luxury and comfort on your next journey</p>
        </section>
        <CarCategoriesGrid />
      </main>
      <Footer />
    </div>
  );
}
