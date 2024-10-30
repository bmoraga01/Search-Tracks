import Header from "./components/Header"
import SearchTracks from "./components/SearchTracks"
import TracksInfo from "./components/TracksInfo"
import TracksList from "./components/TracksList"
import { useTracks } from "./hooks/useTracks"

function App() {

  const { state } = useTracks()

  return (
    <>
      <Header />

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
        { state.track ? <TracksInfo /> : <SearchTracks /> }
      </div>

      { state.track && (
        <main className="max-w-4xl mx-auto py-10">
          <TracksList />
        </main>
      ) }
    </>
  )
}

export default App
