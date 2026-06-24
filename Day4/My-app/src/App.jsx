import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Navbar />

      <div className="p-6 flex gap-5 m-4">
        <Card
          name="Shubham"
          role="Frontend Developer"
          city="Sonipat"
        />

        <Card
          name="Mahi"
          role="App Developer"
          city="Delhi"
        />

        <Card
          name="Mohit"
          role="Python Developer"
          city="Gurgaon"
        />
        <Card
          name="Ankit"
          role="Java Developer"
          city="Noida"
        />
      </div>
    </>
  );
}

export default App;