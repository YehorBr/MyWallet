import { GiFruitBowl } from 'react-icons/gi'
import { GiWineBottle } from "react-icons/gi";
import { GiGamepad } from "react-icons/gi";
import { MdHealthAndSafety } from "react-icons/md";
import { GiHealthNormal } from "react-icons/gi";
import { FaCarAlt } from "react-icons/fa";
import { GiSofa } from "react-icons/gi";
import { BsTools } from "react-icons/bs";
import { IoReceipt } from "react-icons/io5";
import { MdSportsFootball } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa6";
import { RiRobotFill } from "react-icons/ri";
import { FaCoins } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa6";


export const categoriesIncomesArr = [
	{ label: 'ЗП', value: 'salary' },
	{ label: 'Дод. дохід', value: 'additionalIncome' },
]

export const categoriesExpensesArr = [
	{ label: 'Транспорт', value: 'transport' },
	{ label: 'Продукти', value: 'products'},
	{ label: 'Здоров’я', value: 'health' },
	{ label: 'Алкоголь', value: 'alcohol' },
	{ label: 'Розваги', value: 'fun' },
	{ label: 'Все для дому', value: 'home' },
	{ label: 'Техніка', value: 'tech' },
	{ label: 'Комуналка, зв’язок', value: 'utilities' },
	{ label: 'Спорт, хобі', value: 'sport' },
	{ label: 'Навчання', value: 'education' },
	{ label: 'Інше', value: 'other' },
]

export const categoryIcons = {
  products: GiFruitBowl,
  alcohol: GiWineBottle,
  fun: GiGamepad,
  health: MdHealthAndSafety,
  transport: FaCarAlt,
  home: GiSofa,
  tech: BsTools,
  utilities: IoReceipt,
  sport: MdSportsFootball,
  education: FaBookOpen,
  other: RiRobotFill,
  salary:FaMoneyBillWave,
  additionalIncome: FaCoins,
}

export const MonthsArr = [
  { label: 'Січень', value: 'january' },
  { label: 'Лютий', value: 'february' },
  { label: 'Березень', value: 'march' },
  { label: 'Квітень', value: 'april' },
  { label: 'Травень', value: 'may' },
  { label: 'Червень', value: 'june' },
  { label: 'Липень', value: 'july' },
  { label: 'Серпень', value: 'august' },
  { label: 'Вересень', value: 'september' },
  { label: 'Жовтень', value: 'october' },
  { label: 'Листопад', value: 'november' },
  { label: 'Грудень', value: 'december' },
];