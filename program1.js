/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // Dictionary to map closing brackets to opening brackets
    const bracketMap = { ')': '(', '}': '{', ']': '[' };
    // Stack to keep track of opening brackets
    const stack = [];
    
    // Iterate through each character in the string
    for (const char of s) {
        // If the character is a closing bracket
        if (bracketMap[char]) {
            // Pop from the stack if it's not empty, otherwise use a dummy value
            const topElement = stack.pop() || '#';
            // Check if the popped element matches the corresponding opening bracket
            if (bracketMap[char] !== topElement) {
                return false;
            }
        } else {
            // It's an opening bracket, push it onto the stack
            stack.push(char);
        }
    }
    
    // If the stack is empty, all opening brackets had matching closing brackets
    return stack.length === 0;
};

module.exports = { isValid };



