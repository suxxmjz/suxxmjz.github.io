import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className="relative w-full min-h-screen">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="home.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0"></div>
      
      <Navbar />
      
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold">SUKRITI</h1>
        <p className="mt-4 max-w-lg text-lg" style={{paddingBottom: '30px'}}>
          software engineer
        </p>
        <p className="uppercase text-sm italic tracking-wide">
          &quot;Dream is not that which you see while sleeping, it is something that does not let you sleep.&quot;
        </p>
        <p className="text-xs text-right italic mt-2">- A.P.J. Abdul Kalam</p>
      </div>

      <footer className="absolute bottom-0 w-full text-white text-center py-4 text-sm">
        <p>&copy; 2025 Sukriti Sharma. All Rights Reserved.</p>
      </footer>
    </div>
  );
}