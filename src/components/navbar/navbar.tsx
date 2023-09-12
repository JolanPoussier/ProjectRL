import NavBarComputer from './navbarComputer'
import MobileNavBar from './mobileNavbar'
import { fetchCategories } from '@/utils/datas/categServer'
import { Category } from '@/utils/datas/datasType'

export default async function NavBar() {
  let categories: Category[] = (await fetchCategories()) || []
  console.log(categories)

  return (
    <>
      <MobileNavBar categories={categories} />
      <NavBarComputer categories={categories} />
    </>
  )
}
