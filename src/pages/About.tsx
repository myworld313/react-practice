const cities = ["Tampa", "Orlando", "Miami", "St. Petersburg"];

function About() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center bg-palm px-6 py-16 font-alegreya text-white">
      <div className="flex flex-col items-center gap-6 md:gap-[2.7vw]">
        <h1 className="text-center text-[clamp(4rem,16.9vw,15.5rem)] leading-none font-normal">
          Florida
        </h1>
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[clamp(1.25rem,3.27vw,3rem)] leading-[1.33] md:flex-nowrap md:gap-x-[3.8vw]">
          {cities.map((city) => (
            <li key={city}>{city}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default About;
