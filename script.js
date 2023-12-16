let boxes = document.querySelectorAll(".box");
let turn = true; // player x and y

const winpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box is clicked");
        // alert("clicked");
        if (turn) {
            box.innerText = "O";
            turn = false;
        } else {
            box.innerText = "X";
            turn = true;
        }

        box.disabled = true;

        checkwinner();
    });
});

const checkwinner = () => {
    for (const pattern of winpattern) {
        console.log(pattern[0], pattern[1], pattern[2]);
        const pos1val = boxes[pattern[0]].innerText;
        const pos2val = boxes[pattern[1]].innerText;
        const pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("Winner", pos1val);
               
                // Disable all boxes
                boxes.forEach(box => {
                    box.disabled = true;
                });
                alert("you Win",pos1val)
            }
        }
    }
};

