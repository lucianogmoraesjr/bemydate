import { useHistory } from 'react-router-dom'

import { NoButton } from './components/NoButton'

import lovezinGif from "./assets/lovezin.webp"


function App() {
  const history = useHistory()

  const redirectToLittleAss = () => {
    history.push('/little-ass')
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <img src={lovezinGif} alt="Lovezin" style={{ marginBottom: "32px" }} />

      <h2 style={{ fontSize: "32px", color: "#F2F2F2", marginBottom: "24px" }}>
        Namora comigo?
      </h2>

      <div>
        <button
          style={{
            width: "100px",
            height: "50px",
            backgroundColor: "#15BFBF",
            color: "#f2f2f2",
            fontSize: "20px",
            fontWeight: "bold",
            border: "none",
            borderRadius: "8px",
            marginRight: "8px",
          }}
          onClick={redirectToLittleAss}
        >
          Sim
        </button>

        <NoButton />
      </div>
    </div>
  )
}

export default App
