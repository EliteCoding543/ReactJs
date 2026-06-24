function Card({ name, role, city }) {
  return (
    <div className="w-90 p-5 bg-white rounded-lg shadow-lg border-2">
      <h2 className="text-2xl font-bold">{name}</h2>
      <p>{role}</p>
      <p>{city}</p>
    </div>
  );
}

export default Card;