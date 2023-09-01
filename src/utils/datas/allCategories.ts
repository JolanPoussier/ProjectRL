export default async function findAllCategories() {
    try {
        const categ = await fetch('/api/findMany');
        const data = await categ.json();
        return data; 
    } catch(e) {
        console.log(e)
    }
};