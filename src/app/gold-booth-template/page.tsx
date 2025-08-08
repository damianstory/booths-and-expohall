import StandardBooth from '@/components/booth/StandardBooth'
import { goldSponsor } from '@/data/sample-sponsors'

export default function GoldBoothTemplatePage() {
  return <StandardBooth sponsor={goldSponsor} />
}