// 42.  Write a program to print words representation of entered number. e.g. if entered number is 245983 then result should be Two Lac Forty Five Thousand Nine Hundred Eighty Three

// Math.floor same work parseInt 

function convertToWords(n) {
    if (n === 0) 
        return "Zero";
    
    // Words for numbers 0 to 19
    const units = [
        "",        "One",       "Two",      "Three",
        "Four",    "Five",      "Six",      "Seven",
        "Eight",   "Nine",      "Ten",      "Eleven",
        "Twelve",  "Thirteen",  "Fourteen", "Fifteen",
        "Sixteen", "Seventeen", "Eighteen", "Nineteen"
    ];
    
    // Words for numbers multiple of 10        
    const tens = [
        "",     "",     "Twenty",  "Thirty", "Forty",
        "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
    ];
    
    const multiplier = ["", "Thousand", "Million", "Billion"];
    
    let res = "";
    let group = 0;
    
    // Process number in group of 1000s
    while (n > 0) {
        if (n % 1000 !== 0) {
            
            let value = n % 1000; 
            let temp = "";
            
            // Handle 3 digit number
            if (value >= 100) {
                temp = units[Math.floor(value / 100)] + " Hundred "; // like 200%100 = 2 + Hundred
                value %= 100;
            }

            // Handle 2 digit number
            if (value >= 20) {
                temp += tens[Math.floor(value / 10)] + " ";// like 200%10 = 20 
                
                value %= 10;
            }

            // Handle unit number
            if (value > 0) {
                temp += units[value] + " ";
            }

            // Add the multiplier according to the group
            temp += multiplier[group] + " ";
            
            // Add the result of this group to overall result
            res = temp + res;
        }
        n = Math.floor(n / 1000);
        group++;
    }
    
    // Remove trailing space
    return res.trim();
}

const n = 520;
console.log(convertToWords(n));