import { useEffect, useState } from "react";

interface Program {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
}

const Programs = () => {
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/programs`)
      .then((res) => res.json())
      .then((data) => setPrograms(data));
  }, []);

  return (
    <>
      <h1>Liste des programmes</h1>
      <div>
        {programs.map((program) => (
          <div key={program.id}>
            <img src={program.poster} alt={program.title} />
            <h2>{program.title}</h2>
            <p>{program.synopsis}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Programs;
