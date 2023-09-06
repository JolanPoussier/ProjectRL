export default async function findAllCategories() {
    const categories = await fetch('/api/category')
    const finalDatas = await categories.json();
    return finalDatas;
};