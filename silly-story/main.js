// references
let GenerateRandomButton = document.querySelector('#generate-random-button');
let container = document.querySelector(".container");
let customName = document.getElementById("custom-name");

// variable declarations and init
let insertX = ["Willy the Goblin", "Big Daddy Father", "Christmas"];
let insertY = ["the soup kitchen", "Disneyland", "the White House"];
let insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

    // to choose a random element from insertX, Y, Z
let random = Math.floor(Math.random()*3);

let storyText = `It was 94 fahrenheit outside, so ${insertX[random]} went for a walk. When they got to ${insertY[random]}, they stared in horror for a few moments, then ${insertZ[random]}. Bob saw the whole thing, but was not surprised — ${insertX[random]} weighs 300 pounds, and it was a hot day.`;

let customStoryText = `It was 94 fahrenheit outside, ${customName.value} went for a walk. When they got to ${insertY[random]}, they stared in horror for a few moments, then ${insertZ[random]}. ${customName.value} saw the whole thing, but was not surprised — ${insertX[random]} weighs 300 pounds, and it was a hot day.`;

// functions
function generateRandomStory()
{
    let storyPara = document.createElement("p");

    if(customName.value !== "")
    {
        storyPara.innerText = customStoryText;   
    }

    else
    {
        storyPara.innerText = storyText;
    }
    container.appendChild(storyPara);
}


// events
GenerateRandomButton.addEventListener("click", generateRandomStory);