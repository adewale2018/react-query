import { Link, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Posts from "./components/Posts";
import TanStackPosts from "./components/TanStackPosts";

function App() {
  return (
    <section className="px-10 py-20">
      <ul className="mb-10 border px-5 py-3">
        <li>
          <Link className="underline text-sky-600 " to="/">Home</Link>
        </li>
        <li>
          <Link className="underline text-sky-600 " to="/posts">Posts (Traditionally)</Link>
        </li>
        <li>
          <Link className="underline text-sky-600 " to="/tanstack-posts">TanStack Way</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/tanstack-posts" element={<TanStackPosts />} />
      </Routes>
    </section>
  );
}

export default App;
