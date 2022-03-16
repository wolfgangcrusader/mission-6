import { useParams } from "react-router-dom"

export const Listing = () => {

  const {id} = useParams()

  return <div>

    <h1>
      Listing {id}
    </h1>

  </div>
}

