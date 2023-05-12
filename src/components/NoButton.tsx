import { useState, CSSProperties } from "react"

export const NoButton = () => {
  const [randomPositon, setRandomPositon] = useState({ left: 0, top: 0 })
  const [position, setPosition] = useState<CSSProperties>({
    position: "static",
  })

  const moveButton = () => {
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight

    const newPositionX = Math.floor(Math.random() * (windowWidth - 100))
    const newPositionY = Math.floor(Math.random() * (windowHeight - 100))

    setRandomPositon({ left: newPositionX, top: newPositionY })
    setPosition({ position: "absolute" })
  }

  return (
    <button
      style={{
        position: position.position,
        left: randomPositon.left,
        top: randomPositon.top,
        width: "100px",
        height: "50px",
        backgroundColor: "red",
        color: "#F2F2F2",
        fontSize: "20px",
        fontWeight: "bold",
        borderRadius: "8px",
        border: "none",
      }}
      onClick={moveButton}
    >
      Não
    </button>
  )
}