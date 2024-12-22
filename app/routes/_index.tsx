import { Form } from "@remix-run/react";

const locations = ["Mombasa", "Tokyo", "Cairo", "Abu Dhabi", "Amsterdam"];

export default function WeatherComponent({ weather }) {
  return (
    <div className="lg:col-span-1 mt-6 space-y-8">
      <Form>
        <div className="relative flex items-center">
          <input
            type="search"
            name="q"
            placeholder="Search location"
            aria-label="Search location"
            className="flex-grow px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800"
          />
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z"
              />
            </svg>
          </button>
        </div>
      </Form>

      <ul className="font-bold space-y-2">
        {locations.map((item, index) => (
          <li key={index}>
            <a
              href={`/?q=${encodeURIComponent(item)}`}
              className="text-blue-500 hover:underline"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <div className="space-y-4 bg-black/50 p-6 rounded-lg shadow-md">
        <h2 className="font-bold text-2xl">Weather Details</h2>
        <ul className="space-y-2">
          {weather.weather.map((item) => (
            <li
              key={item.id}
              className="px-4 py-2 bg-blue-500/80 rounded-lg shadow-sm"
            >
              {item.main}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
