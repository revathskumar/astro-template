import { useRegisterSW } from "virtual:pwa-register/react"
import { Button } from "@/components/ui/button"

function ReloadPrompt() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r: ServiceWorkerRegistration | undefined) {
      // eslint-disable-next-line prefer-template
      console.log("SW Registered: " + r)
    },
    onRegisterError(error: unknown) {
      console.log("SW registration error", error)
    },
  })

  const close = () => {
    setOfflineReady(false)
    setNeedRefresh(false)
  }

  return (
    <div className="ReloadPrompt-container">
      {(offlineReady || needRefresh) && (
        <div className="ReloadPrompt-toast">
          <div className="ReloadPrompt-message">
            {offlineReady ? (
              <span>App ready to work offline</span>
            ) : (
              <span>
                New content available, click on reload button to update.
              </span>
            )}
          </div>
          <div className="flex flex-row gap-2">
            {needRefresh && (
              <Button onClick={() => updateServiceWorker(true)}>Reload</Button>
            )}
            <Button onClick={close}>Close</Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ReloadPrompt
