
import ResumeBuilder from './components/ResumeBuilder';
import { ResumeProvider } from './contexts/ResumeContext';

function App() {
  return (
    <ResumeProvider>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <ResumeBuilder />
          </div>
        </div>
      </main>
    </ResumeProvider>
  );
}

export default App;