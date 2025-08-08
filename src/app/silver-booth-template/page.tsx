import StandardBooth from '@/components/booth/StandardBooth'
import { silverSponsor } from '@/data/sample-sponsors'

export default function SilverBoothTemplatePage() {
  return <StandardBooth sponsor={silverSponsor} />
}