import React, { useEffect, useState } from 'react'
const apiKey = 'https://jsonplaceholder.typicode.com/users';
const UserProfile = () => {
    const [data, setData] = useState([])

    useEffect(() => {
         fetch(apiKey)
         .then((res) => res.json())
         .then((d) => {
            setData(d);
         });
    }, [])
  return (
  <>
    {data.length > 0 ? (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        {data.map((item) => (
          <div
            key={item.id}
            className="w-96 rounded-xl shadow-lg p-6 bg-white hover:shadow-2xl transition-all duration-300"
          >
            <h2 className="text-2xl font-bold text-gray-800">
              {item.name}
            </h2>

            <p className="text-gray-500">@{item.username}</p>

            <div className="mt-4 flex gap-4">
              <p className="font-semibold">📧 Email</p>
              <p>{item.email}</p>
            </div>

            <div className="mt-3 flex gap-4">
              <p className="font-semibold">📞 Phone</p>
              <p>{item.phone}</p>
            </div>

            <div className="mt-3 flex gap-4">
              <p className="font-semibold">🌐 Website</p>
              <a
                href={`https://${item.website}`}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline"
              >
                {item.website}
              </a>
            </div>

            <div className="mt-4 border-t pt-3">
              <p className="font-semibold">📍 Address</p>
              <p>{item.address.street}, {item.address.suite}</p>
              <p>{item.address.city} - {item.address.zipcode}</p>
            </div>

            <div className="mt-4 border-t pt-3">
              <p className="font-semibold">🏢 Company</p>
              <p>{item.company.name}</p>
              <p className="italic text-sm">
                "{item.company.catchPhrase}"
              </p>
            </div>
          </div>
        ))}
      </div>
    ) 
    : 
    (
      <h1 className="text-center text-2xl font-bold mt-10">
        Please Wait Data Loading...
      </h1>
    )}
  </>
);
}

export default UserProfile
