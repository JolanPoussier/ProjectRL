import NavBarComputer from './navbarComputer'
import MobileNavBar from './mobileNavbar'
import { Category } from '@prisma/client'
import { categoryService } from '@/services/category-services'

export default async function NavBar() {
  const categories: Category[] = await categoryService.getCategories()

  return (
    <>
      <MobileNavBar categories={categories} />
      <NavBarComputer categories={categories} />
    </>
  )
}
