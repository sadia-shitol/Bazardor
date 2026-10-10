import AllProductsSection from './components/AllProductsSection'
import Banner from './components/Banner'
import Container from './components/Container'
import RateBasedProductSection from './components/RateBasedProductSection'
export const instant = false
export default function Home() {
  return (
    <div>
      <Container>
        <Banner />
        <RateBasedProductSection />
        <AllProductsSection />
      </Container>
    </div>
  )
}
