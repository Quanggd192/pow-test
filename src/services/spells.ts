import axios from "axios"
const baseApi = "https://www.dnd5eapi.co/api"

export const getListSpell = async () => {
  let res = await axios.get(`${baseApi}/spells`);
  return res.data;
} 

export const getSpellDetail = async (api: string) => {
  let res = await axios.get(`${baseApi}/spells/${api}`);
  return res.data;
} 