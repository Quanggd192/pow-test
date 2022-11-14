import React from 'react'
import Loading from 'components/cores/Loading';
import Spell from './spell-item';
import { ISpell } from "@/utils/type"
import { SpellListContainer, SpellListHeader } from "./style";

interface SpellListProps {
  spellList: ISpell[];
  isLoading: boolean;
  onSort: () => void;
  sort: boolean;
}

export default function SpellList({ spellList, isLoading, onSort, sort }: SpellListProps) {
  return (
    <SpellListContainer>
      <SpellListHeader>
        <div className="header-name" onClick={onSort}>Name
          {sort ? <svg viewBox="0 0 320 512" fill='green' className='sort-icon' xmlns="http://www.w3.org/2000/svg"><path d="M311.9 335.1l-132.4 136.8C174.1 477.3 167.1 480 160 480c-7.055 0-14.12-2.702-19.47-8.109l-132.4-136.8C-9.229 317.8 3.055 288 27.66 288h264.7C316.9 288 329.2 317.8 311.9 335.1z"/></svg>
          : <svg fill='green' className='sort-icon sort-up' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224z"/></svg>}
        </div>
        <div className="header-url">
          Url
        </div>
        <div className="header-fav">
          Favorite
        </div>
      </SpellListHeader>
      <div>
        <Loading loading={isLoading} color="green" />
        {spellList?.map((item, index) => <Spell key={index} testId={`spell_name_${index}`} spell={item} />)}
      </div>
    </SpellListContainer>
  )
}
