let x =10;
let arr = [1,2,3,4,5];

console.log(arr[2]);
console.log(arr);

let weather = "맑음";
let weatherInfo = {
    day : 260605,
    weather : "맑음",
    temperature : 5,
    location : '양재동'
};

console.log(weatherInfo);
console.log(weatherInfo.day);
console.log(weatherInfo.weather);
console.log(weatherInfo.temperature);
console.log(weatherInfo.location);

let lunchInfo = {
    menu: "짜장면",
    price: 5000,
    shop: '대천반점',
    location: '시장내부'
};

let shoopInfo = {
    name: '대천반점',
    location: '시장내부',
    menu: [
        '짜장면',
        '짬뽕',
        '잡채밥',
        '우동'
    ]
};

console.log(shoopInfo);
console.log(shoopInfo.menu);
console.log(shoopInfo.menu[2]);

let shoopInfo2 = {
    name: '대천반점',
    location: '시장내부',
    menu: [
        {
        'name': '짜장면', 
        'price': 5000
        },
        {
        'name': '짬뽕',
        'price': 7000
        },
        {
        'name': '잡채밥', 
        'price': 8000
    },
        {
        'name': '우동', 
        'price': 5000
        }
    ]
};

console.log(shoopInfo2.menu[0]);
console.log(shoopInfo2.menu[2].price);
let shopInfo3 = {
    name:'대천반점',
    location:'시장내부',
    address: {
        postCode: 51211,
        addr1:'천안시',
        addr2:'동남구'
    },
    menu: [
        {
            name:'짜장면',
            price:5000,
            raw:['양파', '돼지고기', '춘장']
        },
        {
            name:'잡채밥',
            price:7000,
            raw:['양파', '잡채', '밥']
        },
        {
            name:'우동',
            price:5000,
            raw:['양파', '호박', '옥수수면']
        },
        {
            name:'울면',
            price:7000,
            raw:['새우', '호박', '파', '면', '당근']
        }
    ]
};
console.log(shopInfo3.address.addr1);

console.log(shopInfo3.menu[0].raw[2]);

let shopList = [
{
    name : '대천반점',
    location : '천안시장내부',
    menu : [
        { 
            name:'짜장면',
            price: 5000,
            raw: ['춘장', '양파', '돼지고기']
        },
        {
            name:'짬뽕',
            price:7000,
            raw: ['오징어', '면', '고춧가루']
        },
        {
            name:'볶음밥',
            price:7000,
            raw: ['달걀', '당근', '감자']
        }
    ]
},
{
    name : '맘스터치',
    location : '천안길가에',
    menu : [
        { 
            name:'싸이버거',
            price: 6000,
            raw: ['빵', '채소', '닭다리살']
        },
        {
            name:'휠렛',
            price:7000,
            raw: ['빵', '채소', '닭가슴살']
        }
    ]
}
];

console.log( shopList[1].menu[1].price );

console.log( shopList[0].menu[2].raw );

console.log( shopList[1].menu[0].raw[2] );
