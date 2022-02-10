/**
 * @description This function increments or decrements the value
 * of the Red, Green or Blue attribute of the color array depending on the parameters passed to it
 * @param {String} action The action to be carried out. Could be 'add' or 'decrease' .
 * @param {String} colorName The name of the color action should be carried out on. Could be 'red', 'green' or 'blue'. Defaults to 'red'.
 * @param {Number[]} state The array of numbers representing rbg color codes.
 * @param {Object} hook React hook that can change the state of the react state object.
 */
const editColor = (action = 'add', colorName = 'red', state = [0, 0, 0], hook) => {
    let indexOfColor = 0;

    switch(colorName) {
        case 'red':
            indexOfColor = 0;
            break;
        case 'green':
            indexOfColor = 1;
            break;
        case 'blue':
            indexOfColor = 2;
            break;
        default: 
            indexOfColor = 0;
    }
    
    switch(action) {
        case 'add' : {
            if(state[indexOfColor] < 255){
                state[indexOfColor]++;
                hook(state);
            }
            break;
        }
        default: {
            if(state[indexOfColor] > 0){
                state[indexOfColor]--;
                hook(state);
            }
            break;
        }
    }
}

export default editColor;