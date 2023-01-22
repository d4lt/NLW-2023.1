import dayjs from "dayjs";

export function generateRangeFromYearBegining(){
    const firstDayYear = dayjs().startOf('year')
    const today = new Date()

    let compareDay = firstDayYear
    const dates = []

    while ( compareDay.isBefore(today) ){
        dates.push(compareDay.toDate())
        compareDay = compareDay.add(1, 'day')
    }

    return dates
}