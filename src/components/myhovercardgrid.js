import { SimpleGrid } from "@mantine/core"
import MyHoverCard from "./myhovercard"
import MyCard from "./mycard"

export default function MyHoverCardGrid() {
  return (
        <SimpleGrid 
        cols={3}
        breakpoints={[
            { maxWidth: 980, cols: 3, spacing: 'md' },
            { maxWidth: 755, cols: 2, spacing: 'sm' },
            { maxWidth: 600, cols: 1, spacing: 'sm' },
        ]}>
          <MyHoverCard 
          title="Luxury Vacation Rental #1" 
          content={
          <MyCard
            variant="side"             
            title="Some Amazing Vacation #1" 
            bookingtext="Book Now" 
            content="Sweet Vacation Text?" 
            imageurl="https://picsum.photos/450"
            badge="Luxury Vacation"/>
          }/>
          
          <MyHoverCard 
          title="Luxury Vacation Rental #2" 
          content={
          <MyCard
            variant="side"             
            title="Some Amazing Vacation #2" 
            bookingtext="Book Now" 
            content="Sweet Vacation Text 2?" 
            imageurl="https://picsum.photos/451"
            badge="Luxury Vacation 2"/>
          }/>

          <MyHoverCard 
          title="Luxury Vacation Rental #3" 
          content={
          <MyCard
            variant="side"             
            title="Some Amazing Vacation #3" 
            bookingtext="Book Now" 
            content="Sweet Vacation Text 3?" 
            imageurl="https://picsum.photos/452"
            badge="Luxury Vacation 3"/>
          }/>
        </SimpleGrid>
  )
}