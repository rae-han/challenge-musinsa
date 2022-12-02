export const fetchGoodsAPI = async (index) => {
  const response = await fetch(`https://static.msscdn.net/musinsaUI/homework/data/goods${0}.json`)
  return response.json();
}
