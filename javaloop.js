//task1
let score = 92;

if (score < 0 || score > 100) {
    console.log("درجة غير صحيحة");
} else if (score >= 85) {
    console.log("ممتاز");
} else if (score >= 75) {
    console.log("جيد جدا");
} else if (score >= 65) {
    console.log("جيد");
} else if (score >= 50) {
    console.log("مقبول");
} else {
    console.log("راسب");
}

//task2
let drinkCode = 3;

switch (drinkCode) {
    case 1:
        console.log("طلبك: قهوة - السعر: 15 جنيه");
        break;

    case 2:
        console.log("طلبك: شاي - السعر: 10 جنيه");
        break;

    case 3:
        console.log("طلبك: عصير برتقال - السعر: 20 جنيه");
        break;

    case 4:
        console.log("طلبك: مياه - السعر: 5 جنيه");
        break;

    default:
        console.log("اختيار غير موجود");
}

//task3

let distance = 1000;
let total = 0;

for (let day = 1; day <= 7; day++) {
    if (distance >= 3000) {
        console.log(`اليوم ${day}: ${distance} متر (يوم صعب)`);
    } else {
        console.log(`اليوم ${day}: ${distance} متر`);
    }

    total += distance;
    distance += 500;
}

console.log(`إجمالي المسافة: ${total} متر`);


//task4

let price = 1000;
let savings = 0;
let weeks = 0;

while (savings < price) {
    savings += 150;
    weeks++;

    console.log(`الأسبوع ${weeks}: معاك ${savings} جنيه`);
}

console.log(
    `وصلت للهدف بعد ${weeks} أسابيع، ومعاك ${savings} جنيه`
);








//task5
let operations = ["balance", "withdraw", "deposit"];
let balance = 2000;
let amount = 500;

for (let i = 0; i < operations.length; i++) {
    switch (operations[i]) {
        case "balance":
            console.log(`رصيدك: ${balance} جنيه`);
            break;

        case "withdraw":
            if (amount > balance) {
                console.log("رصيدك لا يكفي");
            } else {
                balance -= amount;
                console.log(`تم سحب ${amount} جنيه، رصيدك الحالي: ${balance} جنيه`);
            }
            break;

        case "deposit":
            balance += amount;
            console.log(`تم إيداع ${amount} جنيه، رصيدك الحالي: ${balance} جنيه`);
            break;
    }
}

git --version

git config --global user.name "Your name"
git config --global user.email "Your email"
git init