import { useEffect } from "react";

function AnimalResults() {
  useEffect(() => {
    fetchAnimals();
  }, []);

  const fetchAnimals = async () => {
    const response = await fetch(`${import.meta.env.VITE_PETFINDER_URL}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_PETFINDER_TOKEN}`,
      },
    });
    const data = await response.json();

    console.log(data);
  };
  return <div>AnimalResults</div>;
}

export default AnimalResults;
