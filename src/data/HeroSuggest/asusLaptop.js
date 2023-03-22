import { v4 as uuidv4 } from 'uuid';

export const asusSuggestLaptop = [
    {
        // https://www.amazon.com/ASUS-Vivobook-Touchscreen-i3-1115G4-Accessories/dp/B0B12H2BTB/ref=sr_1_1?crid=H9M60A8L1JQY&keywords=asus+laptop&qid=1679520386&sprefix=asus+%2Caps%2C1022&sr=8-1
        // https://www.amazon.com/ASUS-Display-i7-12650H-Thunderbolt-FX517ZM-AS73/dp/B09RMH9B6F/ref=sr_1_2?crid=H9M60A8L1JQY&keywords=asus+laptop&qid=1679520386&sprefix=asus+%2Caps%2C1022&sr=8-2
        title: 'Asus Laptops',
        path: '/suggest/laptop/asus',
        products_col_one: [
            {
                id: uuidv4(),
                img: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81+m+3pPAeL._AC_SX679_.jpg',
                name: 'ASUS 2023 Vivobook 15.6" FHD Touchscreen Thin Laptop, Intel Core i3-1115G4 Up to 3.9Ghz, 20GB RAM,1TB PCIE SSD, HDMI, Fingerprint, Backlit KB, Windows 11S, Grey+ GM Accessories'
            },
            {
                id: uuidv4(),
                img: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71AGOX9MORL._AC_SX679_.jpg',
                name: 'ASUS TUF Dash 15 (2022) Gaming Laptop, 15.6" 144Hz FHD Display, Intel Core i7-12650H, GeForce RTX 3060, 16GB DDR5, 512GB SSD, Thunderbolt 4, Windows 11 Home, Off Black, FX517ZM-AS73'
            },
        ],
        products_col_two: [
            // https://www.amazon.com/ASUS-IPS-Type-i5-10300H-Processor-FX506LH-AS51/dp/B09SVQ25XH/ref=sr_1_3?crid=H9M60A8L1JQY&keywords=asus+laptop&qid=1679520386&sprefix=asus+%2Caps%2C1022&sr=8-3
            // https://www.amazon.com/ASUS-Display-Opti-Mechanical-Keyboard-G533QS-DS94/dp/B0B7R16YLT/ref=sr_1_4?crid=H9M60A8L1JQY&keywords=asus+laptop&qid=1679520386&sprefix=asus+%2Caps%2C1022&sr=8-4
            {
                id: uuidv4(),
                img: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81OiT2-NoeL._AC_SX466_.jpg',
                name: 'ASUS TUF F15 Gaming Laptop, 15.6" 144Hz FHD IPS-Type Display, Intel Core i5-10300H Processor, GeForce GTX 1650, 8GB DDR4 RAM, 512GB PCIe SSD, Wi-Fi 6, Windows 11 Home, FX506LH-AS51'
            },
            {
                id: uuidv4(),
                img: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71sgAr9atBS._AC_SX466_.jpg',
                name: 'ASUS ROG Strix Scar 15 Gaming Laptop, 15.6" 300Hz IPS Type FHD Display, NVIDIA GeForce RTX 3080, AMD Ryzen 9 5900HX, 16GB DDR4, 1TB SSD, Opti-Mechanical Per-Key RGB Keyboard, Windows 11, G533QS-DS94'
            },
        ]
    }
]