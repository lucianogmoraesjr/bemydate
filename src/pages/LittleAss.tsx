import { NoButton } from "../components/NoButton"

import deliciousEmoji from "../assets/delicious.webp"

export function LittleAss() {
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
      <img
        src={deliciousEmoji}
        alt="delicious"
        style={{ width: "300px", height: "300px", marginBottom: "32px" }}
      />

      <h2
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          color: "#ff0000",
          marginBottom: "24px",
        }}
      >
        E O CUZINHO?
      </h2>

      <div style={{display: 'flex'}}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: "100px",
            height: "50px",
            backgroundColor: "#15BFBF",

            border: "none",
            borderRadius: "8px",
            marginRight: "8px",
          }}
        >
          <a
            style={{
              color: "#f2f2f2",
              fontSize: "20px",
              fontWeight: "bold",
              textDecoration: 'none',
              textAlign: 'center',
              width: '100%'
            }}
            href="https://www.youtube.com/watch?v=Iht75-LF7mE"
            target="blank"
          >
            Sim
          </a>
        </div>

        <NoButton />
      </div>
    </div>
  )
}
