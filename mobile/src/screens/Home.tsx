import { View, Text, ScrollView} from "react-native";
import { HabitDay, DAY_SIZE } from "../components/HabitDay";
import { Header } from "../components/Header";
import { generateRangeFromYearBegining } from "../utils/generate-range-from-year-begining"

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

const daysFromYearStart = generateRangeFromYearBegining();
const minimumSummaryDays = 7 * 13;
const daysToFill = minimumSummaryDays - daysFromYearStart.length;

export function Home() {
  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <Header />

      <View className="flex-row mt-6 mb-2">
        {
          weekDays.map((weekDay, i) => (
            <Text
              key={`${weekDay}-${i}`}
              className="text-zinc-400 text-xl font-bold text-center mx-1"
              style={{width: DAY_SIZE}}
            >
              {weekDay}
            </Text>
          ))
        }
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 100 }}
      >
        <View className="flex-row flex-wrap">
          {
            daysFromYearStart.map(date => (
              <HabitDay
                key={date.toString()}
              />
            ))
          }

          {
            daysToFill > 0 && Array.from({length: daysToFill})
            .map( (_, i) => (
              <View
                className="border-2 border-zinc-800 bg-zinc-900 rounded-lg m-1 opacity-40"
                style={{ width: DAY_SIZE , height: DAY_SIZE}}
                key={i}
              />
            ))
          } 
        </View>
      </ScrollView>   

    </View>
  )
}