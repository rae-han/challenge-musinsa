export const fetchGoodsAPI = async (index) => {
  const response = await fetch(`https://static.msscdn.net/musinsaUI/homework/data/goods${index}.json`)
  return response.json();
}
