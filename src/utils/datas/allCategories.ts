export default async function findAllCategories() {
    const categories = await fetch('/api/findMany')
    const finalDatas = await categories.json();
    return finalDatas;
};