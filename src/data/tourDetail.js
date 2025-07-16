const tours = [
    {
        id: '1',
        title: 'Mekong Delta Discovery',
        location: 'Can Tho, Vietnam',
        price: 899,
        rating: 4.7,
        reviews: 158,
        duration: '5 days',
        groupSize: 'Max 15 people',
        difficulty: 'Easy',
        description: 'Experience the charm of the Mekong Delta with lush rice fields, vibrant floating markets, and warm Southern Vietnamese hospitality.',
        highlights: [
            'Visit Cai Rang Floating Market',
            'Boat ride through Tra Su Cajuput Forest',
            'Taste authentic Mekong cuisine',
            'Traditional rice paper village',
            'Rowing boat through small canals',
            'Southern folk music performance'
        ],
        itinerary: {
            'Day 1': 'Arrival in Can Tho, hotel check-in, welcome dinner',
            'Day 2': 'Floating market visit, handicraft village, fruit garden',
            'Day 3': 'Transfer to Chau Doc, explore Tra Su Forest',
            'Day 4': 'Cultural experience, folk music show',
            'Day 5': 'Shopping, farewell lunch, departure'
        },
        includes: [
            '4-star hotel accommodation',
            'Professional English-speaking guide',
            'All meals (breakfast, lunch, dinner)',
            'Entrance fees and boat trips',
            'Travel insurance'
        ],
        images: [
            'https://i.imgur.com/7ZzNj0l.jpg',
            'https://i.imgur.com/r5E4UYQ.jpg',
            'https://i.imgur.com/sLt8fPI.jpg'
        ]
    },
    {
        id: '2',
        title: 'Floating Market Explorer',
        location: 'Tien Giang & Vinh Long, Vietnam',
        price: 759,
        rating: 4.6,
        reviews: 96,
        duration: '4 days',
        groupSize: 'Max 12 people',
        difficulty: 'Easy',
        description: 'Immerse yourself in life on water and discover the authentic culture of the Mekong’s floating markets.',
        highlights: [
            'Explore Cai Be Floating Market',
            'Visit local handicraft workshops',
            'Enjoy fresh tropical fruits in orchards',
            'Traditional rowing sampan experience',
            'Local homestay by the river',
            'Cook and dine with locals'
        ],
        itinerary: {
            'Day 1': 'Depart from Ho Chi Minh City to Tien Giang, check in homestay',
            'Day 2': 'Cai Be Market tours, local craft demo, candy making',
            'Day 3': 'Transfer to Vinh Long, orchard tours, cooking class',
            'Day 4': 'Morning relax, lunch, return to HCMC'
        },
        includes: [
            'Riverside homestay',
            'English-speaking local guide',
            'All meals',
            'Transportation and entrance tickets',
            'Small local gifts'
        ],
        images: [
            'https://i.imgur.com/k1e7KxK.jpg',
            'https://i.imgur.com/MKc3ZbZ.jpg',
            'https://i.imgur.com/Ui0Z2rU.jpg'
        ]
    },
    {
        id: '3',
        title: 'Tra Su Eco Retreat',
        location: 'An Giang, Vietnam',
        price: 599,
        rating: 4.9,
        reviews: 88,
        duration: '3 days',
        groupSize: 'Max 10 people',
        difficulty: 'Moderate',
        description: 'Reconnect with nature at the tranquil Tra Su Forest and explore An Giang’s spiritual and cultural highlights.',
        highlights: [
            'Paddle through Tra Su Cajuput Forest',
            'Visit Sam Mountain & Ba Chua Xu Temple',
            'Discover Cham ethnic village',
            'Watch sunset over Hau River',
            'Taste vegetarian and local specialties'
        ],
        itinerary: {
            'Day 1': 'Arrive in Chau Doc, visit Cham village',
            'Day 2': 'Explore Tra Su Forest, boat and walking tours',
            'Day 3': 'Visit Sam Mountain, local market, return trip'
        },
        includes: [
            'Eco-lodge accommodation',
            'Local expert guide',
            'All meals',
            'Entrance fees and transportation',
            'Insurance'
        ],
        images: [
            'https://i.imgur.com/J7v7Mly.jpg',
            'https://i.imgur.com/N50GqS4.jpg',
            'https://i.imgur.com/qLpvIcs.jpg'
        ]
    },
    {
        id: '4',
        title: 'Ben Tre Coconut Adventure',
        location: 'Ben Tre, Vietnam',
        price: 499,
        rating: 4.8,
        reviews: 112,
        duration: '2 days',
        groupSize: 'Max 12 people',
        difficulty: 'Easy',
        description: 'Discover the “Land of Coconuts” with boat rides, local workshops, and warm countryside hospitality.',
        highlights: [
            'Visit coconut candy workshop',
            'Cycle through peaceful villages',
            'Sampan ride in small canals',
            'Cook traditional Vietnamese pancakes',
            'Relax at riverside homestay'
        ],
        itinerary: {
            'Day 1': 'Arrive in Ben Tre, bike tours, canoe trip',
            'Day 2': 'Cooking experience, fruit orchard visit, return'
        },
        includes: [
            'Riverside homestay',
            'All transfers and activities',
            'Local guide',
            'Meals included',
            'Entrance fees'
        ],
        images: [
            'https://i.imgur.com/f5WUyfu.jpg',
            'https://i.imgur.com/yvJ3fUe.jpg',
            'https://i.imgur.com/2pZy2Cp.jpg'
        ]
    },
    {
        id: '5',
        title: 'Sa Dec Flower & Culture tours',
        location: 'Dong Thap, Vietnam',
        price: 399,
        rating: 4.5,
        reviews: 74,
        duration: '2 days',
        groupSize: 'Max 10 people',
        difficulty: 'Easy',
        description: 'Discover the colorful flower city of Sa Dec and its rich French-Vietnamese heritage.',
        highlights: [
            'Sa Dec Flower Village',
            'Visit Huynh Thuy Le Ancient House',
            'Explore local craft villages',
            'Taste signature Sa Dec noodles',
            'Walk through charming alleys'
        ],
        itinerary: {
            'Day 1': 'Arrival, visit ancient house and flower village',
            'Day 2': 'Craft village tours, lunch, return to HCMC'
        },
        includes: [
            '3-star hotel stay',
            'Local guide',
            'Entrance tickets',
            'Meals',
            'Transportation'
        ],
        images: [
            'https://i.imgur.com/VVyxCqz.jpg',
            'https://i.imgur.com/BPjBoKN.jpg',
            'https://i.imgur.com/wdQFdZx.jpg'
        ]
    },
    {
        id: '6',
        title: 'Long Xuyen Heritage tours',
        location: 'An Giang, Vietnam',
        price: 549,
        rating: 4.6,
        reviews: 63,
        duration: '3 days',
        groupSize: 'Max 12 people',
        difficulty: 'Easy',
        description: 'Step into the cultural heart of the Mekong and discover the untold stories of Long Xuyen.',
        highlights: [
            'Visit Long Xuyen Floating Market',
            'Memorial House of President Ton Duc Thang',
            'Explore ancient Oc Eo ruins',
            'Discover Khmer & Cham cultures',
            'Catch fish in the countryside'
        ],
        itinerary: {
            'Day 1': 'Arrival in Long Xuyen, city tours',
            'Day 2': 'Visit Oc Eo ruins, cultural exchange activities',
            'Day 3': 'Traditional fish catching, farewell lunch, return'
        },
        includes: [
            'Comfortable hotel stay',
            'English-speaking guide',
            'All meals',
            'Transport & entry tickets',
            'Travel insurance'
        ],
        images: [
            'https://i.imgur.com/EH3F2Ng.jpg',
            'https://i.imgur.com/VL0C7Cu.jpg',
            'https://i.imgur.com/xsFgsvr.jpg'
        ]
    }
];