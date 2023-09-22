import NavBarComputer from './navbarComputer'
import MobileNavBar from './mobileNavbar'
import { fetchCategories } from '@/services/categories/categoriesServerSide'
import { Category } from '@prisma/client'

export default async function NavBar() {
  const categories: Category[] = (await fetchCategories()) || []

  return (
    <>
      <MobileNavBar categories={categories} />
      <NavBarComputer categories={categories} />
    </>
  )
}
