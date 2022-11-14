import React from 'react'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/store';
import { mutateFavorites } from 'store/spells/spellsSlice';

import useSpellDetail from 'hooks/spell-detail';
import Loading from 'components/cores/Loading';
import Paragrapher from 'components/cores/Paragrapher';
import Attribute from 'components/cores/Attribute';
import Button from 'components/cores/Button';
import { SpellDetailContainer, SpellName, SpellAtributes, AttributeGroup } from "./style";

export default function SpellDetail() {
  const params = useParams();
  const listFavorite = useSelector((state: RootState) => state.spellsState.listFavorite);
  const dispatch = useDispatch();

  const { spellDetail, isLoading } = useSpellDetail({ api: params?.spell + "" })
  const isFav = React.useMemo(() =>
    listFavorite?.indexOf(spellDetail?.index) > -1
    , [spellDetail?.index, listFavorite]);
  const changeFavorite = () => {
    dispatch(mutateFavorites(spellDetail?.index));
  }
  if(isLoading) return <Loading loading={isLoading} color="green" />
  return (
    <SpellDetailContainer>
      <div>
        <a href="/">Back to home</a>
      </div>
      <SpellName data-testid="spell_name">
        <div>{spellDetail?.name}</div>
        {spellDetail?.index && <div>
          <Button testId="fav-detail-button" className={isFav ? "active" : "normal"} onClick={changeFavorite}>{isFav ? "Remove Favorite" : "Add Favorite"}</Button>
        </div>}
      </SpellName>
      <SpellAtributes>
        <AttributeGroup>
          <Attribute panel='Level' value={spellDetail?.level} />
          <Attribute panel='Material' value={spellDetail?.material} />
        </AttributeGroup>
        <AttributeGroup>
          <Attribute panel='School' value={spellDetail?.school?.name || 'Unknown'} />
          <Attribute panel='Class' value={spellDetail?.classes[0]?.name || 'Unknown'} />
        </AttributeGroup>
        <AttributeGroup>
          <Attribute panel='Attack type' value={spellDetail?.attack_type || 'Unknown'} />
          <Attribute panel='Casting time' value={spellDetail?.casting_time} />
        </AttributeGroup>
        <AttributeGroup>
          <Attribute panel='Damage Type' value={spellDetail?.damage?.damage_type?.name || "Unknown"} />
          <Attribute panel='Duration' value={spellDetail?.duration} />
        </AttributeGroup>
      </SpellAtributes>
      <Paragrapher title="Description" desc={spellDetail?.desc?.map((e: string, index: number) => <div key={index}>{e}<br /><br /></div>)} />
    </SpellDetailContainer>
  )
}
