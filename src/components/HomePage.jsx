import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Connecting People Across Faiths & Interests
      </h2>
      <p className="text-lg text-gray-600 mb-6 max-w-xl">
        Connecting people of all faiths through events and community support.
      </p>

      
      <Link
        to="/events"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full mb-10"
      >
        View Events
      </Link>

      
      <div className="flex flex-wrap justify-center items-center gap-6 px-4 ">
        <img
          alt="Make Friends Online"
          src="/make-friends-online.jpg"
          className="h-80 w-auto rounded-full shadow-lg duration-500 hover:scale-105"
        />
        <img
          alt="Community Support"
          src="/AdobeStock_472119374.webp"
          className="h-80 w-auto rounded-full shadow-lg duration-500 hover:scale-105"
        />
      </div>
    </div>
  );
}
