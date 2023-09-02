import {expect} from 'chai'

// Find 2 different ways to concatenate the variables to display the sentence "How do you like Javascript so far?"
// Question 1: What is the difference between the parameter of phrase1 and phrase2?
// Question 2: What happens if you concatenate a number at the end of the string?

const word1 = "How";
const word2 = "do";
const word3 = "you";
const word4 = "like";
const word5 = "Javascript";
const word6 = "so";
const word7 = "far?";
const number = 80934860;


function phrase1(words) {
    let result = '';

        for (let i = 0; i < words.length  ; i = i+1) {
                
        if (i < words.length -1){
            result = result+words[i] +' '          
        }
        else{
            result = result+words[i]
        }

    } 
    return result;

}

function phrase2(...words) {
    let result;
    return result;
}

const resultToValidate = 'How do you like Javascript so far?'

it('concatenate1 should return the correct phrase', function() {
    expect(phrase1([word1, word2, word3, word4, word5, word6, word7])).to.equal(resultToValidate);
});

it('concatenate2 should return the correct phrase', function() {
    expect(phrase2(word1, word2, word3, word4, word5, word6, word7)).to.equal(resultToValidate);
});
