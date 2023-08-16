export default function UnderConstruction() {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <h2>
        <span className="underline decoration-primary/50">Page</span>
        <span> is Under </span>
        <span className="text-primary">Construction</span>
      </h2>
      <p className="flex items-center gap-4 py-3 mt-4">
        Design by
        <span className="box-border px-5 py-3 text-white transition bg-black border-2 rounded-3xl hover:underline hover:invert hover:border-primary all">
          <a rel="noreferrer" target="_blank" href="https://www.instagram.com/devsignerlabs/" className="flex items-center gap-2 ">
            <img alt="logo" src="./images/devsigner.jpg" className="w-5" />
            Devsigner Labs
          </a>
        </span>
      </p>
      <p className="flex gap-3 items-center mt-4">
        <span className="text-center">Built by </span>
        <span className="underline decoration-primary/50 hover:scale-105 text-center">
          <a rel="noreferrer" target="_blank" href="https://github.com/madunn123/">Ramadhan Perkasa</a>
        </span>
        <span className="text-center"> and </span>
        <span className="underline text-center decoration-primary/50 hover:scale-105">
          <a rel="noreferrer" target="_blank" href="https://github.com/ichsansandy">Ichsan Sandy</a>
        </span>
      </p>
    </div>
  );
}
