import Navbar from "./Navbar";
export default function Layout() {
  return (
    <div>
      <div className="bg-red-300 flex fixed h-25 left-0 right-0 top-0">
        <Navbar />
      </div>
      <div className="bg-blue-300 flex h-120 top-0]">
        <div className="bg-violet-300 flex-1">
          <div>Name</div>
          <div>Description</div>
          <div>
            <button>Discover now</button>
          </div>
        </div>
        <div className="bg-green-300 flex-1"></div>
      </div>
    </div>
  );
}
