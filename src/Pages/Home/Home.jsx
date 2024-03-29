import { Hero, Filter, Pagination, PopularProductsList, MainProductsList, DiscountProductsList } from "../../components/";
function Home() {
  return (
    <>
      <Hero />
      <Filter />
      <MainProductsList />
      <PopularProductsList />
      <DiscountProductsList/>
      <Pagination/>
    </>
  )
}

export default Home;