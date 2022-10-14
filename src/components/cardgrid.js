import { SimpleGrid } from '@mantine/core';
import MyCard from './mycard';

export default function Cardgrid () {

    let bookNowButtonText = "Book Vacation";

    return(
        <SimpleGrid 
        cols={3} 
        spacing="xl"
        breakpoints={[
            { maxWidth: 980, cols: 3, spacing: 'md' },
            { maxWidth: 755, cols: 2, spacing: 'sm' },
            { maxWidth: 600, cols: 1, spacing: 'sm' },
        ]}>
            <MyCard 
            title="Some Amazing Vacation #1" 
            bookingtext={bookNowButtonText} 
            content="text content" 
            imageurl="https://picsum.photos/450"
            badgetext="Available 10/01/2022"
            variant="stacked"
            />
            <MyCard 
            title="Some Amazing Vacation #2" 
            bookingtext={bookNowButtonText}
            content="text content" 
            imageurl="https://picsum.photos/470"
            badgetext="Available 10/02/2022"
            variant="stacked"
            />
            <MyCard 
            title="Some Amazing Vacation #3" 
            bookingtext={bookNowButtonText} 
            content="text content" 
            imageurl="https://picsum.photos/480"
            badgetext="Available 10/03/2022"
            variant="stacked"
            />
            <MyCard 
            title="Some Amazing Vacation #4" 
            bookingtext={bookNowButtonText} 
            content="text content" 
            imageurl="https://picsum.photos/450"
            badgetext="Available 10/03/2022"
            variant="stacked"
            />
            <MyCard 
            title="Some Amazing Vacation #5" 
            bookingtext={bookNowButtonText} 
            content="text content" 
            imageurl="https://picsum.photos/470"
            badgetext="Available 10/03/2022"
            variant="stacked"
            />
            <MyCard 
            title="Some Amazing Vacation #6" 
            bookingtext={bookNowButtonText}
            content="text content" 
            imageurl="https://picsum.photos/480"
            badgetext="Available 10/03/2022"
            variant="stacked"
            />
        </SimpleGrid>
    )
}