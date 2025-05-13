import { IconType } from 'react-icons';
import { MdApartment, MdBungalow, MdCabin, MdHolidayVillage } from 'react-icons/md';
import { TbTent, TbBuildingCottage } from 'react-icons/tb';
import { GiWoodCabin, GiTreehouse, GiBarracksTent } from 'react-icons/gi';
import { FaWarehouse } from 'react-icons/fa';

type Category = {
  label: CategoryLabel;
  icon: IconType;
};

export type CategoryLabel =
  | 'cabin'
  | 'tent'
  | 'apartment'
  | 'cottage'
  | 'treehouse'
  | 'yurt'
  | 'tinyhouse'
  | 'bungalow'
  | 'villa'
  | 'lodge';

export const categories: Category[] = [
  {
    label: 'apartment',
    icon: MdApartment,
  },
  {
    label: 'cottage',
    icon: TbBuildingCottage,
  },
  {
    label: 'cabin',
    icon: MdCabin,
  },
  {
    label: 'tent',
    icon: TbTent,
  },
  {
    label: 'villa',
    icon: MdHolidayVillage,
  },
  {
    label: 'bungalow',
    icon: MdBungalow,
  },
  {
    label: 'treehouse',
    icon: GiTreehouse,
  },
  {
    label: 'yurt',
    icon: GiBarracksTent,
  },
  {
    label: 'tinyhouse',
    icon: FaWarehouse,
  },
  {
    label: 'lodge',
    icon: GiWoodCabin,
  },
];