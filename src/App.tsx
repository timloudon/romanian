import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { unlockAudio } from './audio/player'
import { primeSpeechSynthesis } from './audio/speechSynthesis'
import { InstallBanner } from './components/ui/InstallBanner'
import { NavBar } from './components/ui/NavBar'
import { OfflineBanner } from './components/ui/OfflineBanner'
import { UpdateToast } from './components/ui/UpdateToast'
import { usePWAUpdate } from './hooks/usePWAUpdate'
import { DrivingModeRoute } from './routes/DrivingModeRoute'
import { HomeRoute } from './routes/HomeRoute'
import { LessonRoute } from './routes/LessonRoute'
import { ReviewRoute } from './routes/ReviewRoute'
import { SettingsRoute } from './routes/SettingsRoute'
import { StructureLessonRoute } from './routes/StructureLessonRoute'
import { StructurePracticeRoute } from './routes/StructurePracticeRoute'
import { StructureShortcutsRoute } from './routes/StructureShortcutsRoute'
import { StructuresRoute } from './routes/StructuresRoute'
import { WeekPracticeRoute } from './routes/WeekPracticeRoute'
import { WeekRoute } from './routes/WeekRoute'

function App() {
  const pwa = usePWAUpdate()

  // iPhone only allows audio to start on its own once it's been started from a tap, so unlock
  // both audio paths on the first tap anywhere — otherwise the first lesson plays in silence.
  useEffect(() => {
    const unlock = () => {
      unlockAudio()
      primeSpeechSynthesis()
    }
    window.addEventListener('touchend', unlock, { capture: true })
    window.addEventListener('click', unlock, { capture: true })
    return () => {
      window.removeEventListener('touchend', unlock, { capture: true })
      window.removeEventListener('click', unlock, { capture: true })
    }
  }, [])

  // Driving Mode is a deliberately chrome-free, full-viewport experience — no nav bar or
  // banners competing for space or attention while it's meant to be used hands-free.
  const isDriving = useLocation().pathname === '/driving'

  return (
    <div className="flex min-h-dvh flex-col bg-surface text-ink">
      {!isDriving && <OfflineBanner />}
      {!isDriving && <InstallBanner />}
      <main className={isDriving ? 'flex-1' : 'flex-1 pb-20'}>
        <Routes>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/lesson/:lessonId" element={<LessonRoute />} />
          <Route path="/week" element={<WeekRoute />} />
          <Route path="/week/:topicId/practice" element={<WeekPracticeRoute />} />
          <Route path="/structures" element={<StructuresRoute />} />
          <Route path="/structures/shortcuts" element={<StructureShortcutsRoute />} />
          <Route path="/structures/:lessonId" element={<StructureLessonRoute />} />
          <Route path="/structures/:lessonId/practice" element={<StructurePracticeRoute />} />
          <Route path="/review" element={<ReviewRoute />} />
          <Route path="/driving" element={<DrivingModeRoute />} />
          <Route path="/settings" element={<SettingsRoute />} />
        </Routes>
      </main>
      {!isDriving && (
        <UpdateToast
          needRefresh={pwa.needRefresh}
          onUpdate={pwa.update}
          offlineReady={pwa.offlineReady}
          onDismissOfflineReady={pwa.dismissOfflineReady}
        />
      )}
      {!isDriving && <NavBar />}
    </div>
  )
}

export default App
