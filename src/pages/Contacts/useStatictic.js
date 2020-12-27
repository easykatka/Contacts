import store from '../../store'
import { NATIONALITY_HUMAN_NAME } from "../../constants"
export const useStatistic = () => {
 
// получение числа людей в коллекции, разбивка по полу и нации
const getStatictic = store.users.reduce(
    (acc, value) => {
      acc.collectionSize += 1;
      if (value.gender === "male") {
        acc.males += 1;
      } else if (value.gender === "female") {
        acc.females += 1;
      } else {
        acc.indeterminate += 1;
      }
      const fullNational = NATIONALITY_HUMAN_NAME[value.nat] || value.nat;
      if (!acc.natCollection[fullNational]) {
        acc.natCollection[fullNational] = 1;
      } else {
        acc.natCollection[fullNational] += 1;
      }
      return acc;
    },
    {
      collectionSize: 0,
      males: 0,
      females: 0,
      indeterminate: 0,
      natCollection: [],
    },
  )

return [getStatictic]
}