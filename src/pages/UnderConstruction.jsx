export default function UnderConstruction() {
  return (
    <div className="flex flex-col justify-center items-center relative">
      <h2>
        <span className="underline decoration-primary/50">Page </span>
        is Under
        <span className="text-primary"> Construction</span>
      </h2>
      <p className="mt-4 py-3  flex gap-4 items-center">
        Design by
        <span className="bg-black box-border text-white px-5 py-3 rounded-3xl hover:underline hover:invert border-2 hover:border-primary transition all">
          <a rel="noreferrer" target="_blank" href="https://www.instagram.com/devsignerlabs/" className="flex items-center gap-2 ">
            <img alt="logo" src="./images/devsigner.jpg" className="w-5" />
            Devsigner Labs
          </a>
        </span>
      </p>
      <p className="mt-4 flex gap-3">
        <span>Built by </span>
        <span className="underline decoration-primary/50 hover:scale-105">
          <a rel="noreferrer" target="_blank" href="https://github.com/madunn123/">Ramadhan Perkasa</a>
        </span>
        <span> and </span>
        <span className="underline decoration-primary/50 hover:scale-105">
          <a rel="noreferrer" target="_blank" href="https://github.com/ichsansandy">Ichsan Sandy</a>
        </span>
      </p>
    </div>
  );
}
