import React, { useEffect, useState } from "react";
import Input from "./components/Input";
import axios from "axios";
import Recipe from "./components/Recipe";
import Loading from "./components/Loading";
import Notfound from "./components/Notfound";
function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("chicken");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const app_id = "e86c2b27";
    const app_key = "a4ce584ae7fd28170519d7433a7095bb";
    const expReq = `https://api.edamam.com/search?q=${search}&app_id=${app_id}&app_key=${app_key}`;
    axios
      .get(expReq)
      .then((res) => {
        setRecipes(res.data.hits);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [search]);

  return (
    <div className="w-full h-full bg-gradient-to-b from-cyan-400 to-cyan-100 p-2">
      <Input setSearch={setSearch} />
      {!loading ? <Recipe recipes={recipes} /> : <Loading />}
      {recipes.length === 0 && !loading && <Notfound />}
    </div>
  );
}

export default App;
