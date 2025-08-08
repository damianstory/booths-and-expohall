import StandardBooth from '@/components/booth/StandardBooth'
import { goldSponsor } from '@/data/sample-sponsors'

export default function GreenEnergyBoothPage() {
  return <StandardBooth sponsor={goldSponsor} />
}