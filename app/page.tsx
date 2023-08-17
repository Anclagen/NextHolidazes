import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import Image from "next/image";

export const VenueUrl = "https://api.noroff.dev/api/v1/holidaze/venues";
export const LoginUrl = "https://api.noroff.dev/api/v1/holidaze/auth/login";
export const RegisterUrl = "https://api.noroff.dev/api/v1/holidaze/auth/register";
export const BookingUrl = "https://api.noroff.dev/api/v1/holidaze/bookings";

async function getData() {
  const res = await fetch(VenueUrl);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Venues</h1>
      <div className="flex flex-wrap justify-center">
        {data.map((venue: any) => (
          <div key={venue.id} className="flex flex-col justify-between w-64 h-64 m-8 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col justify-between h-full p-4">
              <h2 className="text-2xl font-bold">{venue.name}</h2>
              <img className="w-full h-48 object-cover" src={venue.media[0]} alt={venue.name} />
              <p>Guests: {venue.maxGuests}</p>
              <p>price: ${venue.price}</p>
              <p>{venue.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
