import logo from './logo.svg';
import './App.css';
import AddRecipe from './components/AddRecipe';
import SearchRecipe from './components/SearchRecipe';
import RecipeNavbar from './components/RecipeNavbar';

function App() {
  return (
    <div>
      <RecipeNavbar/>
      <AddRecipe/>
      <SearchRecipe/>
    </div>
  );
}

export default App;
