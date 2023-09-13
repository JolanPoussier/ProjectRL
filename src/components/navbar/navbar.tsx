import NavBarComputer from './navbarComputer'
import MobileNavBar from './mobileNavbar'
import { fetchCategories } from '@/utils/datas/categories/categoriesServerSide'
import { Category } from '@prisma/client'

export default async function NavBar() {
  let categories: Category[] = (await fetchCategories()) || []

  return (
    <>
      <MobileNavBar categories={categories} />
      <NavBarComputer categories={categories} />
    </>
  )
}
