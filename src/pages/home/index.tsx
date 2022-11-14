import React, { useState } from 'react'
import useSpells from 'hooks/spell-list';
import { useSelector } from 'react-redux';
import type { RootState } from '@/store';
import SpellList from '../../components/spell-list-table';
import Paging from 'components/paging';
import { ISpell } from "@/utils/type";
import { HomeContainer, HomeTitle } from './style';

export default function Home() {
  const pageSize = 6;
  const [sort, setSort] = useState(false);
  const [isFav, setIsFav] = useState<boolean>(false);
  const [search, setSearch] = useState("");
  const changeIsFav = () => {
    setIsFav(!isFav);
    setCurrentPage(1);
  }
  const { listSpells, isLoading } = useSpells();
  const listFavorite = useSelector((state: RootState) => state.spellsState.listFavorite);
  const listSpellsApply = listSpells ? (isFav ? listSpells?.results?.filter((spell: ISpell) => listFavorite.indexOf(spell.index) > -1) : listSpells?.results) : [];
  const listSpellSearch = React.useMemo(() => listSpellsApply?.filter((e: ISpell) => e.name.toLowerCase().includes(search.toLowerCase())), [search, listSpellsApply]);
  const listSpellFinal = React.useMemo(() => sort ? [...listSpellSearch].reverse() : [...listSpellSearch], [listSpellSearch, sort])
  const [currentPage, setCurrentPage] = useState(1);
  const onSwitchPage = (page: number, pageSize = 10) => {
    setCurrentPage(page);
  }
  
  const onSearch = (value: any) => {
    setSearch(value)
  }
  return (
    <HomeContainer>
      <HomeTitle data-testid="home-title">
        <div>
          <span>Spells &nbsp; &nbsp; &nbsp; &nbsp;<br/></span>
          {/* <span className="font-16-sort" onClick={() => setSort(!sort)}>Sort [by name]</span> */}
          <span>
            <input type="checkbox" name="isFav" checked={isFav} onChange={changeIsFav}/>
            <label className="font-16"> &nbsp;Favorite</label>
          </span>
        </div>
        <div>
          <br/>
          <input className='search-box' value={search} onChange={(event) => onSearch(event.target.value)} placeholder='Enter spell name'></input>
          
        </div>
      </HomeTitle>
      <SpellList sort={sort} onSort={() => setSort(!sort)} isLoading={isLoading} spellList={listSpellFinal?.slice((currentPage - 1) * pageSize, currentPage * pageSize)} />
      <div>
        <Paging pageSize={pageSize} total={listSpellFinal?.length} onSwitchPage={onSwitchPage} currentPage={currentPage} />
      </div>
    </HomeContainer>
  )
}
