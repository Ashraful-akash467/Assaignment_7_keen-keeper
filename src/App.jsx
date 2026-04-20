import { Toaster } from 'react-hot-toast';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { TimelineProvider } from './context/TimelineContext';
import friends from './data/friends.json';
import FriendDetailsPage from './pages/FriendDetailsPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import StatsPage from './pages/StatsPage';
import TimelinePage from './pages/TimelinePage';

export default function App() {
  return (
    <HashRouter>
      <TimelineProvider>
        <Toaster position="top-right" />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage friends={friends} />} />
            <Route path="/friends/:id" element={<FriendDetailsPage friends={friends} />} />
            <Route path="/timeline" element={<TimelinePage />} />
            <Route path="/stats" element={<StatsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </TimelineProvider>
    </HashRouter>
  );
}

