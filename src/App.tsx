import { Route, Routes, useLocation } from 'react-router-dom'
import { InstallBanner } from './components/ui/InstallBanner'
import { NavBar } from './components/ui/NavBar'
import { UpdateToast } from './components/ui/UpdateToast'
import { DrivingModeRoute } from './routes/DrivingModeRoute'
import { HomeRoute } from './routes/HomeRoute'
import { LessonRoute } from './routes/LessonRoute'
import { ReviewRoute } from './routes/ReviewRoute'
import { SettingsRoute } from './routes/SettingsRoute'
import { WeekPracticeRoute } from './routes/WeekPracticeRoute'
import { WeekRoute } from './routes/WeekRoute'

function App() {
  // Driving Mode is a deliberately chrome-free, full-viewport experience — no nav bar or
  // banners competing for space or attention while it's meant to be used hands-free.
  const isDriving = useLocation().pathname === '/driving'

  return (
    <div className="flex min-h-dvh flex-col bg-surface text-ink">
      {!isDriving && <InstallBanner />}
      <main className={isDriving ? 'flex-1' : 'flex-1 pb-20'}>
        <Routes>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/lesson/:lessonId" element={<LessonRoute />} />
          <Route path="/week" element={<WeekRoute />} />
          <Route path="/week/:topicId/practice" element={<WeekPracticeRoute />} />
          <Route path="/review" element={<ReviewRoute />} />
          <Route path="/driving" element={<DrivingModeRoute />} />
          <Route path="/settings" element={<SettingsRoute />} />
        </Routes>
      </main>
      {!isDriving && <UpdateToast />}
      {!isDriving && <NavBar />}
    </div>
  )
}

export default App
