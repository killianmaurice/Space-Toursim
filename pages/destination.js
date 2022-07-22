import Layout from '../components/Layout'
import Planets from '../components/Planets'

import background from '../public/assets/destination/background-destination-desktop.jpg'

export default function DestinationPage() {
  return (
    <Layout title={'Destination'}>
      <main
        className="page-layout"
        style={{
          backgroundImage: `url(${background.src})`
        }}
      >
        <p className="page-layout__description">
          <span>01</span> pick your destination
        </p>
        <Planets />
      </main>
    </Layout>
  )
}
