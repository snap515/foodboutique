import { Hero, Filter, Pagination, PopularProducts, MainProducts, DiscountProducts } from "../../components/";
function Home() {
  return (
    <>
      <Hero />
      <Filter />
      <MainProducts />
      <PopularProducts />
      <DiscountProducts/>
      <Pagination/>
    </>
  )
}

export default Home;