import { getLatestDestinations } from "@/app/destinos/destinos.service"
import SeccionDestinosListCarousel from "./SeccionDestinosListCarousel"

const SeccionDestinosList = async () => {
	const destinations = await getLatestDestinations()
	return <SeccionDestinosListCarousel destinations={destinations} />
}

export default SeccionDestinosList
