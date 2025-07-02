import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="p-4">
        <h1 className="text-3xl font-bold text-center">خوش آمدید به BlaDe</h1>
      </main>
    </div>
  );
}