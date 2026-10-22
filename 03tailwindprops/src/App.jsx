
import ProfileCard from './components/ProfileCard';

function App() {

  
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <ProfileCard username="Prashant" btn="show more" />
      <ProfileCard username="Uniyal" />
    </div>
  );
}

export default App;
