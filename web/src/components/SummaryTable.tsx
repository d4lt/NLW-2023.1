import { generateRangeFromYearBegining } from "../utils/generate-range-from-year-begining"
import { HabitDay } from "./HabitDay"

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S','S']

const summaryDates = generateRangeFromYearBegining()

const minimumDaysToFill = 18 * 7

const amountOfDaysToFill = minimumDaysToFill - summaryDates.length

export function SummaryTable() {
  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-2">

        {weekDays.map((weekDay, i) => {
          return(
            <div 
              key={`${weekDay}-${i}`} 
              className="text-zinc-400 text-xl font-bold flex h-10 w-10 justify-center item-center"
              >
              {weekDay}
            </div>
          )
        })}
        
      </div>

        <div className="grid grid-rows-7 grid-flow-col gap-2">
         {summaryDates.map(date => {
           return <HabitDay key={date.toString()} />
         })} 

         {amountOfDaysToFill > 0 && Array.from({length: amountOfDaysToFill}).map( (_, i) => {
           return (<div className="h-10 w-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40
            cursor-not-allowed">   
           </div>)

         })}

        </div>

    </div>
  )
}