import Axios from "axios";

export const getChampsApi = async () => {
  const res = await Axios.get("https://ddragon.leagueoflegends.com/cdn/11.3.1/data/en_US/champion.json");
  const champList = res.data.data;
  return champList;
};

//export default getChampsApi;

export const getChampInfoApi = async champName => {
  const res = await Axios.get(`https://ddragon.leagueoflegends.com/cdn/11.3.1/data/en_US/champion/${champName}.json`);
  const champInfo = res.data.data;
  return champInfo;
};
